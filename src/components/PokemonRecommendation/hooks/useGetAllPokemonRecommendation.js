import { useState, useEffect } from "react";
// axios
import axios from "axios";

const endpoints = [
  "https://pokeapi.co/api/v2/pokemon/2",
  "https://pokeapi.co/api/v2/pokemon/5",
  "https://pokeapi.co/api/v2/pokemon/9",
  "https://pokeapi.co/api/v2/pokemon/13",
  "https://pokeapi.co/api/v2/pokemon/17",
  "https://pokeapi.co/api/v2/pokemon/21",
];

function useGetAllPokemonRecommendation() {
  const [allPokemonRecommendation, setAllPokemonRecommendation] = useState([]);
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

      setAllPokemonRecommendation(
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

  return { data: allPokemonRecommendation, isLoading, isError, isSuccess };
}

export default useGetAllPokemonRecommendation;
