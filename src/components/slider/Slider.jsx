import "./style.scss";
import { useState } from "react";

function Slider() {

  const numberOfPosters = 5;
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
        <li className="test">
          <img src="/img/games/hogwarts.png" alt="" className="test__img" />
          <h3 className="test__title">Получите <span className="test__sale">скидку 50%</span> на первую игру</h3>
          <button className="test__button">Купить</button>
          <img className="test__poster" src="/img/sliders/hogwarts.png" alt="" />
        </li>
        <li style={{backgroundColor: 'blue'}}>Second</li>
        <li style={{backgroundColor: 'yellow'}}>Third</li>
        <li style={{backgroundColor: 'green'}}>Fourth</li>
        <li style={{backgroundColor: 'pink'}}>Fifth</li>
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
