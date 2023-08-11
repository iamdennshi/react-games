import "./styles.scss";
import Card from "../card/Card"
import { useContext } from "react";
import GamesContext from "../../context/GamesContext";


function Games() {
    const games = useContext(GamesContext);
    return (
        <div className="games">
            <div className="games__header">
                <h1 className="games__title">Все игры</h1>
                <div className="games__search">
                    <img src="/img/icons/search.svg" alt="icon serach" className="games__search-icon" />
                    <input placeholder="Поиск..." type="text" className="games__input" />
                </div>
            </div>
            <div className="cards">
                {games.map(item => <Card id={item.id} key={item.id} name={item.name} imgUrl={item.imgUrl} price={item.price} likes={item.likes} platforms={item.platfroms}/>)}
            </div>
        </div>
    )
}

export default Games;