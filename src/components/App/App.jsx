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

  useEffect(() => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setGames(data))
    console.log(CartContext);
  },[]);

  return (
    <div className="App">
      <Header onCartOpen={onCartOpen} />
      <main className='main'>
          <Slider />

        <GamesContext.Provider value={games}>
          <CartContext.Provider value={[gamesInCart, setGamesInCart]}>
            <Games/>
            <Cart onCartOpen={onCartOpen} isCartOpen={isCartOpen}/>
          </CartContext.Provider>
        </GamesContext.Provider>
      </main>
    </div>
  );
}

export default App;
