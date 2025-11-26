<script setup lang="ts">
    import { useQuery } from '@tanstack/vue-query';
    import store from '../../store/store.ts'

    import PokeCardList from '../components/PokeCardList.vue';
    import { getPokemons } from '../helpers/get-pokemons.ts';

    useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
        select: (data) =>{
            store.loadedPokemons(data)
        }
    })
</script>

<template>
    <h1 v-if="store.pokemons.isLoading"> Loading </h1>
        <div v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</div>

    <div v-else>
        <h1>Listado Pokemon Nativo de Vue (arbol genealogico)</h1>
            <PokeCardList :pokemons="store.pokemons.list ?? []" />
            
        
        <h4 v-if="store.pokemons.isLoading === false"> ( {{store.pokemons.count}} )</h4>
    </div>
</template>