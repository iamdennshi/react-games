import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';

import {useState} from 'react';




function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="App">
      <Header handleShowCart={onCartOpen} />
      <main className='main'>
        <Slider />
        <Games/>
        <Cart onCartOpen={onCartOpen} isCartOpen={isCartOpen}/>
      </main>
    </div>
  );
}

export default App;
