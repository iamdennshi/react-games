import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <a className="header__link" href="/">
          <img
            className="header__logo"
            width={"40px"}
            height={"40px"}
            alt="logo"
            src="/img/logo.png"
          ></img>
        </a>
        <div className="header__name">
          <h2 className="header__title">REACT GAMES</h2>
          <p className="header__subtitle">Магазин лучших игр</p>
        </div>
      </div>
      <ul className="header__right">
        <li className="header__cart">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.54511 18.1818C7.99698 18.1818 8.36329 17.8155 8.36329 17.3637C8.36329 16.9118 7.99698 16.5455 7.54511 16.5455C7.09324 16.5455 6.72693 16.9118 6.72693 17.3637C6.72693 17.8155 7.09324 18.1818 7.54511 18.1818Z"
              stroke="#C4C4C4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5451 18.1818C16.997 18.1818 17.3633 17.8155 17.3633 17.3637C17.3633 16.9118 16.997 16.5455 16.5451 16.5455C16.0932 16.5455 15.7269 16.9118 15.7269 17.3637C15.7269 17.8155 16.0932 18.1818 16.5451 18.1818Z"
              stroke="#C4C4C4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.999634 1H4.27236L6.46509 11.9555C6.53991 12.3321 6.74483 12.6705 7.04399 12.9113C7.34315 13.1522 7.71748 13.2801 8.10145 13.2727H16.0542C16.4382 13.2801 16.8125 13.1522 17.1116 12.9113C17.4108 12.6705 17.6157 12.3321 17.6905 11.9555L18.9996 5.09091H5.09054"
              stroke="#C4C4C4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="header__money">1250 руб.</p>
        </li>
        <li className="header__likes">
          <svg
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0999 0C16.7289 0 18.0972 0.54932 19.2049 1.64796C20.3126 2.7466 20.8664 4.08759 20.8664 5.67092C20.8664 6.44643 20.7035 7.23002 20.3777 8.02169C20.0519 8.81335 19.6936 9.51616 19.3026 10.1301C18.9117 10.7441 18.2519 11.5357 17.3235 12.5051C16.395 13.4745 15.6131 14.2581 14.9778 14.8559C14.3425 15.4537 13.3244 16.3665 11.9235 17.5944L10.4086 18.9515L8.89367 17.6429C7.52535 16.3827 6.51541 15.4537 5.86383 14.8559C5.21225 14.2581 4.42222 13.4745 3.49372 12.5051C2.56522 11.5357 1.9055 10.7441 1.51455 10.1301C1.1236 9.51616 0.773382 8.81335 0.463883 8.02169C0.154383 7.23002 -0.000366211 6.44643 -0.000366211 5.67092C-0.000366211 4.08759 0.553475 2.7466 1.66116 1.64796C2.76884 0.54932 4.12086 0 5.71723 0C7.6068 0 9.17059 0.727041 10.4086 2.18112C11.6466 0.727041 13.2104 0 15.0999 0ZM10.5063 16.0918C12.1027 14.6701 13.2674 13.6118 14.0004 12.9171C14.7334 12.2224 15.5398 11.3903 16.4194 10.4209C17.299 9.45153 17.9099 8.60332 18.2519 7.87628C18.594 7.14924 18.7651 6.41412 18.7651 5.67092C18.7651 4.63691 18.4148 3.78061 17.7144 3.10204C17.014 2.42347 16.1425 2.08418 15.0999 2.08418C14.318 2.08418 13.5769 2.31037 12.8764 2.76276C12.176 3.21514 11.6792 3.79677 11.386 4.50765H9.43122C9.17059 3.79677 8.69005 3.21514 7.9896 2.76276C7.28916 2.31037 6.5317 2.08418 5.71723 2.08418C4.6747 2.08418 3.81136 2.42347 3.12721 3.10204C2.44305 3.78061 2.10097 4.63691 2.10097 5.67092C2.10097 6.41412 2.26387 7.14924 2.58965 7.87628C2.91544 8.60332 3.5263 9.45153 4.42222 10.4209C5.31813 11.3903 6.13261 12.2224 6.86563 12.9171C7.59866 13.6118 8.74706 14.6701 10.3108 16.0918L10.4086 16.1888L10.5063 16.0918Z"
              fill="#C4C4C4"
            />
          </svg>
        </li>
        <li className="header__profile">
          <svg
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.110718 10C0.110718 4.579 4.68972 0 10.1107 0C15.5317 0 20.1107 4.579 20.1107 10C20.1107 13.19 18.5187 16.078 16.1107 17.924V18H16.0087C14.3407 19.245 12.2977 20 10.1107 20C7.92372 20 5.88072 19.245 4.21272 18H4.11072V17.924C1.70272 16.078 0.110718 13.189 0.110718 10ZM7.23419 15.236C6.70226 15.6639 6.33208 16.2604 6.18472 16.927C7.35272 17.604 8.69472 18 10.1107 18C11.5267 18 12.8687 17.604 14.0367 16.927C13.8892 16.2605 13.519 15.6641 12.9871 15.2362C12.4552 14.8083 11.7934 14.5744 11.1107 14.573H9.11072C8.42802 14.5742 7.76611 14.808 7.23419 15.236ZM13.8784 13.4117C14.6984 13.9574 15.3393 14.7329 15.7207 15.641C17.1877 14.182 18.1107 12.176 18.1107 10C18.1107 5.663 14.4477 2 10.1107 2C5.77372 2 2.11072 5.663 2.11072 10C2.11072 12.176 3.03372 14.182 4.50072 15.641C4.88216 14.7329 5.52299 13.9574 6.34299 13.4117C7.16298 12.866 8.12573 12.5742 9.11072 12.573H11.1107C12.0957 12.5742 13.0585 12.866 13.8784 13.4117ZM6.11072 8C6.11072 5.72 7.83072 4 10.1107 4C12.3907 4 14.1107 5.72 14.1107 8C14.1107 10.28 12.3907 12 10.1107 12C7.83072 12 6.11072 10.28 6.11072 8ZM8.11072 8C8.11072 9.178 8.93272 10 10.1107 10C11.2887 10 12.1107 9.178 12.1107 8C12.1107 6.822 11.2887 6 10.1107 6C8.93272 6 8.11072 6.822 8.11072 8Z"
              fill="#C4C4C4"
            />
          </svg>
        </li>
      </ul>
    </header>
  );
}

export default Header;
