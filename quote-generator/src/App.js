import './App.css';
import Quotes from './components/Quotes'

function App() {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div className='cont'>
        <Quotes/>
      </div>
    </div>
  );
}

export default App;
