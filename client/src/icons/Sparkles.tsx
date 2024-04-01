import IconWrapper from './Wrapper';

const RawIcon = (
  <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5005 19.1665C11.7261 19.1665 11.9015 19.0059 11.9389 18.764C12.4714 14.8348 13.0189 14.2117 16.9163 13.7727C17.0283 13.7657 17.1335 13.7166 17.2108 13.6352C17.2882 13.5538 17.3319 13.4461 17.3333 13.3337C17.3333 13.0982 17.1569 12.9237 16.9163 12.8873C13.0563 12.4259 12.5078 11.8627 11.9379 7.89601C11.8951 7.66047 11.7261 7.49988 11.4995 7.49988C11.2728 7.49988 11.0974 7.66047 11.0611 7.89601C10.5264 11.8327 9.97897 12.4548 6.08367 12.8873C5.84201 12.9162 5.66666 13.0993 5.66666 13.3337C5.66666 13.5607 5.84201 13.7438 6.08367 13.7727C9.93513 14.2995 10.4687 14.8048 11.0611 18.764C11.1038 19.0059 11.2738 19.1665 11.5005 19.1665Z"
      fill="currentColor"
    />
    <path
      d="M4.00033 11.6665C4.12925 11.6665 4.22945 11.5747 4.25084 11.4365C4.55512 9.19118 4.86795 8.83512 7.09506 8.58429C7.15905 8.58028 7.21917 8.55221 7.26336 8.50569C7.30755 8.45917 7.33255 8.39765 7.33335 8.33346C7.33335 8.19886 7.23254 8.09914 7.09506 8.07834C4.88934 7.81466 4.57589 7.49286 4.25023 5.22618C4.22579 5.09159 4.12925 4.99982 3.99972 4.99982C3.87018 4.99982 3.76998 5.09159 3.7492 5.22618C3.4437 7.47573 3.13087 7.83118 0.904979 8.07834C0.766892 8.09486 0.666687 8.19947 0.666687 8.33346C0.666687 8.46315 0.766892 8.56777 0.904979 8.58429C3.10582 8.88529 3.41071 9.17405 3.7492 11.4365C3.77364 11.5747 3.87079 11.6665 4.00033 11.6665Z"
      fill="currentColor"
    />
    <path
      d="M9.83357 5.83325C9.93026 5.83325 10.0054 5.76443 10.0215 5.66073C10.2497 3.97678 10.4843 3.70973 12.1546 3.52161C12.2026 3.5186 12.2477 3.49754 12.2808 3.46266C12.314 3.42777 12.3327 3.38163 12.3333 3.33348C12.3333 3.23254 12.2577 3.15774 12.1546 3.14214C10.5003 2.94438 10.2652 2.70303 10.021 1.00302C10.0027 0.902078 9.93026 0.833252 9.83311 0.833252C9.73596 0.833252 9.66081 0.902078 9.64523 1.00302C9.4161 2.69018 9.18148 2.95677 7.51206 3.14214C7.4085 3.15453 7.33334 3.23299 7.33334 3.33348C7.33334 3.43076 7.4085 3.50922 7.51206 3.52161C9.16269 3.74736 9.39136 3.96393 9.64523 5.66073C9.66356 5.76443 9.73642 5.83325 9.83357 5.83325Z"
      fill="currentColor"
    />
  </svg>
);

const BoxedIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5005 19.1665C12.7261 19.1665 12.9015 19.0059 12.9389 18.764C13.4714 14.8348 14.0189 14.2117 17.9163 13.7727C18.0283 13.7657 18.1335 13.7166 18.2108 13.6352C18.2882 13.5538 18.3319 13.4461 18.3333 13.3337C18.3333 13.0982 18.1569 12.9237 17.9163 12.8873C14.0563 12.4259 13.5078 11.8627 12.9379 7.89601C12.8951 7.66047 12.7261 7.49988 12.4995 7.49988C12.2728 7.49988 12.0974 7.66047 12.0611 7.89601C11.5264 11.8327 10.979 12.4548 7.08367 12.8873C6.84201 12.9162 6.66666 13.0993 6.66666 13.3337C6.66666 13.5607 6.84201 13.7438 7.08367 13.7727C10.9351 14.2995 11.4687 14.8048 12.0611 18.764C12.1038 19.0059 12.2738 19.1665 12.5005 19.1665Z"
      fill="currentColor"
    />
    <path
      d="M5.00033 11.6665C5.12925 11.6665 5.22945 11.5747 5.25084 11.4365C5.55512 9.19118 5.86795 8.83512 8.09506 8.58429C8.15905 8.58028 8.21917 8.55221 8.26336 8.50569C8.30755 8.45917 8.33255 8.39765 8.33335 8.33346C8.33335 8.19886 8.23254 8.09914 8.09506 8.07834C5.88934 7.81466 5.57589 7.49286 5.25023 5.22618C5.22579 5.09159 5.12925 4.99982 4.99971 4.99982C4.87018 4.99982 4.76998 5.09159 4.7492 5.22618C4.4437 7.47573 4.13087 7.83118 1.90498 8.07834C1.76689 8.09486 1.66669 8.19947 1.66669 8.33346C1.66669 8.46315 1.76689 8.56777 1.90498 8.58429C4.10582 8.88529 4.41071 9.17405 4.7492 11.4365C4.77364 11.5747 4.87079 11.6665 5.00033 11.6665Z"
      fill="currentColor"
    />
    <path
      d="M10.8336 5.83325C10.9303 5.83325 11.0054 5.76443 11.0215 5.66073C11.2497 3.97678 11.4843 3.70973 13.1546 3.52161C13.2026 3.5186 13.2477 3.49754 13.2808 3.46266C13.314 3.42777 13.3327 3.38163 13.3333 3.33348C13.3333 3.23254 13.2577 3.15774 13.1546 3.14214C11.5003 2.94438 11.2652 2.70303 11.021 1.00302C11.0027 0.902078 10.9303 0.833252 10.8331 0.833252C10.736 0.833252 10.6608 0.902078 10.6452 1.00302C10.4161 2.69018 10.1815 2.95677 8.51206 3.14214C8.4085 3.15453 8.33334 3.23299 8.33334 3.33348C8.33334 3.43076 8.4085 3.50922 8.51206 3.52161C10.1627 3.74736 10.3914 3.96393 10.6452 5.66073C10.6636 5.76443 10.7364 5.83325 10.8336 5.83325Z"
      fill="currentColor"
    />
  </svg>
);

export default IconWrapper(RawIcon, BoxedIcon);
