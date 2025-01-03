import useCards from "./Cards"
export default function PokemonComponent({ ids }) {
    const { pokemonData, isLoading, error } = useCards(ids);
  
    if (isLoading) return <p className="text-center text-xl">Loading...</p>;
    if (error) return <p className="text-red-500 text-center text-xl">{error}</p>;
  
    return (
      <div className="cards">
        
           {pokemonData.map((data) => (
             <div className="card" key={data.id}>
               <img src={data.sprites.front_default} alt={data.name} />
               <p className="card-title">{data.name}</p>
             </div>
           ))}
         
      </div>
    );
  }