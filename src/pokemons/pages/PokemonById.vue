<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';


const route = useRoute();
const {id} = route.params;

const { isLoading, isError, pokemon , errorMessage } = usePokemon(id.toString());
</script>


<template>
    <h3 v-if="isLoading">Loading...</h3>
    <h2 v-else-if="isError">{{ errorMessage }}</h2>
    <div v-else-if="pokemon"> 
        <h1>{{ pokemon.name }}</h1>
        <div class="character-container">
<img :src="pokemon.frontSprite" :alt="pokemon.name" />
        </div>
    </div> 
</template>



<style scoped>
    .character-container {
        display: flex;
        justify-content: center;
    }

    img {
        width: 100px;
        border-radius: 5px;
    }
</style>