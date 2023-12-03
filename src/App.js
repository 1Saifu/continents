import './App.css';
import Continents from './Continent';
import ContinentData from './ContinentData'
import { useState } from 'react';

function App() {

  const [showButton, setShowButton] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <h2>Learn continents and countries!</h2>
      <button onClick={() => {setShowButton(true)}} className='button'>Press to start</button>
   {showButton && <Continents setShowButton={setShowButton} showButton={showButton} />}
      </header>
    </div>
  );
}

export default App;
