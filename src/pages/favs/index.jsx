import { Link } from 'react-router-dom'
import Layout from '../../components/layout';
import { useQuery } from '@tanstack/react-query';


const getCapturados = async () => {
        const request = await fetch('https://611b233c22020a00175a4357.mockapi.io/ejemploclase');
        const  data = await request.json();
        return data;
}

const Favs = () => {
  const {data : capturados} = useQuery(['capturados'], getCapturados)


  return (
    <div>
      
  <Layout pokemons={capturados || []}
  isFav
  />; 
    <div className='mt-32'>
      
      <Link to={'/favs'} className='p-5 mx-5 bg-red-700 radius-xl'>Capturados</Link>
      <Link to={'/'} className='p-5 mx-5 bg-red-700 radius-xl'>Home</Link>
    </div>
    </div>
  )
}

export default Favs