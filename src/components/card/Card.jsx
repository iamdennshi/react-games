import "./styles.scss"
import React from 'react';
import splitMoney from "../../utils/splitMoney"

function splitLikes(likes) {
    const likesStr = likes.toString();
    if (likes < 1000) {
        return likesStr;
    }
    return (likes / 1000.0).toFixed(1) + "k";

}

function Card({isAdded, item, onDeleteItem, onAddItem}) {

    const onLike = (event) => {
        event.currentTarget.classList.toggle("card__like-button--liked");
    }

    const onPlus = (event) => {
        if (isAdded) {
            onDeleteItem(item.id);
        } else {
            onAddItem(item.id);
        }
    }
    return (
        <div className="card">
            <button onClick={onLike} className="card__like-button">
                <div className="card__like-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 14" fill="none">
                        <path d="M14.2528 3.2231C14.0327 2.70979 13.7152 2.24463 13.3183 1.85366C12.9211 1.46153 12.4527 1.14991 11.9387 0.935745C11.4058 0.712787 10.8341 0.598665 10.257 0.600002C9.4473 0.600002 8.65734 0.82328 7.97084 1.24503C7.8066 1.34591 7.65058 1.45673 7.50277 1.57746C7.35496 1.45673 7.19893 1.34591 7.0347 1.24503C6.3482 0.82328 5.55823 0.600002 4.74855 0.600002C4.16552 0.600002 3.60056 0.712468 3.06679 0.935745C2.5511 1.15075 2.08631 1.46003 1.68722 1.85366C1.28977 2.24419 0.972275 2.70945 0.752729 3.2231C0.524443 3.75731 0.407837 4.3246 0.407837 4.90843C0.407837 5.45918 0.519516 6.03308 0.741233 6.61691C0.926818 7.10481 1.19288 7.61091 1.53284 8.12196C2.07153 8.93073 2.81223 9.77422 3.73194 10.6293C5.25604 12.0467 6.76535 13.0258 6.82941 13.0655L7.21864 13.3169C7.39109 13.4277 7.6128 13.4277 7.78525 13.3169L8.17449 13.0655C8.23854 13.0241 9.74621 12.0467 11.2719 10.6293C12.1917 9.77422 12.9324 8.93073 13.4711 8.12196C13.811 7.61091 14.0787 7.10481 14.2627 6.61691C14.4844 6.03308 14.5961 5.45918 14.5961 4.90843C14.5977 4.3246 14.4811 3.75731 14.2528 3.2231Z" stroke="#D3D3D3" />
                    </svg>
                </div>
                <div className="card__like-value">{splitLikes(item.likes)}</div>
            </button>

            <div className="card__logo">
                <img className="card__logo-img" src={item.imgUrl} alt="card logo"/>
            </div>

            <div className="card__title">{item.name}</div>
            <ul className="card__platforms">
                {item.platforms.pc && 
                <li title="PC">
                    <img src="/img/icons/PC.svg" alt="" />
                </li>}

                {item.platforms.ps4 && 
                <li title="PS4">
                    <img src="/img/icons/ps4.svg" alt="" />
                </li>}

                {item.platforms.xbox && <li title="xbox">
                        <img src="/img/icons/xbox.svg" alt="" />
                </li>}

            </ul>
            <div className="card__footer">
                <div className="card__textbox-price">
                    <p className="card__text">Цена:<span className="card__price">{splitMoney(item.price)}</span></p>
                </div>
                <button onClick={onPlus} className={isAdded ? "card__button-add card__button-add--active" : "card__button-add"}>
                    {isAdded ?  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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