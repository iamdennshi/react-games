import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';
import {useState, useEffect} from 'react';
import Favorites from '../favorites/Favorites';


const API = "https://64d65505754d3e0f1361f729.mockapi.io";


function App() {
  const [games, setGames] = useState([]);
  const [gamesInCart, setGamesInCart] = useState([]);
  const [gamesInFavorite, setGamesInFavorite] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  const onDeleteItem = (game) => {
    const gameID = gamesInCart.filter(item => item.name === game.name)[0].id;

    setGamesInCart(prev => prev.filter(item => item.name !== game.name));
    fetch(`${API}/cart/${gameID}`, {
      method: "DELETE",
      headers: {'content-type': 'application/json'},
    }).then(response => {
      if(response.ok) {
        return response.json()
      }
    })
  }

  const onAddItem = (game) => {
    const gameID = gamesInCart.length !== 0 ? Number(gamesInCart[0].id) + 1 : 1;

    setGamesInCart(prev => [{...game, id: gameID}, ...prev])
    fetch(`${API}/cart`, {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(game)
    }).then(response => {
      if(response.ok) {
        return response.json()
      }
    })
  }

  const onFavorite = (game) => {
    if (gamesInFavorite.includes(game)) {
      setGamesInFavorite(prev => prev.filter(item => game !== item));
    } else {
      setGamesInFavorite(prev => [game, ...prev]);
    }
  }

  useEffect(() => {
      fetch(`${API}/cart`)
        .then(response => response.json())
        .then(data => setGamesInCart(data))
        .then(
          fetch(`${API}/games`)
          .then((response) => response.json())
          .then((data) => setGames(data))
          .then()
        )
  },[]);

  return (
    <div className="App">
      <Header onCartOpen={onCartOpen} gamesInCart={gamesInCart}/>
      <main className='main'>
        {/* <Slider /> */}
        {/* <Games onFavorite={onFavorite} gamesInFavorite={gamesInFavorite} games={games} gamesInCart={gamesInCart} onDeleteItem={onDeleteItem} onAddItem={onAddItem}/> */}
        <Favorites gamesInFavorite={gamesInFavorite} onFavorite={onFavorite} gamesInCart={gamesInCart} onDeleteItem={onDeleteItem} onAddItem={onAddItem}/>
        <Cart onDeleteItem={onDeleteItem} onCartOpen={onCartOpen} isCartOpen={isCartOpen} gamesInCart={gamesInCart}/>
      </main>
    </div>
  );
}

export default App;
