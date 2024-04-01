## forked from [bloop](https://github.com/BloopAI/bloop) v0.4.14
## can run locally without tauri for development
```bash
#frontend
npm insall
npm run start-web

#answerapi
python testbloop.py

#backend
cargo build --bin bleep --release

#run:
./bleep --index-dir=~/bleepdatatest --github-client-id=83f46f9bf7725767dc55 --github-client-secret=c1d3fe9497e9a982c3e6535ae4a90d50db8e7a3b --source-dir=~/bleepsrcdir --host=0.0.0.0 --answer-api-url=http://answerapi-url

```
## add a simple answerapi 