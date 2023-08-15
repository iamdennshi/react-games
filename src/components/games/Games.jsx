import "./styles.scss";
import Card from "../card/Card"
import { useState } from "react";

function Games({ onDeleteItem, onAddItem, gamesInCart, games}) {
    const [search, setSearch] = useState("");

    const onChangeSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const gamesInCartIDs = gamesInCart.map(item => item.name);

    return (
        <div className="games">
            <div className="games__header">
                <h1 className="games__title">
                    {search === "" ? "Все игры" : `Поиск по `}
                    <b>{search && `${search}`}</b>
                </h1>
                <div className="games__search">
                    <img src="/img/icons/search.svg" alt="icon serach" className="games__search-icon" />
                    <input value={search} onChange={onChangeSearchInput} placeholder="Поиск..." type="text" className="games__input" />
                    {
                        search !== "" &&
                        <button onClick={() => setSearch("")} className="games__search-button">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.61539 1.25353L5.16658 3.70234L2.71786 1.25362C1.77362 0.309374 0.309197 1.77379 1.25344 2.71804L3.70216 5.16676L1.25336 7.61556C0.309321 8.5596 1.77369 10.024 2.71773 9.07993L5.16653 6.63113L7.61525 9.07985C8.55949 10.0241 10.0239 8.55967 9.07967 7.61543L6.63095 5.16671L9.07976 2.7179C10.0239 1.77375 8.55954 0.309376 7.61539 1.25353Z" fill="#D3D3D3" />
                            </svg>
                        </button>
                    }
                </div>
            </div>
            <div className="cards">
                {
                    games
                        .filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                        .map(item => <Card isAdded={gamesInCartIDs.includes(item.name)} key={item.id} item={item} onDeleteItem={onDeleteItem} onAddItem={onAddItem} />)
                }
            </div>
        </div>
    )
}

export default Games;