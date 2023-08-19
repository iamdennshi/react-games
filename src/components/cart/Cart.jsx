import "./styles.scss";
import { splitMoney } from "../../utils";
import { useState } from "react";

const RATE = 0.05;

export default function Cart({
  onDeleteItem,
  onCartOpen,
  isCartOpen,
  gamesInCart,
  setGamesInCart,
}) {
  const TOTAL_PRICE = gamesInCart.reduce((currentSum, currentNumber) => {
    return currentSum + currentNumber.price;
  }, 0);

  const [isOrder, setIsOrder] = useState(false);

  const handleOrder = () => {
    setGamesInCart([]);
    localStorage.removeItem("cart");
    setIsOrder(true);
    alert(JSON.stringify(gamesInCart));
  };

  const handleCloseCart = () => {
    onCartOpen();
    if (isOrder) {
      setIsOrder(false);
    }
  };

  return (
    <>
      <div
        onClick={handleCloseCart}
        className={`overlay ${isCartOpen ? "overlay--active" : ""}`}
      ></div>
      <div className={`cart ${isCartOpen ? "cart--active" : ""}`}>
        <div className="cart__header">
          <h2 className="cart__title">Корзина</h2>
          <button onClick={handleCloseCart} className="button-action">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.61539 1.25353L5.16658 3.70234L2.71786 1.25362C1.77362 0.309374 0.309197 1.77379 1.25344 2.71804L3.70216 5.16676L1.25336 7.61556C0.309321 8.5596 1.77369 10.024 2.71773 9.07993L5.16653 6.63113L7.61525 9.07985C8.55949 10.0241 10.0239 8.55967 9.07967 7.61543L6.63095 5.16671L9.07976 2.7179C10.0239 1.77375 8.55954 0.309376 7.61539 1.25353Z"
                fill="#D3D3D3"
              />
            </svg>
          </button>
        </div>
        {gamesInCart.length !== 0 ? (
          <ul className="items">
            {gamesInCart.map((game) => (
              <CartItem onDeleteItem={onDeleteItem} key={game.id} game={game} />
            ))}
          </ul>
        ) : isOrder ? (
          <div className="order-placed">
            <img
              className="order-placed__img"
              src="/img/order_placed.png"
              alt="Order placed"
            />
            <b className="order-placed__title">Заказ оформлен</b>
            <p className="order-placed__text">
              Ваш заказ <b class="order-placed__number">№000</b> был отправлен
              на модерацию
            </p>
          </div>
        ) : (
          <div className="empty-box">
            <img
              className="empty-box__img"
              src="/img/empty_box.png"
              alt="Empty box"
            />
            <b className="empty-box__title">Корзина пустая</b>
            <p className="empty-box__text">
              Добавьте хотя бы одну игру, чтобы сделать заказ
            </p>
          </div>
        )}

        <div className="cart__footer">
          {gamesInCart.length !== 0 ? (
            <>
              <div className="cart__total">
                <p className="cart__total-text">Итого:</p>
                <div className="cart__line"></div>
                <span className="cart__total-value">
                  {splitMoney(TOTAL_PRICE)}
                </span>
              </div>
              <div className="cart__tax">
                <p className="cart__tax-text">Налог {RATE * 100}%:</p>
                <div className="cart__line"></div>
                <span className="cart__tax-value">
                  {splitMoney(TOTAL_PRICE * RATE)}
                </span>
              </div>
              <button
                onClick={handleOrder}
                className="button-move button-move--to-right"
              >
                <p className="button-move__title">Оформить заказ</p>
                <img
                  className="button-move__arrow"
                  src="/img/icons/arrow.svg"
                  alt=""
                />
              </button>
            </>
          ) : (
            <button
              onClick={onCartOpen}
              className="button-move button-move--to-left"
            >
              <p className="button-move__title">Вернуться назад</p>
              <img
                className="button-move__arrow"
                src="/img/icons/arrow.svg"
                alt=""
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function CartItem({ onDeleteItem, game }) {
  return (
    <li className="item">
      <div className="item__logo">
        <img className="item__img" src={game.imgUrl} alt="" />
      </div>
      <div className="item__info">
        <h3 className="item__title">{game.name}</h3>
        <span className="item__price">{splitMoney(game.price)}</span>
      </div>
      <button onClick={() => onDeleteItem(game)} className="button-action">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.61539 1.25353L5.16658 3.70234L2.71786 1.25362C1.77362 0.309374 0.309197 1.77379 1.25344 2.71804L3.70216 5.16676L1.25336 7.61556C0.309321 8.5596 1.77369 10.024 2.71773 9.07993L5.16653 6.63113L7.61525 9.07985C8.55949 10.0241 10.0239 8.55967 9.07967 7.61543L6.63095 5.16671L9.07976 2.7179C10.0239 1.77375 8.55954 0.309376 7.61539 1.25353Z"
            fill="#D3D3D3"
          />
        </svg>
      </button>
    </li>
  );
}
