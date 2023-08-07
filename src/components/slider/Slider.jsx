import "./styles.scss";
import { useState } from "react";

function Slider() {

  const numberOfPosters = 2;
  const shift = 100.0 / numberOfPosters;
  const [posterIndex, setPosterIndex] = useState(0);
  const handleClick = (event, type) => {
    if (type) {
      setPosterIndex(() => (posterIndex + 1) % numberOfPosters);
    } else {
      setPosterIndex(() => (posterIndex - 1 >= 0) ? posterIndex - 1 : numberOfPosters - 1); 
    }
  }

  return (
      <div className="carousel">
      <ul style={{width: `${numberOfPosters * 100}%`, transform: `translate(-${posterIndex * shift}%)`}} className="carousel__slider">
        <li className="slide slide--hogwarts">
          <img src="/img/games/hogwarts.png" alt="" className="slide__img slide__img--hogwarts" />
          <h3 className="slide__title slide__title--hogwarts">Получите <span className="slide__sale slide__sale--hogwarts">скидку 50%</span> на первую игру</h3>
          <button className="slide__button slide__button--hogwarts">Купить</button>
          <img className="slide__poster slide__poster--hogwarts" src="/img/sliders/hogwarts.png" alt="" />
        </li>
        <li className="slide slide--atomic">
          <img src="/img/games/atomic.svg" alt="" className="slide__img slide__img--atomic" />
          <h3 className="slide__title slide__title--atomic">Получите <span className="slide__sale slide__sale--atomic">скидку 50%</span> на первую игру</h3>
          <button className="slide__button slide__button--atomic">Купить</button>
          <img className="slide__poster slide__poster--atomic" src="/img/sliders/atomic.png" alt="" />
        </li>
      </ul>
      <div className="carousel__controls">
        <span onClick={(e) => handleClick(e, 0)} className="carousel__button carousel__button--left">
           <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 8 8"><path d="M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z"/></svg></span>
        <span onClick={(e) => handleClick(e, 1)} className="carousel__button carousel__button--right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 8 8"><path d="M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z"/></svg>
        </span>
      </div>
    </div>
  );
}

export default Slider;
