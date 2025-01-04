import PokemonComponent from './components/PokemonComponent'
import Menu from './components/Menu'
import Score from './components/Score'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [isStarted, setIsStarted] = useState(false);
 const [pokemonData, setPokemonData] = useState([]);
 const [randomValues, setRandomValues] = useState([]);
 const [gameLevel, setGameLevel] = useState(5);
 const [correctCount, setCorrectCount] = useState(0);
 const [isModalOpen, setIsModalOpen] = useState(false);

 function startGame(){
      setCorrectCount(0);
      setIsStarted(!isStarted);
      setIsModalOpen(true)
 }
 function Modal({children, isOpen, onClose}){
  if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <button onClick={onClose} className="close-button">Close</button>
          <button onClick={() => window.location.reload()} className="reset-button">Reset</button>
        </div>
      </div>
  );
 }

 function handleGameLevel(event) {
  const level = parseInt(event.target.value, 10);
  setGameLevel(level);
  setIsModalOpen(false); 
}

useEffect(()=>{
  function randomIds(){
    const random = [];

    while (random.length < gameLevel){
      const randomNum = Math.floor(Math.random() * 22);
      !random.includes(randomNum) && random.push(randomNum)
    }
    return random;
 }

setRandomValues(randomIds())
},[gameLevel])
 
  return (
    <>
    <div className="main">
            <Menu setIsModalOpen={setIsModalOpen}/>
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
        {!isStarted && <button onClick={() => startGame()}>Start Game</button>}
        {
          isStarted && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Select Difficulty</h2>
          <button className="easy" value={5} onClick={handleGameLevel}>
            Easy
          </button>
          <button className="medium" value={8} onClick={handleGameLevel}>
            Medium
          </button>
          <button className="hard" value={12} onClick={handleGameLevel}>
            Hard
          </button>
        </Modal>
}
    </div>
    </>
  )
}

export default App
