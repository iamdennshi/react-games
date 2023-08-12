import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';
import CartContext from "../../context/CartContext"
import GamesContext from "../../context/GamesContext"

import {useState, useEffect} from 'react';


const API = "https://64d65505754d3e0f1361f729.mockapi.io/games";


function App() {
  const [games, setGames] = useState([]);
  const [gamesInCart, setGamesInCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  const onDeleteItem = (gameID) => {
    setGamesInCart(gamesInCart.filter(item => item !== gameID));
    // FIXME: Как можно улучить??????
    document.querySelectorAll(".card__button-add")[gameID].classList.toggle("card__button-add--active");
  }

  const onAddItem = (gameID) => {
    setGamesInCart([gameID, ...gamesInCart])
    // FIXME: Как можно улучить??????
    document.querySelectorAll(".card__button-add")[gameID].classList.toggle("card__button-add--active");
  }

  useEffect(() => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setGames(data))
  },[]);


  useEffect(() => {
    console.log(gamesInCart);
  },[gamesInCart]);


  return (
    <GamesContext.Provider value={games}>
    <CartContext.Provider value={[gamesInCart, setGamesInCart]}>
    <div className="App">
      <Header onCartOpen={onCartOpen} />
      <main className='main'>
        <Slider />
        <Games onDeleteItem={onDeleteItem} onAddItem={onAddItem}/>
        <Cart onDeleteItem={onDeleteItem} onCartOpen={onCartOpen} isCartOpen={isCartOpen}/>
      </main>
    </div>
    </CartContext.Provider>
    </GamesContext.Provider>
  );
}

export default App;
