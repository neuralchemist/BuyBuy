import { useState, useEffect } from "react";
// axios
import axios from "axios";

const endpoints = [
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/4",
  "https://pokeapi.co/api/v2/pokemon/8",
  "https://pokeapi.co/api/v2/pokemon/12",
  "https://pokeapi.co/api/v2/pokemon/16",
  "https://pokeapi.co/api/v2/pokemon/20",
  "https://pokeapi.co/api/v2/pokemon/24",
  "https://pokeapi.co/api/v2/pokemon/28",
  "https://pokeapi.co/api/v2/pokemon/32",
];

function useGetAllPokemon() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setLoading] = useState(null);
  const [isSuccess, setSuccess] = useState(null);
  const [isError, setError] = useState(null);

  useEffect(() => {
    console.log("mount pokemon");
    let didCancel = false;
    const fetchPokemons = async () => {
      // set loading
      if (!didCancel) {
        setLoading(true);
      }
      // fetch data
      try {
        const obj_array = await Promise.all(
          endpoints.map((endpoint) => axios.get(endpoint))
        );

        if (!didCancel) {
          // set data
          setAllPokemons(
            obj_array.map(({ data }) => ({
              id: data.id,
              name: data.name,
              price: data.weight,
              image: data.sprites.front_shiny,
              types: data.types.map((obj) => obj.type.name),
              abilities: data.abilities.map((obj) => obj.ability.name),
            }))
          );

          // set success
          setSuccess(true);
        }
      } catch (error) {
        console.log("useGetAllPokemon Error: ", error);
        // set error
        if (!didCancel) {
          setError(true);
        }
      }

      if (!didCancel) {
        setLoading(false);
      }
    };
    // fetch function
    fetchPokemons();

    return () => {
      console.log("unmount pokemon");
      didCancel = true;
    };
  }, []);

  return { data: allPokemons, isLoading, isError, isSuccess };
}

export default useGetAllPokemon;
