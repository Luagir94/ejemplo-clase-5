
import { useContext } from "react";
import {Context} from "../../context";

const Card = ({id_poke, name ,isFav}) => {
const {capturar, loadingCapturar} = useContext(Context)



  return (
    <div
      className="w-full shadow-xl cursor-pointer card card-compact bg-base-100 hover:bg-slate-700 "
      

    >
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id_poke}.png`}
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-row justify-between card-body">
        <h2 className="text-xl capitalize whitespace-pre-line card-title">
          {`${name}
           #${id_poke}`}
        </h2>
       {isFav ?  null :
       loadingCapturar ? <p>Capturando Pokemon...</p> :
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => capturar({name, id_poke})}>Atrapar</button>}
      </div>
    </div>
  );
};

export default Card;
