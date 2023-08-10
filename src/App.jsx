import { useQuery } from "@tanstack/react-query";
import {useState} from "react";
import Layout from "./components/layout";
import {initData} from '../data';


   const getPokemons = async (page) => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}}`);
        const data = await request.json();
        const { results } = data;
     
        return results
    };

function App() {
  const [page, setPage] = useState(0)
  const { data } = useQuery(["pokemons", page], () => getPokemons(page),{
    initialData: initData,
  })


 


  const handlePagination = (page) => {
    if(page < 0) return;
    setPage(page)
  }




 

  return <Layout pokemons={data}
  handlePagination={handlePagination}
  page={page}
  />;
}

export default App;
