import "./styles.scss";
import Card from "../card/Card"
import { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import CartContext from "../../context/CartContext";

function Games({onDeleteItem, onAddItem}) {
    const games = useContext(GamesContext);
    const [gamesInCart, setGamesInCart] = useContext(CartContext);

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
                {games.map(item => <Card idAdded={gamesInCart.includes(item.id)} key={item.id} item={item} onDeleteItem={onDeleteItem} onAddItem={onAddItem}/>)}
            </div>
        </div>
    )
}

export default Games;