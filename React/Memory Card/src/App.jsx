import PokemonComponent from './components/PokemonComponent'
import Menu from './components/Menu'
import Score from './components/Score'
import { useState } from 'react'
import './App.css'

function App() {
 const [isStarted, setIsStarted] = useState(false);
 const [randomValues, setRandomValues] = useState([])
 function startGame(){
  setIsStarted(!isStarted)
 }

 function randomIds(){
  for (let i ; i< 30; i++){
    const randomNum = Math.floor(Math.random() * 50);
  randomValues.includes(randomNum) ? randomValues : setRandomValues([...randomValues, randomNum])
  }
  
  return randomValues;
 }
  return (
    <>
    <div className="main">
            <Menu/>
            <h1 className='title'>Memory Card Game</h1>
    {
      isStarted && 
      <>
       <Score/>
       <PokemonComponent ids={randomIds()}/>
      </>
           
      
    }
        <button onClick={() => startGame()}>{isStarted ? "Close Game" : "Start Game"}</button>

    </div>
    </>
  )
}

export default App
