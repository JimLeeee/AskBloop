import IconWrapper from './Wrapper';

const RawIcon = (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4ZM5.33237 4.60139C5.26839 4.53647 5.18162 4.5 5.09114 4.5C5.04634 4.5 5.00198 4.50895 4.96059 4.52635C4.9192 4.54375 4.8816 4.56924 4.84992 4.60139C4.81824 4.63353 4.79311 4.67169 4.77597 4.71369C4.75882 4.75568 4.75 4.8007 4.75 4.84615V13.1538C4.75 13.2457 4.78594 13.3337 4.84992 13.3986C4.91389 13.4635 5.00067 13.5 5.09114 13.5C5.18162 13.5 5.26839 13.4635 5.33237 13.3986C5.39634 13.3337 5.43228 13.2457 5.43228 13.1538V10.6546L6.43388 10.4008C7.30287 10.1804 8.22087 10.2827 9.02201 10.6892L9.07113 10.7142C9.99915 11.185 11.0605 11.3107 12.0705 11.0695L13.4869 10.7312C13.568 10.7119 13.6393 10.6631 13.6874 10.5941C13.7355 10.525 13.7571 10.4405 13.748 10.3565C13.5772 8.77092 13.5764 7.17125 13.7457 5.58554C13.7515 5.53056 13.7442 5.47497 13.7245 5.42342C13.7048 5.37187 13.6732 5.32587 13.6323 5.28927C13.5915 5.25266 13.5426 5.22651 13.4897 5.21302C13.4369 5.19952 13.3816 5.19907 13.3286 5.21169L11.9144 5.54954C11.0598 5.75361 10.1616 5.64713 9.37634 5.24862L9.32722 5.22369C8.38033 4.74334 7.29533 4.62252 6.26831 4.88308L5.43228 5.09538V4.84615C5.43228 4.75435 5.39634 4.6663 5.33237 4.60139Z"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 1C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H15C17.2091 19 19 17.2091 19 15V5C19 2.79086 17.2091 1 15 1H5ZM6.33237 5.60139C6.26839 5.53647 6.18162 5.5 6.09114 5.5C6.04634 5.5 6.00198 5.50895 5.96059 5.52635C5.9192 5.54375 5.8816 5.56924 5.84992 5.60139C5.81824 5.63353 5.79311 5.67169 5.77597 5.71369C5.75882 5.75568 5.75 5.8007 5.75 5.84615V14.1538C5.75 14.2457 5.78594 14.3337 5.84992 14.3986C5.91389 14.4635 6.00067 14.5 6.09114 14.5C6.18162 14.5 6.26839 14.4635 6.33237 14.3986C6.39634 14.3337 6.43228 14.2457 6.43228 14.1538V11.6546L7.43388 11.4008C8.30287 11.1804 9.22087 11.2827 10.022 11.6892L10.0711 11.7142C10.9992 12.185 12.0605 12.3107 13.0705 12.0695L14.4869 11.7312C14.568 11.7119 14.6393 11.6631 14.6874 11.5941C14.7355 11.525 14.7571 11.4405 14.748 11.3565C14.5772 9.77092 14.5764 8.17125 14.7457 6.58554C14.7515 6.53056 14.7442 6.47497 14.7245 6.42342C14.7048 6.37187 14.6732 6.32587 14.6323 6.28927C14.5915 6.25266 14.5426 6.22651 14.4897 6.21302C14.4369 6.19952 14.3816 6.19907 14.3286 6.21169L12.9144 6.54954C12.0598 6.75361 11.1616 6.64713 10.3763 6.24862L10.3272 6.22369C9.38033 5.74334 8.29533 5.62252 7.26831 5.88308L6.43228 6.09538V5.84615C6.43228 5.75435 6.39634 5.6663 6.33237 5.60139Z"
      fill="currentColor"
    />
  </svg>
);

export default IconWrapper(RawIcon, BoxedIcon);
