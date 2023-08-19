import Header from "../header/Header";
import Slider from "../slider/Slider";
import Games from "../games/Games";
import Cart from "../cart/Cart";
import Error from "../error/Error";
import { useState, useEffect } from "react";
import Favorites from "../favorites/Favorites";
import { Switch, Route } from "react-router-dom";
import { games as gamesFromLocalFile } from "../../data";
import { fakeNetwork } from "../../utils";

export default function App() {
  const [games, setGames] = useState([]);
  const [gamesInCart, setGamesInCart] = useState([]);
  const [gamesInFavorite, setGamesInFavorite] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoadgin] = useState(true);

  const onCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onDeleteItem = (game) => {
    setGamesInCart((prev) => {
      const newCart = prev.filter((item) => item.name !== game.name);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const onAddItem = (game) => {
    const gameID = gamesInCart.length !== 0 ? Number(gamesInCart[0].id) + 1 : 1;

    setGamesInCart((prev) => {
      const newCart = [{ ...game, id: gameID }, ...prev];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const onFavorite = (game) => {
    if (gamesInFavorite.includes(game)) {
      setGamesInFavorite((prev) => {
        const newFav = prev.filter((item) => game !== item);
        localStorage.setItem("favorites", JSON.stringify(newFav));
        return newFav;
      });
    } else {
      setGamesInFavorite((prev) => {
        const newFav = [game, ...prev];
        localStorage.setItem("favorites", JSON.stringify(newFav));
        return newFav;
      });
    }
  };

  useEffect(() => {
    (async function () {
      await fakeNetwork();

      const cartData = JSON.parse(localStorage.getItem("cart"));
      setGamesInCart(cartData || []);
      const favData = JSON.parse(localStorage.getItem("favorites"));
      setGamesInFavorite(favData || []);

      setGames(gamesFromLocalFile);
      setIsLoadgin(false);
    })();
  }, []);

  return (
    <div className="App">
      <Header
        gamesInFavorite={gamesInFavorite}
        onCartOpen={onCartOpen}
        gamesInCart={gamesInCart}
      />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Slider />
            <Games
              onFavorite={onFavorite}
              gamesInFavorite={gamesInFavorite}
              games={games}
              gamesInCart={gamesInCart}
              onDeleteItem={onDeleteItem}
              onAddItem={onAddItem}
            />
          </Route>
          <Route path="/favorites" exact>
            <Favorites
              gamesInFavorite={gamesInFavorite}
              onFavorite={onFavorite}
              gamesInCart={gamesInCart}
              onDeleteItem={onDeleteItem}
              onAddItem={onAddItem}
              isLoading={isLoading}
            />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Cart
          onDeleteItem={onDeleteItem}
          onCartOpen={onCartOpen}
          isCartOpen={isCartOpen}
          gamesInCart={gamesInCart}
        />
      </main>
    </div>
  );
}
