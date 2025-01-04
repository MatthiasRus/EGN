import fetchPokemon from "../PokemonAPI";
import { useEffect, useState } from "react";

export default function useCards(ids, pokemonData, setPokemonData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 5;
    const retryDelay = 1000;

    async function getPokemonData() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await Promise.all(
          ids.map(async (id) => {
            const response = await fetchPokemon(id);
            return response;
          })
        );

        setPokemonData(data);
        setIsLoading(false);
      } catch (err) {
        

        if (retryCount <= maxRetries) {
         
          setTimeout(() => {
            getPokemonData();
          }, retryDelay * retryCount);
        } else {
          setError(err.message || "Failed to fetch data after multiple attempts.");
          setIsLoading(false); 
        }
      }
    }

    getPokemonData();
  }, [ids, setPokemonData]); 

  return { pokemonData, isLoading, error };
}
