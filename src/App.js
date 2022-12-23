import logo from './logo.svg';
import './App.css';
import Jsx from './Components/Jsx';
import Hello from './Components/Jsxbase';
import Ref from './Components/Ref';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Jsx/>
          <Hello/>
          <Ref/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
