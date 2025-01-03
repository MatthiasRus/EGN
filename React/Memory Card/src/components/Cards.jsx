import fetchPokemon from "../PokemonAPI";
import { useEffect, useState } from "react";
export default function useCards(ids) {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function getPokemonData() {
        setIsLoading(true);
        try {
          const data = await Promise.all(
            ids.map(async (id) => {
              const response = await fetchPokemon(id);
              return response;
            })
          );
          setPokemonData(data); 
        } catch (error) {
          console.error("Error fetching Pokémon data:", error);
          setError("Failed to fetch data.");
        } finally {
          setIsLoading(false);
        }
      }
      getPokemonData();
    }, [ids]);
  
    return { pokemonData, isLoading, error };
  }
  