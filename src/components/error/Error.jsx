import React, { useMemo } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { randomEmoji } from "../../utils";

import arrow from "../../assets/icons/arrow.svg";
export default function Error() {
  const emoji = useMemo(() => randomEmoji(), []);

  return (
    <div className="empty-box empty-box--full">
      <p className="empty-box__emoji">{emoji}</p>
      <b className="empty-box__title">Что-то не так</b>
      <p className="empty-box__text">Вы зашли на не существующую страницу</p>
      <Link
        to="/"
        className="button-move button-move--to-left button-move--full"
      >
        <p className="button-move__title">Вернуться назад</p>
        <img className="button-move__arrow" src={arrow} alt="" />
      </Link>
    </div>
  );
}
