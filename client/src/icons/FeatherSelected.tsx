import IconWrapper from './Wrapper';

const RawIcon = (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.5 13C0.5 11.8954 1.39543 11 2.5 11H9.13042C9.13042 11 8.10666 13.0987 7.68359 14.5255C7.29046 15.8513 7 18 7 18H2.5C1.39543 18 0.5 17.1046 0.5 16V13Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7876 0.321582C19.7783 0.262546 19.7584 0.206919 19.7294 0.158863C19.7004 0.110807 19.6631 0.0715657 19.6203 0.0440752C19.5774 0.0165846 19.5302 0.00155633 19.482 0.000114568C19.4339 -0.00132719 19.3861 0.0108549 19.3423 0.0357495C19.0063 0.224082 18.6703 0.430748 18.3343 0.659913C18.1236 0.803246 17.9496 0.951579 17.7709 1.08658C17.5396 1.26074 17.3056 1.42324 17.0789 1.61408C16.9122 1.75408 16.7536 1.91491 16.5896 2.06324C16.3549 2.27657 16.1162 2.48157 15.8855 2.71324C15.7415 2.85824 15.6042 3.02324 15.4615 3.17574C15.2209 3.43157 14.9775 3.6824 14.7449 3.9574C14.6229 4.10157 14.5082 4.2624 14.3882 4.4124C14.1435 4.71573 13.8968 5.01573 13.6615 5.33989C13.5535 5.48906 13.4522 5.65322 13.3468 5.80656C13.1088 6.14906 12.8695 6.48822 12.6428 6.84989C12.5308 7.02989 12.4288 7.22238 12.3195 7.40655C12.1088 7.76072 11.8948 8.11071 11.6954 8.48155C11.5481 8.75238 11.4148 9.04154 11.2741 9.32154C11.1341 9.59988 10.9874 9.86987 10.8554 10.1549C10.5639 10.7805 10.29 11.4187 10.0341 12.0682C9.00071 14.6957 8.42069 16.8232 8.00602 19.5332C7.97135 19.7582 8.09002 19.9815 8.27269 19.9957C9.10338 20.0598 9.36605 19.4098 9.64073 18.164C9.71139 17.8423 9.7874 17.524 9.8694 17.209C9.89179 17.1254 9.9343 17.0525 9.9911 17.0003C10.0479 16.9481 10.1162 16.9191 10.1867 16.9173C12.3641 16.8298 15.1282 15.3632 16.8456 13.1615C16.9502 13.0274 16.8642 12.8057 16.7149 12.8099C16.6622 12.8115 16.6102 12.8115 16.5576 12.8115C15.8776 12.8115 15.2269 12.6999 14.6195 12.4982C14.5128 12.4632 14.5302 12.2749 14.6395 12.2582C14.8042 12.2332 14.9695 12.2024 15.1335 12.1624C16.5056 11.8474 17.6976 11.1115 18.589 10.114C18.7956 9.62654 18.9823 9.11738 19.149 8.58655C19.159 8.55293 19.1621 8.51665 19.1579 8.48114C19.1537 8.44562 19.1423 8.41203 19.1248 8.38353C19.1074 8.35503 19.0844 8.33255 19.058 8.31821C19.0317 8.30387 19.0029 8.29813 18.9743 8.30155C18.4749 8.35735 17.9723 8.34898 17.4743 8.27655C17.4029 8.26571 17.3963 8.13655 17.4649 8.10821C18.0657 7.85238 18.6391 7.50535 19.1723 7.07489C19.487 6.81905 19.697 6.40822 19.7703 5.94656C20.077 4.01157 20.0703 2.09241 19.7876 0.321582Z"
      fill="currentColor"
    />
    <path
      d="M3.5 5C3.5 3.89543 4.39543 3 5.5 3H13.9597C13.9597 3 12.152 5.11514 11.2225 6.62657C10.4476 7.88655 9.5 10 9.5 10H5.5C4.39543 10 3.5 9.10457 3.5 8V5Z"
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
      d="M0.5 13C0.5 11.8954 1.39543 11 2.5 11H9.13042C9.13042 11 8.10666 13.0987 7.68359 14.5255C7.29046 15.8513 7 18 7 18H2.5C1.39543 18 0.5 17.1046 0.5 16V13Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7876 0.321582C19.7783 0.262546 19.7584 0.206919 19.7294 0.158863C19.7004 0.110807 19.6631 0.0715657 19.6203 0.0440752C19.5774 0.0165846 19.5302 0.00155633 19.482 0.000114568C19.4339 -0.00132719 19.3861 0.0108549 19.3423 0.0357495C19.0063 0.224082 18.6703 0.430748 18.3343 0.659913C18.1236 0.803246 17.9496 0.951579 17.7709 1.08658C17.5396 1.26074 17.3056 1.42324 17.0789 1.61408C16.9122 1.75408 16.7536 1.91491 16.5896 2.06324C16.3549 2.27657 16.1162 2.48157 15.8855 2.71324C15.7415 2.85824 15.6042 3.02324 15.4615 3.17574C15.2209 3.43157 14.9775 3.6824 14.7449 3.9574C14.6229 4.10157 14.5082 4.2624 14.3882 4.4124C14.1435 4.71573 13.8968 5.01573 13.6615 5.33989C13.5535 5.48906 13.4522 5.65322 13.3468 5.80656C13.1088 6.14906 12.8695 6.48822 12.6428 6.84989C12.5308 7.02989 12.4288 7.22238 12.3195 7.40655C12.1088 7.76072 11.8948 8.11071 11.6954 8.48155C11.5481 8.75238 11.4148 9.04154 11.2741 9.32154C11.1341 9.59988 10.9874 9.86987 10.8554 10.1549C10.5639 10.7805 10.29 11.4187 10.0341 12.0682C9.00071 14.6957 8.42069 16.8232 8.00602 19.5332C7.97135 19.7582 8.09002 19.9815 8.27269 19.9957C9.10338 20.0598 9.36605 19.4098 9.64073 18.164C9.71139 17.8423 9.7874 17.524 9.8694 17.209C9.89179 17.1254 9.9343 17.0525 9.9911 17.0003C10.0479 16.9481 10.1162 16.9191 10.1867 16.9173C12.3641 16.8298 15.1282 15.3632 16.8456 13.1615C16.9502 13.0274 16.8642 12.8057 16.7149 12.8099C16.6622 12.8115 16.6102 12.8115 16.5576 12.8115C15.8776 12.8115 15.2269 12.6999 14.6195 12.4982C14.5128 12.4632 14.5302 12.2749 14.6395 12.2582C14.8042 12.2332 14.9695 12.2024 15.1335 12.1624C16.5056 11.8474 17.6976 11.1115 18.589 10.114C18.7956 9.62654 18.9823 9.11738 19.149 8.58655C19.159 8.55293 19.1621 8.51665 19.1579 8.48114C19.1537 8.44562 19.1423 8.41203 19.1248 8.38353C19.1074 8.35503 19.0844 8.33255 19.058 8.31821C19.0317 8.30387 19.0029 8.29813 18.9743 8.30155C18.4749 8.35735 17.9723 8.34898 17.4743 8.27655C17.4029 8.26571 17.3963 8.13655 17.4649 8.10821C18.0657 7.85238 18.6391 7.50535 19.1723 7.07489C19.487 6.81905 19.697 6.40822 19.7703 5.94656C20.077 4.01157 20.0703 2.09241 19.7876 0.321582Z"
      fill="currentColor"
    />
    <path
      d="M3.5 5C3.5 3.89543 4.39543 3 5.5 3H13.9597C13.9597 3 12.152 5.11514 11.2225 6.62657C10.4476 7.88655 9.5 10 9.5 10H5.5C4.39543 10 3.5 9.10457 3.5 8V5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconWrapper(RawIcon, BoxedIcon);
