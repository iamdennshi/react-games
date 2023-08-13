import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';
import {useState, useEffect} from 'react';
import GlobalContext from '../../context/GlobalContext';


const API = "https://64d65505754d3e0f1361f729.mockapi.io/games";


function App() {
  const [games, setGames] = useState([]);
  const [gamesInCart, setGamesInCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  console.log(<span key={1}>Hello</span>)

  const onCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  const onDeleteItem = (gameID) => {
    setGamesInCart(prev => prev.filter(item => item !== gameID));
    // FIXME: Не работает когда добавляем при поиске
    document.querySelectorAll(".card__button-add")[gameID].classList.toggle("card__button-add--active");
  }

  const onAddItem = (gameID) => {
    setGamesInCart(prev => [gameID, ...gamesInCart])
        // FIXME: Не работает когда добавляем при поиске
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
    <GlobalContext.Provider value={[games, gamesInCart, setGamesInCart]}>
    <div className="App">
      <Header onCartOpen={onCartOpen} />
      <main className='main'>
        <Slider />
        <Games onDeleteItem={onDeleteItem} onAddItem={onAddItem}/>
        <Cart onDeleteItem={onDeleteItem} onCartOpen={onCartOpen} isCartOpen={isCartOpen}/>
      </main>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
