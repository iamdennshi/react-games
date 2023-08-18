import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Error() {
  return (
    <div className="empty-box empty-box--full">
      <img
        className="empty-box__img"
        src="/img/emoji/emoji-1.png"
        alt="Empty box"
      />
      <b className="empty-box__title">Что-то не так</b>
      <p className="empty-box__text">Вы зашли на не существующую страницу</p>
      <Link
        to="/"
        className="button-move button-move--to-left button-move--full"
      >
        <p className="button-move__title">Вернуться назад</p>
        <img className="button-move__arrow" src="/img/icons/arrow.svg" alt="" />
      </Link>
    </div>
  );
}
