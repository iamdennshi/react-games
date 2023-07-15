import "./style.scss";

function Slider() {
  return (
    <section className="slider">
      <button className="slider__button-prev">prev</button>
      <button className="slider__button-next">next</button>
      <ul className="slider__items">
        <li className="slider__item">
          Hello
        </li>
        <li className="slider__item">
          World
        </li>
      </ul>

    </section>
  );
}

export default Slider;
