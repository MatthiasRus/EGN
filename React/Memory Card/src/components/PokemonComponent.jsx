import { useState } from "react";
import useCards from "./Cards";
import Confetti from 'react-confetti'

export default function PokemonComponent({ ids, data, setData, setScore, level}) {
  const { pokemonData, isLoading, error } = useCards(ids, data, setData);
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
    if (selected.includes(name)) {
      setIsGameOver(!isGameOver); 
      setSelected([])
    } else if (selected.length + 1 === level) {
      setSelected([]);
      setScore(score => (++score))
      setIsWin(true); 
      
    } else {
      setSelected((prev) => [...prev, name]); 
      setScore(score => (++score))
      shuffleArray(pokemonData)
    }

    
  }

  if (isLoading) return <p className="text-center text-xl">Loading...</p>;

  if (error) return <p className="text-red-500 text-center text-xl">{error}</p>;

  if (isGameOver) return <p className="text-center text-xl text-red-500">Game Over! Try again.</p>;
  if (isWin) {
    return(
      <>
      <Confetti/>
       <p className="text-center text-xl text-green-500">You Win! Congratulations!</p>;
      </>
    )
  }
     
 
  return (
    <div className="cards">
      {!isGameOver ? pokemonData.map((data) => (
        <button className="card" key={data.id} name={data.name} onClick={() =>handleClick(data.name)}>
          <img src={data.sprites.front_default} alt={data.name} />
          <p className="card-title">{data.name}</p>
        </button>
      )): isWin? <p>Holla You win cheers</p> : <p>I think you lost</p>}
    </div>
  );
}
