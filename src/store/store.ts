import type { Pokemon } from "@/pokemons/interfaces";
import { reactive } from "vue";

interface Store {

    pokemons: {
        list        :   Pokemon[];
        count       :   number;
        isLoading   :   boolean;
        hasError    :   boolean;
        errorMessage:   string;
    },

    startedLoadingPokemon: (data: Pokemon[])=> void;
    loadedPokemons: (data: Pokemon[])=> void;
    loadPokemonsFailed: (error: string) => void;
}

const store = reactive<Store>({
    pokemons: {
        list        : [],
        count       : 0,
        isLoading   : false,
        hasError    : false,
        errorMessage: undefined as unknown as string
    },
    startedLoadingPokemon: async function (): Promise <void> {
this.pokemons = {
    ...this.pokemons,
    isLoading: true,
    hasError: false,
    errorMessage: undefined as unknown as string
        };
    },
    loadedPokemons: function (data: Pokemon[]): void {
    this.pokemons = {
        list        : data,
        count       : data.length,
        isLoading   : false,
        hasError    : false,
        errorMessage: undefined as unknown as string
    };
},
    loadPokemonsFailed: function (error: string): void {
this.pokemons ={
    ...this.pokemons,
    isLoading   : false,
    hasError    : true,
    errorMessage: error
}    }
}
)

export default store;