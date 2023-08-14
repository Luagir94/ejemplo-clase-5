import {createContext, useReducer, useEffect, useState} from 'react';
import {useQuery, useMutation} from '@tanstack/react-query';
import {initData} from '../../data';



export const PokemonContext = createContext();


const initialStatePokemons = {
    pokemons: [],
    favs: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
            }
        case 'LOAD_FAVS':
            return {
                ...state,
                favs: [...action.payload]
            }
        case 'ADD_FAV':
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                favs: state.favs.filter(fav => fav.id !== action.payload)
            }
        default:
            return state
    }
}




const PokemonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStatePokemons)
    const [page, setPage] = useState(0)
    const { data : PokemonData } = useQuery(["pokemons", page], () => getPokemons(page))
    const { mutate : addFav, isLoading : isLoadingAddFav} = useMutation((pokemon) => saveFav(pokemon))
    const { mutate : deleteFav, isLoading : isLoadingDeleteFav} = useMutation((id) => removeFav(id))
    const { pokemons, favs } = state



const getPokemons = async (page) => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}}`);
        const data = await request.json();
        const { results } = data;
        return results.map(x => ({ ...x, id_poke: x.url.split('/')[6] }))
    }


const saveFav = async (pokemon) => {
        const request = await fetch('https://611b233c22020a00175a4357.mockapi.io/ejemploclase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...pokemon
            }),
        })
        const data = await request.json();
        return data;
    }

const removeFav = async (id) => {
        const request = await fetch(`https://611b233c22020a00175a4357.mockapi.io/ejemploclase/${id}`, {
            method: 'DELETE',
        })
        const data = await request.json();
        return data;
    }



  const handlePagination = (page) => {
    if(page < 0) return;
    setPage(page)
  }


    useEffect(() => {
            dispatch({
                type: 'LOAD_POKEMONS',
                payload: PokemonData
            })
    }, [PokemonData])


        
  return (
    <PokemonContext.Provider
      value={{
        handlePagination,
        addFav,
        pokemons,
        favs,
        isLoadingAddFav,
        page,
    
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;