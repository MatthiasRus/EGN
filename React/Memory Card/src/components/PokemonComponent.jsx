import { useState } from "react";
import useCards from "./Cards";
import Confetti from 'react-confetti'

export default function PokemonComponent({ ids, data, setData, setScore, level}) {
  const { pokemonData, isLoading, error} = useCards(ids, data, setData);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [selected, setSelected] =  useState([])

  function shuffleArray(array){
    for (let i = array.length - 1; i>0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function handleClick(name) {
   
    const cards = document.querySelectorAll('.card');
  
   
    cards.forEach((card) => {
      card.classList.add('flip');
    });
  
    
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove('flip');
      });
    }, 600);
  
   
    
      if (selected.includes(name)) {
        setIsGameOver(true);
        setSelected([]);
      } else if (selected.length + 1 === level) {
        setSelected([]);
        setScore((score) => ++score);
        setIsWin(!isWin);
        setIsGameOver(true);
      } else {
        setSelected((prev) => [...prev, name]);
        setScore((score) => ++score);
        shuffleArray(pokemonData);
      }
    } 
  
  

  if (isLoading) {
    return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Processing...</p>
        </div>
      )}
    
  
  if (error) {
    return (
      <p className="text-red-500 text-center text-xl" style = {{color:"white"}}>
        {error.message} Please refresh or try again later.
        <br></br>
        <button onClick={() => window.location.reload()}><div style={{ display: "inline-block", textAlign: "center" }}>
  <i 
    onClick={() => window.location.reload()} 
    className="fa fa-sync fa-spin" 
    style={{ fontSize: "48px", color: "#61dafb", cursor: "pointer", margin: "10px" }}
  ></i>
</div></button>
      </p>
    );
  }
  if (isGameOver && !isWin) return (
    <>
     <div className="lose-message">
          <h2>You Lost!</h2>
          <p>Better luck next time!</p>
          <div className="sad-face">😢</div>
        </div>
 <p className="text-center text-xl " style = {{color:"white"}}>Game Over! Try again.</p>
 <br></br>
 <div style={{ display: "inline-block", textAlign: "center" }}>
  <i 
    onClick={() => window.location.reload()} 
    className="fa fa-sync fa-spin" 
    style={{ fontSize: "48px", color: "#61dafb", cursor: "pointer", margin: "10px" }}
  ></i>
</div>


    </>
 
);

  if (isGameOver) {
    return(
      <>
      <Confetti
  numberOfPieces={1000}
  gravity={0.3}
  colors={['green', 'red', "yellow"]}
/>

       <p className="text-center text-xl" style={{color:"white"}}>You Win! Congratulations!</p>;
       <br />
       <div style={{ display: "inline-block", textAlign: "center" }}>
  <i 
    onClick={() => window.location.reload()} 
    className="fa fa-sync fa-spin" 
    style={{ fontSize: "48px", color: "#61dafb", cursor: "pointer", margin: "10px" }}
  ></i>
</div>
      </>
    )
  }
     

  return (
    <div className="cards">
      {!isGameOver &&  pokemonData.map((data) => (
        <button className="card" key={data.id} name={data.name} onClick={() =>handleClick(data.name)}>
          <img src={data.sprites.front_default} alt={data.name} />
          <p className="card-title">{data.name}</p>
        </button>
      ))}
    </div>
  );
}
