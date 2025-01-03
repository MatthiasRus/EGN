const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemon(request) {
    const response = await fetch(`${BASE_URL}${request}`);
    if(!response.ok){
        throw new Error ("pokemon data cannot be fetched");
    } 
    return await response.json();
}

export default fetchPokemon