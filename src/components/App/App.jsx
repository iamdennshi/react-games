import Header from '../header/Header';
import Slider from '../slider/Slider';
import Games from '../games/Games';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Slider />
        <Games />
      </main>
    </div>
  );
}

export default App;
