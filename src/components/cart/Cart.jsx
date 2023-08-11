import "./styles.scss";

function Cart({handleShowCart}) {
    return (
        <div className="overlay">
            <div className="cart">
                <div className="cart__header">
                    <h2 className="cart__title">Корзина</h2>
                    <button onClick={handleShowCart} className="button-action">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.61539 1.25353L5.16658 3.70234L2.71786 1.25362C1.77362 0.309374 0.309197 1.77379 1.25344 2.71804L3.70216 5.16676L1.25336 7.61556C0.309321 8.5596 1.77369 10.024 2.71773 9.07993L5.16653 6.63113L7.61525 9.07985C8.55949 10.0241 10.0239 8.55967 9.07967 7.61543L6.63095 5.16671L9.07976 2.7179C10.0239 1.77375 8.55954 0.309376 7.61539 1.25353Z" fill="#D3D3D3" />
                        </svg>
                    </button>
                </div>
                <div className="item">
                    <div className="item__logo"><img className="item__img" src="/img/games/atomic.png" alt="" /></div>
                    <div className="item__info">
                        <h3 className="item__title">Atomic Heart</h3>
                        <span className="item__price">3 999 руб.</span>
                    </div>
                    <button className="button-action">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.61539 1.25353L5.16658 3.70234L2.71786 1.25362C1.77362 0.309374 0.309197 1.77379 1.25344 2.71804L3.70216 5.16676L1.25336 7.61556C0.309321 8.5596 1.77369 10.024 2.71773 9.07993L5.16653 6.63113L7.61525 9.07985C8.55949 10.0241 10.0239 8.55967 9.07967 7.61543L6.63095 5.16671L9.07976 2.7179C10.0239 1.77375 8.55954 0.309376 7.61539 1.25353Z" fill="#D3D3D3" />
                        </svg>
                    </button>
                </div>
                <div className="cart__footer">
                    <div className="cart__total">
                        <p className="cart__total-text">Итого:</p>
                        <div className="cart__line"></div>
                        <span className="cart__total-value">7 998 руб.</span>
                    </div>
                    <div className="cart__tax">
                        <p className="cart__tax-text">Налог 5%:</p>
                        <div className="cart__line"></div>
                        <span className="cart__tax-value">399 руб.</span>
                    </div>
                    <button className="button-move button-move--to-right">
                        <p className="button-move__title">Оформить заказ</p>
                        <img className="button-move__arrow" src="/img/icons/arrow-to-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;