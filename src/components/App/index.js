import './App.css';
import Header from '../Header';
import PriceDislay from '../PriceDisplay';

function App() {
  return (
    <div className="App">
      <Header />
      <PriceDislay currencyCode='&#36;' rate="37,138.2632" />
    </div>
  );
}

export default App;
