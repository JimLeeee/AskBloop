import asyncio
import json
import time
from fastapi import FastAPI, Request, Response
from fastapi.responses import StreamingResponse
import requests
import uvicorn
from pprint import pprint
from openai import OpenAI
import os 
from sse_starlette.sse import EventSourceResponse
import sseclient

os.environ["OPENAI_API_KEY"] = "sk-jnwMskFg93IhmyjM809eEcF1Cb404875B1FdDdE8443828Eb"
os.environ["OPENAI_API_BASE"] = "http://192.168.30.80:3002/v1"

client = OpenAI(base_url="http://192.168.30.80:3002/v1")

print(client)


app = FastAPI()

token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDcyNTM3OSwianRpIjoiYjAxNWQ5ODMtNjQ3OC00ZDJhLTgwMTEtMTE2MDQyZWM1NDM3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjZlNzBlOTJkZmY3YTQ3Nzc5NDI5YjMyNWVjYjgxNTQwIiwibmJmIjoxNzEwNzI1Mzc5LCJleHAiOjE3MTA4MTE3NzksInVpZCI6IjY1YjBkMGMyN2RjZGYxMWEwZjliMWRkYiIsInVwbGF0Zm9ybSI6InBjIiwicm9sZXMiOlsidW5hdXRoZWRfdXNlciJdfQ.TWC-dcoR7yJtH35JvPCeDcF_b8dwWjtY0wA2dAbU6Oc'
reftoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDE0MTc5MiwianRpIjoiNWQzNjY2YWUtMDJjNi00NDkyLWIzNjMtMWY0YmIyN2I0NjkxIiwidHlwZSI6InJlZnJlc2giLCJzdWIiOiI2ZTcwZTkyZGZmN2E0Nzc3OTQyOWIzMjVlY2I4MTU0MCIsIm5iZiI6MTcxMDE0MTc5MiwiZXhwIjoxNzI1NjkzNzkyLCJ1aWQiOiI2NWIwZDBjMjdkY2RmMTFhMGY5YjFkZGIiLCJ1cGxhdGZvcm0iOiJwYyIsInJvbGVzIjpbInVuYXV0aGVkX3VzZXIiXX0.efrWOPwcwV1uZt1O6mBdntGbhbOBcbfizqGofLAWPzs'
# @app.get("/v1/testglm")
async def getGlm4(text: str):
    def get_new_token():
        global token,reftoken
        refresh_url = 'https://chatglm.cn/chatglm/backend-api/v1/user/refresh'
        hdrs = {
            'Authorization': f'Bearer {reftoken}'
        }
        refresh_response = requests.post(refresh_url,headers=hdrs)
        print('reftoken',refresh_response.text)
        token = refresh_response.json()['result']['accessToken']
    url = 'https://chatglm.cn/chatglm/backend-api/assistant/stream'
    headers = {
        'Accept-Language': 'zh-CN,zh;q=0.9,fr;q=0.8,en;q=0.7',
        'Authorization': f'Bearer {token}',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://chatglm.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://chatglm.cn/main/alltoolsdetail',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'accept': 'text/event-stream',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
                }
    data = {
        "assistant_id": "65940acff94777010aa6b796",
        "conversation_id": "",
        "meta_data": {
            "is_test": False,
            "input_question_type": "xxxx",
            "channel": "",
            "draft_id": ""
        },
        # "messages": messages
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": f'{text} ' + "You're a expert programmer,answer the following question in detail in chinese"
                    },
                ]
            }
        ]
    }

    response = requests.post(url, headers=headers, data=json.dumps(data), stream=True)
    if response.status_code == 401:
        get_new_token()
        headers['Authorization'] = f'Bearer {token}'
        response = requests.post(url, headers=headers, data=json.dumps(data), stream=True)
    response.raise_for_status()
    
    last_chunk = None
    client = sseclient.SSEClient(response)
    for chunk in client.events():
        # print(json.loads(chunk.data))
        last_chunk = chunk
    res = json.loads(last_chunk.data)['parts'][0]['content']
    return res
@app.post("/v1/q2")
async def chat_oneshotglm(request: Request):
    data = await request.json()
    print(data)
    
    msgs = data['messages']['messages'][0]['content'] + "统计一下文件里有哪些函数,各自的作用,需要包含函数的链接，最后对调用关系总结一下"

    glmres = await getGlm4(msgs)
    print(glmres)
    async def generate():
        content = glmres[0]['text']
        print('test',content)
        for i in range(0, len(content), 8192):
            chunk = content[i:i+8192]            
            event = {
                "Ok": chunk,
            }
            data = f'data:{json.dumps(event)}\n\n' 
            yield data
    return StreamingResponse(generate(), media_type='text/event-stream')

@app.post("/v1/q")
async def chat_oneshot(request: Request):
    data = await request.json()
    print(data)

    if data['model'] is None:
        data['model']="gpt-3.5-turbo"
        # data['model']="chatglm_turbo"
    if data['functions'] is not None:
        if data['functions'] == "":
            data.pop('functions')
        else:
            data['functions'] = data['functions']['functions']
    data['messages'] = data['messages']['messages']
    data['stream']= False
    data.pop('extra_stop_sequences')
    data.pop('provider')
    data.pop('session_reference_id')

    openai_stream = client.chat.completions.create(
        **data
    )
    print('ttt',openai_stream)
    async def generate():
        content = openai_stream.choices[0].message.content
        print('test',content)
        for i in range(0, len(content), 1024):
            chunk = content[i:i+1024]            
            event = {
                "Ok": chunk,
            }
            data = f'data:{json.dumps(event)}\n\n' 
            yield data
    return StreamingResponse(generate(), media_type='text/event-stream')

@app.post("/v2/q")
async def chat_oneshot(request: Request):
    data = await request.json()
    pprint(data)
    if data['model'] is None:
        data['model']="gpt-3.5-turbo"
    if data['functions'] is not None:
        if data['functions'] == "":
            data.pop('functions')
        else:
            data['functions'] = data['functions']['functions']
    data['messages'] = data['messages']['messages']
    data['stream']= False
    data.pop('extra_stop_sequences')
    data.pop('provider')
    data.pop('session_reference_id')
    data.pop('quota_gated')

    openai_stream = client.chat.completions.create(
        **data
    )
    async def generate():
        content = openai_stream.choices[0].message.content
        print('test',content)
        for i in range(0, len(content), 1024):
            chunk = content[i:i+1024]            
            event = {
                "Ok": chunk,
            }
            data = f'data:{json.dumps(event)}\n\n' 
            yield data
    return StreamingResponse(generate(), media_type='text/event-stream')
@app.get("/v1/compatibility")
async def chat_compatibility(version: str = None):
    return {"success":"true"}
@app.get("/v1/test")
async def root(request: Request):  
    async def event_generator(request: Request):  
        res_str = "七夕情人节即将来临，我们为您准备了精美的鲜花和美味的蛋糕"  
        for i in res_str:  
            if await request.is_disconnected():  
                print("连接已中断")  
                break  
            yield {  
                "event": "message",  
                "retry": 15000,  
                "data": f'"data": {i}\n\n' 
            }  
  
            await asyncio.sleep(0.1)  
    g = event_generator(request)  
    return EventSourceResponse(g)

if __name__ == "__main__":
    config = uvicorn.Config("testbloop:app", host="0.0.0.0", port=5000, log_level="info", reload=True, workers=1)
    server = uvicorn.Server(config)
    server.run()