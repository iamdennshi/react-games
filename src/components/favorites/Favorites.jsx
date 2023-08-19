import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../card/Card";
import "./styles.scss";
import { randomEmoji } from "../../utils";
import { useMemo } from "react";
import Loader from "../loader/Loader";

function Favorites({
  gamesInFavorite,
  onFavorite,
  onDeleteItem,
  onAddItem,
  gamesInCart,
  isLoading,
}) {
  const emoji = useMemo(() => randomEmoji(), []);

  console.log(isLoading);

  return (
    <div className="favorites">
      {gamesInFavorite.length !== 0 || isLoading ? (
        <>
          <div className="favorites__header">
            <Link to="/" className="favorites__back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M6 11L1 6L6 1"
                  stroke="#D3D3D3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <h1 className="favorites__title">Мои закладки</h1>
          </div>

          <div className="favorites__cards">
            {!isLoading ? (
              gamesInFavorite.map((item) => (
                <Card
                  onFavorite={onFavorite}
                  isAdded={gamesInCart.some((i) => i.name === item.name)}
                  isFaivorite={gamesInFavorite.some(
                    (i) => i.name === item.name
                  )}
                  key={item.id}
                  item={item}
                  onDeleteItem={onDeleteItem}
                  onAddItem={onAddItem}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </>
      ) : (
        <div className="empty-box empty-box--full">
          <p className="empty-box__emoji">{emoji}</p>
          <b className="empty-box__title">Закладок нет</b>
          <p className="empty-box__text">
            Добавьте хотя бы одну закладку, чтобы проще было найти
          </p>
          <Link
            to="/"
            className="button-move button-move--to-left button-move--full"
          >
            <p className="button-move__title">Вернуться назад</p>
            <img
              className="button-move__arrow"
              src="/img/icons/arrow.svg"
              alt=""
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
