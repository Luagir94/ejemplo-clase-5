import React,{useContext} from 'react'
import Layout from '../../components/layout';
import {Context} from '../../context';
import {Link} from 'react-router-dom';


const Home = () => {
  const {pokemons, page, handlePagination} = useContext(Context);

 






 


  return (
    <div>
      <Layout pokemons={pokemons }
      page={page}
      handlePagination={handlePagination}
      />; 
     <div className='mt-32'>
        <Link to={'/favs'} className='p-5 mx-5 bg-red-700 radius-xl'>Capturados</Link>
        <Link to={'/'} className='p-5 mx-5 bg-red-700 radius-xl'>Home</Link>
    </div>
    </div>
  )
}

export default Home