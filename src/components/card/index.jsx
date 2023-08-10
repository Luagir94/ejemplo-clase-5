import { useMutation } from "@tanstack/react-query";
const Card = (props) => {
  const { mutate, isLoading} = useMutation((pokemon) => fetch('https://611b233c22020a00175a4357.mockapi.io/ejemploclase', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    name : 'Brook'
}),
   }))



  return (
    <div
      className="w-full shadow-xl cursor-pointer card card-compact bg-base-100 hover:bg-slate-700 "
      

    >
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props?.id + props.page}.png`}
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-row justify-between card-body">
        <h2 className="text-xl capitalize whitespace-pre-line card-title">
          {`${props.name}
           #${props?.id + props.page }`}
        </h2>
       {isLoading ? <p>Guardando favorito...</p> :
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded
        hover:bg-blue-700" onClick={() => mutate({name: props.name, region : 'kanto'})}>Favorito</button>}
      </div>
    </div>
  );
};

export default Card;
