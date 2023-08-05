import "./styles.scss";

function Games() {
    return (
        <div className="games">
            <div className="games__header">
                <h1 className="games__title">Все игры</h1>
                <div className="games__search">
                    <img src="/img/icons/search.svg" alt="" className="games__search-icon" />
                    <input placeholder="Поиск..." type="text" className="games__input" />
                </div>
            </div>
        </div>
    )
}

export default Games;