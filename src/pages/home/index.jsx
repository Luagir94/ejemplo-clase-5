import React,{useContext} from 'react'
import Layout from '../../components/layout';
import {PokemonContext} from '../../context';
import {Link} from 'react-router-dom';


const Home = () => {
  const {pokemons, page,handlePagination} = useContext(PokemonContext)


 






 


  return (
    <div>
      


  <Layout pokemons={pokemons}
  handlePagination={handlePagination}
  page={page}
  />; 
     <div className='mt-32'>
    <Link to={'/favs'} className='p-5 mx-5 bg-red-700 radius-xl'>Capturados</Link>
      <Link to={'/'} className='p-5 mx-5 bg-red-700 radius-xl'>Home</Link>
    </div>
    </div>
  )
}

export default Home