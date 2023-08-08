import { useQuery } from "@tanstack/react-query";
import {useState, useEffect} from "react";
import Layout from "./components/layout";


   const getPokemons = async () => {
      try {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await request.json();
        const { results } = data;
        return results
      }catch (error) {
        console.log(error);
     
      }
     
    };

function App() {
  const { data : dataPokemon , error : errorPokemon , isLoading : pokemonIsLoading } = useQuery({
    queryKey : ['pokemon'],
    queryFn : getPokemons,
    
  });
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    setPokemons(dataPokemon)
  }, [dataPokemon]);


  if (pokemonIsLoading) return <div style={{fontSize: 100}}>Loading...</div>;

  if (errorPokemon) return <div style={{fontSize: 100}}>{errorPokemon}</div>;

  return <Layout pokemons={pokemons} />;
}

export default App;
