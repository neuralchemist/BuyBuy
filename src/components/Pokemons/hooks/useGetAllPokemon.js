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

  const fetchPokemons = async () => {
    // set loading
    setLoading(true);
    try {
      const obj_array = await Promise.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      setAllPokemons(
        obj_array.map(({ data }) => ({
          id: data.id,
          name: data.name,
          price: data.weight,
          image: data.sprites.front_shiny,
          description: data.abilities.map((obj) => obj.ability.name).join(", "),
        }))
      );

      // set success
      setSuccess(true);
    } catch (error) {
      console.log(error);
      // set error
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { data: allPokemons, isLoading, isError, isSuccess };
}

export default useGetAllPokemon;
