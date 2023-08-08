
const Card = (props) => {

  return (
    <div
      className="w-full shadow-xl cursor-pointer card card-compact bg-base-100 hover:bg-slate-700 "
  
    >
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props?.id}.png`}
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-row justify-between card-body">
        <h2 className="text-xl capitalize whitespace-pre-line card-title">
          {`${props.name}
           #${props.id}`}
        </h2>
        {/* {props.isFav ? <AiFillStar size={30} /> : <AiOutlineStar size={30} />} */}
      </div>
    </div>
  );
};

export default Card;
