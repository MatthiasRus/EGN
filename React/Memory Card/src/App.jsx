import PokemonComponent from './components/PokemonComponent'
import Menu from './components/Menu'
import Score from './components/Score'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [isStarted, setIsStarted] = useState(false);
 const [pokemonData, setPokemonData] = useState([]);
 const [randomValues, setRandomValues] = useState([]);
 const [gameLevel, setGameLevel] = useState(8);
 const [correctCount, setCorrectCount] = useState(0);

 function startGame(){
  setIsStarted(!isStarted)
 }

 function handleGameLevel(e){
  const {value} = e.target;
  setGameLevel(Number(value));
 }
useEffect(()=>{
  function randomIds(){
    const random = [];

    while (random.length < gameLevel){
      const randomNum = Math.floor(Math.random() * 30);
      !random.includes(randomNum) && random.push(randomNum)
    }
  return random;
 }

setRandomValues(randomIds())
},[gameLevel])
 
  return (
    <>
    <div className="main">
            <Menu/>
            <h1 className='title'>Memory Card Game</h1>
    {
      isStarted && 
      <>
       <Score score={correctCount}/>
       <PokemonComponent 
       ids={randomValues} 
       data={pokemonData} 
       setData={setPokemonData}
       setScore={setCorrectCount}
       level = {gameLevel}
       />
      </>
    }
        <button onClick={() => startGame()}>{isStarted ? "Close Game" : "Start Game"}</button>
        {
          !isStarted && <>
          <button className="easy" value={8} name='easy' onClick={handleGameLevel}>Easy</button>
        <button className="medium" value={12} name='medium' onClick={handleGameLevel}>Medium</button>
        <button className="hard" value={16} name='hard' onClick={handleGameLevel}>Hard</button></>
}
    </div>
   
    
    </>
  )
}

export default App
