import logo from './logo.svg';
import './App.css';
import JatekTer from './components/JatekTer';
import { useContext, useState } from 'react';
import { KattContext, KattProvider } from './context/KattContext';

function App() { 

  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>

    <article>
        <div className='jatekter'>
            <JatekTer lista = {lista}/>
        </div>
    </article>

    <footer>Kádár Kristóf</footer>

    </div>
  );
}

export default App;
