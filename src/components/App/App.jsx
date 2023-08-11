import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';

import {useState} from 'react';




function App() {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(current => !current);
  }

  return (
    <div className="App">
      <Header handleShowCart={handleShowCart} />
      <main className='main'>
        <Slider />
        <Games/>
        {showCart && <Cart handleShowCart={handleShowCart}/>}
      </main>
    </div>
  );
}

export default App;
