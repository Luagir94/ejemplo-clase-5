import {createContext, useState, useEffect, useReducer} from 'react';
import { useMutation, useQuery } from '@tanstack/react-query'

export const Context = createContext();

const initialState = {
    pokemons : [],
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'OBTENER_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state;
    }
}



export const ContextProvider = ({children}) => {
    const [page, setPage] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data } = useQuery(['pokemons', page ], () =>getPokemons(page),{ initialData : []});
    const {mutate : capturar, isLoading : loadingCapturar} =useMutation((pokemon) => capturarPokemons(pokemon))
    
    
    
    useEffect(() => {
        dispatch({ type: 'OBTENER_POKEMONS', payload: data })
    }, [data])

const getPokemons = async (page) => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}}`);
        const data = await request.json();
        const { results } = data;
        if(!request.ok) throw new Error('Error al obtener los datos');
        return results.map(pokemons => ({ ...pokemons, id_poke: pokemons.url.split('/')[6] }))
    }

    /**
     * @description Funcion para capturar pokemons y guardarlos en la base de datos
     * @param {Object} pokemon Pokemon que quiero atrapar
     * @returns { Promise}
     */
const capturarPokemons = async (pokemon) => {
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


    /**
     * @author Luciano
     * @description Funcion para manejar la paginacion
     * @param {number} page  Numero de pagina
     * 
     */
    const handlePagination = (page) =>{
        if(page < 0) return;
        setPage(page)
    }
    
    return (
            <Context.Provider value={
                {
                    ...state,
                    handlePagination,
                    capturarPokemons,
                    loadingCapturar,
                    capturar,
                    page
                }
            }>
                {children}
            </Context.Provider>
    )
}