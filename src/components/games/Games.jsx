import "./styles.scss";
import Card from "../card/Card"

const games = [
    {
        name: "Hogwarts Legacy", 
        imgUrl: "/img/games/atomic.png", 
        price: 3990, 
        likes: 3100, 
        platfroms: {
            pc: true, 
            ps4: true, 
            xbox: true
        } 
    },
]

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
            <div className="cards">
                {games.map(item => <Card name={item.name} imgUrl={item.imgUrl} price={item.price} likes={item.likes} platforms={item.platfroms}/>)}
            </div>
        </div>
    )
}

export default Games;