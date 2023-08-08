import React from "react";
import Card from "../card";
import { useRef, useState, useEffect } from "react";

const Layout = (props) => {
  const inputRef = useRef(null);
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
      {props?.pokemons?.map((pokemon, i) => (
        <Card key={pokemon.name} {...pokemon} id={i + 1} />
      ))}
      {/* <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.style.border = "1px red solid";
        }}
      >
        Button
      </button> */}
      {/* <input onChange={(e) => setName(e.target.value)} value={name} /> */}
    </div>
  );
};

export default Layout;
