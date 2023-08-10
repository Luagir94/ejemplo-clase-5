
import Card from "../card";


const Layout = (props) => {


  return (
    <>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
      {props?.pokemons?.map((pokemon, i) => (
        <Card key={pokemon.name} {...pokemon} id={i + 1} page={props.page} />
      ))}

    </div>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" 
            onClick={() => props.handlePagination(props.page - 10)}>Anterior</button>

            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
             onClick={() => props.handlePagination(props.page + 10)}>Siguiente</button>
  </>
  );
};

export default Layout;
