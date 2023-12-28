import Dicionary from "./components/Dicionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dicionary defaultKeyword="aesthetic"/>
        </main>
      </div>
    </div>
  );
}

export default App;
