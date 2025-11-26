import { useQuery } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/get-pokemonById";

export const usePokemon = (id: string) => {

  const { isLoading, isError, data: pokemon, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonById(id),
  });

  return {
    isLoading,
    pokemon,
    isError,
    errorMessage: error,
  };

};
