import { Link } from 'react-router-dom'
const Pokemon = () => {
  return (
    <div>
      

    <div>
      <Link to={'/favs'}>Favoritos</Link>
      <Link to={'/home'}>Home</Link>
    </div>
    </div>
  )
}

export default Pokemon