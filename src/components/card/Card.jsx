import "./styles.scss"
import { useState } from "react";


function splitMoney(money) {
    const moneyStr = money.toString();
    const SLICE = 3;
    let totalSlices = 0;
    let result = ""
    let separator = " ";

    while (totalSlices * SLICE + 4 <= moneyStr.length) {
        if (result !== "") {
            result = `${moneyStr.slice(-SLICE * totalSlices * 2, 0 - totalSlices * SLICE)}${separator}${result}`;
        } else {
            result = moneyStr.slice(-SLICE);
        }
        totalSlices += 1;
    }
    if (result !== "") {
        return `${moneyStr.slice(0, moneyStr.length - SLICE * totalSlices)}${separator}${result}`;
    } else {
        return moneyStr.slice(0);
    }
}

function splitLikes(likes) {
    const likesStr = likes.toString();
    if (likes < 1000) {
        return likesStr;
    }
    return (likes / 1000.0).toFixed(1) + "k";

}



function Card(props) {

    const [isAdd, setIsAdd] = useState(false);

    const handleLikes = (event) => {
        event.currentTarget.classList.toggle("card__like-button--liked");
    }

    const handlePlus = (event) => {
        event.currentTarget.classList.toggle("card__button-add--active");
        setIsAdd(() => !isAdd);

    }


    console.log("Rerender")

    return (
        <div className="card">
            <button onClick={handleLikes} className="card__like-button">
                <div className="card__like-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 14" fill="none">
                        <path d="M14.2528 3.2231C14.0327 2.70979 13.7152 2.24463 13.3183 1.85366C12.9211 1.46153 12.4527 1.14991 11.9387 0.935745C11.4058 0.712787 10.8341 0.598665 10.257 0.600002C9.4473 0.600002 8.65734 0.82328 7.97084 1.24503C7.8066 1.34591 7.65058 1.45673 7.50277 1.57746C7.35496 1.45673 7.19893 1.34591 7.0347 1.24503C6.3482 0.82328 5.55823 0.600002 4.74855 0.600002C4.16552 0.600002 3.60056 0.712468 3.06679 0.935745C2.5511 1.15075 2.08631 1.46003 1.68722 1.85366C1.28977 2.24419 0.972275 2.70945 0.752729 3.2231C0.524443 3.75731 0.407837 4.3246 0.407837 4.90843C0.407837 5.45918 0.519516 6.03308 0.741233 6.61691C0.926818 7.10481 1.19288 7.61091 1.53284 8.12196C2.07153 8.93073 2.81223 9.77422 3.73194 10.6293C5.25604 12.0467 6.76535 13.0258 6.82941 13.0655L7.21864 13.3169C7.39109 13.4277 7.6128 13.4277 7.78525 13.3169L8.17449 13.0655C8.23854 13.0241 9.74621 12.0467 11.2719 10.6293C12.1917 9.77422 12.9324 8.93073 13.4711 8.12196C13.811 7.61091 14.0787 7.10481 14.2627 6.61691C14.4844 6.03308 14.5961 5.45918 14.5961 4.90843C14.5977 4.3246 14.4811 3.75731 14.2528 3.2231Z" stroke="#D3D3D3" />
                    </svg>
                </div>
                <div className="card__like-value">{splitLikes(props.likes)}</div>
            </button>

            <div className="card__logo">
                <img className="card__logo-img" src={props.imgUrl} alt="card logo"/>
            </div>

            <div className="card__title">{props.name}</div>
            <ul className="card__platforms">
                {props.platforms.pc ? <li title="PC">
                    <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.284091 12L2.21591 0.363636H6.80682C7.68561 0.363636 8.4072 0.532197 8.97159 0.869318C9.53977 1.20265 9.9375 1.66667 10.1648 2.26136C10.3958 2.85227 10.4489 3.53409 10.3239 4.30682C10.1951 5.08333 9.91477 5.76705 9.48295 6.35795C9.05492 6.94508 8.49811 7.40341 7.8125 7.73295C7.12689 8.0625 6.33523 8.22727 5.4375 8.22727H2.51136L2.83523 6.25568H5.36364C5.84091 6.25568 6.24811 6.17424 6.58523 6.01136C6.92614 5.8447 7.19697 5.61553 7.39773 5.32386C7.59849 5.02841 7.72917 4.68939 7.78977 4.30682C7.85417 3.91667 7.83333 3.57765 7.72727 3.28977C7.62121 3.00189 7.42614 2.77841 7.14205 2.61932C6.86174 2.45644 6.48485 2.375 6.01136 2.375H4.35227L2.74432 12H0.284091ZM22.1548 4.4375H19.7003C19.7079 4.11174 19.6662 3.82386 19.5753 3.57386C19.4844 3.32008 19.348 3.10417 19.1662 2.92614C18.9882 2.74811 18.7704 2.61364 18.5128 2.52273C18.2552 2.42803 17.9654 2.38068 17.6435 2.38068C17.0223 2.38068 16.4522 2.53598 15.9332 2.84659C15.4143 3.1572 14.9768 3.60795 14.6207 4.19886C14.2647 4.78598 14.0185 5.49621 13.8821 6.32955C13.7495 7.13258 13.7571 7.80492 13.9048 8.34659C14.0526 8.88826 14.3139 9.29735 14.6889 9.57386C15.0677 9.84659 15.5393 9.98295 16.1037 9.98295C16.4522 9.98295 16.7836 9.93939 17.098 9.85227C17.4124 9.76136 17.6984 9.63258 17.956 9.46591C18.2173 9.29545 18.4446 9.08902 18.6378 8.84659C18.8348 8.60417 18.9882 8.32955 19.098 8.02273H21.5696C21.4143 8.55682 21.1719 9.07197 20.8423 9.56818C20.5166 10.0644 20.1132 10.5076 19.6321 10.8977C19.151 11.2841 18.6037 11.5909 17.9901 11.8182C17.3764 12.0455 16.7041 12.1591 15.973 12.1591C14.9162 12.1591 14.009 11.9167 13.2514 11.4318C12.4976 10.947 11.9541 10.2481 11.6207 9.33523C11.2874 8.42235 11.2249 7.32197 11.4332 6.03409C11.6416 4.78788 12.0488 3.73106 12.6548 2.86364C13.2647 1.99242 14.0052 1.33144 14.8764 0.880681C15.7514 0.429924 16.687 0.204545 17.6832 0.204545C18.3764 0.204545 19.0033 0.299242 19.5639 0.488636C20.1245 0.67803 20.6018 0.954545 20.9957 1.31818C21.3935 1.67803 21.6927 2.11932 21.8935 2.64205C22.0942 3.16477 22.1813 3.76326 22.1548 4.4375Z" fill="#BDBDBD" />
                    </svg>
                </li> : ""}

                {props.platforms.ps4 ? <li title="PS4">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.98273 0.5V15.4274L8.58924 16.5V3.97876C8.58924 3.39364 8.79103 3.00015 9.1165 3.13754C9.54193 3.29 9.62469 3.82992 9.62469 4.41624V9.41654C11.2502 10.4331 12.5283 9.41592 12.5283 6.7326C12.5283 3.97876 11.7802 2.75731 9.57355 1.77328C8.70502 1.39605 7.09164 0.76514 5.98273 0.5Z" fill="#BDBDBD" />
                        <path d="M9.08295 14.319L13.2754 12.3817C13.7506 12.1612 13.8241 11.8478 13.4377 11.6845C13.0518 11.5212 12.3525 11.5688 11.8773 11.7888L9.08295 13.0651V11.0355L9.24382 10.9656C9.24382 10.9656 10.0514 10.5944 11.1855 10.4311C12.3209 10.2714 13.7111 10.4522 14.8014 10.9897C16.0316 11.4941 16.1697 12.2347 15.8578 12.7451C15.5444 13.2567 14.7795 13.6218 14.7795 13.6218L9.08295 16.2732V14.319Z" fill="#BDBDBD" />
                        <path d="M1.20128 14.1125C-0.0605947 13.6515 -0.271218 12.694 0.303462 12.1408C0.836762 11.6292 1.74063 11.2459 1.74063 11.2459L5.47698 9.52555V11.4864L2.78816 12.7343C2.31252 12.9549 2.24091 13.2682 2.62543 13.4303C3.01273 13.5954 3.71109 13.5484 4.1872 13.3267L5.47698 12.7211V14.477C5.39468 14.4951 5.30402 14.5138 5.22032 14.5313C3.92962 14.8042 2.55522 14.691 1.20128 14.1125Z" fill="#BDBDBD" />
                    </svg>
                </li> : ""}

                {props.platforms.xbox ? <li title="xbox">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_13_103)">
                            <path d="M7.20222 16.4671C5.96976 16.3491 4.72197 15.9068 3.65007 15.2078C2.75184 14.6221 2.54901 14.3813 2.54901 13.9008C2.54901 12.9356 3.61083 11.2451 5.42755 9.31792C6.45933 8.22342 7.89652 6.9405 8.05195 6.97524C8.35405 7.04277 10.7697 9.39777 11.674 10.5064C13.104 12.2594 13.7615 13.6948 13.4275 14.3347C13.1736 14.8212 11.5982 15.772 10.4408 16.1372C9.48695 16.4383 8.23419 16.5659 7.20222 16.4671ZM1.33585 12.8973C0.589451 11.7528 0.212344 10.6261 0.0302742 8.99652C-0.0298457 8.45843 -0.00830182 8.15064 0.166791 7.04619C0.385019 5.66964 1.16937 4.07715 2.11184 3.0971C2.51324 2.67969 2.54909 2.66952 3.03838 2.83426C3.63256 3.03431 4.2671 3.47231 5.25117 4.36165L5.82534 4.88055L5.5118 5.26552C4.05636 7.05256 2.51994 9.58562 1.94091 11.1528C1.62612 12.0047 1.49916 12.8599 1.6346 13.216C1.72605 13.4564 1.64205 13.3668 1.33585 12.8973ZM14.4375 13.0919C14.5113 12.7322 14.418 12.0714 14.1994 11.405C13.7261 9.96185 12.1438 7.27703 10.691 5.45161L10.2336 4.87697L10.7284 4.42287C11.3745 3.82995 11.8231 3.47492 12.3071 3.17342C12.689 2.9355 13.2348 2.72488 13.4694 2.72488C13.614 2.72488 14.1233 3.25305 14.5343 3.82944C15.171 4.72217 15.6394 5.80434 15.8767 6.93089C16.03 7.65879 16.0428 9.21689 15.9014 9.943C15.7853 10.5389 15.5403 11.3119 15.3013 11.8361C15.1222 12.2289 14.6767 12.9917 14.4815 13.24C14.3812 13.3676 14.3811 13.3673 14.4375 13.0919ZM7.33418 2.45236C6.66381 2.11212 5.62965 1.7469 5.05837 1.64864C4.8581 1.6142 4.51646 1.59498 4.29918 1.60595C3.82783 1.62974 3.84888 1.60511 4.60502 1.24806C5.23365 0.951228 5.75802 0.776675 6.46986 0.627291C7.27062 0.459245 8.77577 0.457273 9.56379 0.623237C10.4149 0.802492 11.4171 1.17525 11.9819 1.5226L12.1497 1.62584L11.7646 1.6064C10.9994 1.56778 9.88409 1.87677 8.68669 2.45917C8.32553 2.63484 8.01132 2.77514 7.98846 2.77095C7.96559 2.76676 7.67117 2.62339 7.33418 2.45236Z" fill="#BDBDBD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_13_103">
                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </li> : ""}

            </ul>
            <div className="card__footer">
                <div className="card__textbox-price">
                    <p className="card__text">Цена:<span className="card__price">{splitMoney(props.price)}</span></p>
                </div>
                <button onClick={handlePlus} className="card__button-add">
                    {isAdd ?  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.39007 0.873821C9.57272 0.680718 9.82093 0.571198 10.0804 0.569196C10.34 0.567194 10.5897 0.672872 10.775 0.863136C10.9604 1.0534 11.0663 1.31278 11.0696 1.58458C11.0729 1.85639 10.9734 2.11852 10.7927 2.31369L5.56607 9.1576C5.47628 9.25886 5.36793 9.34013 5.24749 9.39656C5.12705 9.45298 4.99699 9.48341 4.86507 9.48601C4.73315 9.48862 4.60209 9.46336 4.4797 9.41173C4.35731 9.3601 4.24611 9.28317 4.15274 9.18553L0.687407 5.55723C0.503258 5.36426 0.39984 5.10256 0.399902 4.82972C0.399965 4.55688 0.503503 4.29523 0.68774 4.10235C0.871977 3.90947 1.12182 3.80115 1.38231 3.80121C1.6428 3.80128 1.89259 3.90973 2.07674 4.1027L4.81741 6.97406L9.36407 0.905943C9.37233 0.894901 9.38124 0.884407 9.39074 0.87452L9.39007 0.873821Z" fill="white"/>
                        </svg> : <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6653 5.13124H7.20219V1.66823C7.20219 0.332869 5.13118 0.332869 5.13118 1.66823V5.13124H1.66805C0.332981 5.13124 0.332981 7.20218 1.66805 7.20218H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20218H10.6653C12.0006 7.20218 12.0006 5.13124 10.6653 5.13124Z" fill="#D3D3D3" />
                    </svg>}
                </button>
            </div>
        </div>
    );
}


export default Card;