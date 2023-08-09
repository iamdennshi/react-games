import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';
import Cart from '../cart/Cart';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Slider />
        <Games />
        <Cart />
      </main>
    </div>
  );
}

export default App;
