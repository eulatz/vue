<script setup lang="ts">
    import PokeCardList from '../components/PokeCardList.vue';
    import PokemonCard from '../components/PokemonCard.vue';
    import { usePokemon } from '../composables/usePokemons';
        const {count, pokemons, isLoading, isError, error} = usePokemon()
</script>

<template>
    <h1 v-if="isLoading"> Loading </h1>
        <div v-else-if="isError">{{ error }}</div>

    <div v-else>
        <h1>Listado Pokemon</h1>
            <PokeCardList :pokemons="pokemons ?? []" />
            
        
        <h4 v-if="isLoading === false"> ( {{count}} )</h4>
    </div>
</template>