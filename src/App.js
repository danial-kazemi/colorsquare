import { useRef, useState } from 'react';
import Input from './Input';
import Square from './Square.jsx';
import './App.css';

function App() {

  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');

  const inputRef = useRef(null);

  return (
    <div className="App">
      <header>        
      </header>


      <main className='main'>
        <Square colorValue={colorValue} hexValue={hexValue}/>
        <Input colorValue={colorValue} setColorValue={setColorValue}  setHexValue={setHexValue} />
      </main>
      <footer>        
      </footer>


    </div>
  );
}

export default App;
