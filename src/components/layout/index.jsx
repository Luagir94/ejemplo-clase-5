
import Card from "../card";


const Layout = ({pokemons, page, handlePagination, isFav}) => {


  return (
    <>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
      {pokemons?.map((pokemon, i) => (
        <Card key={pokemon.id} {...pokemon} id={pokemon.id} isFav={isFav} />
      ))}

    </div>

    { !page && !handlePagination ? null : 
    
    <>
     <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" 
            onClick={() => handlePagination(page - 10)}>Anterior</button>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
             onClick={() => handlePagination(page + 10)}>Siguiente</button></>
    }        
  </>
  );
};

export default Layout;
