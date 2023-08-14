import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';
import {useState, useEffect} from 'react';
import GlobalContext from '../../context/GlobalContext';


const API = "https://64d65505754d3e0f1361f729.mockapi.io";


function App() {
  const [games, setGames] = useState([]);
  const [gamesInCart, setGamesInCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  const onDeleteItem = (gameID) => {
    setGamesInCart(prev => prev.filter(item => item !== gameID));
  }

  const onAddItem = (gameID) => {
    setGamesInCart(prev => [gameID, ...gamesInCart])
  }

  useEffect(() => {
      fetch(`${API}/games`)
        .then((response) => response.json())
        .then((data) => setGames(data))
        .then(fetch(`${API}/cart`)
          .then(response => response.json())
          .then(data => setGamesInCart(data.map(item => item.gameID))))

  },[]);

  useEffect(() => {
    console.log(gamesInCart);
    console.log(games);

  }, [gamesInCart, games])


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
