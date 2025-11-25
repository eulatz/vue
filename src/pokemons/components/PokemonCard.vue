
<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
    pokemon: Pokemon
}
const props = defineProps <Props> () 

</script>

<template>
    <div class="card">
        <img :src="props.pokemon.frontSprite" alt="pokemon.name">
        <h3> {{ props.pokemon.name }}</h3>
    </div>
</template>


<style scoped>
.card {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);

}

img {
    width: 100px;
    border-radius: 5px 5px0px 0px;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
    transition: all 0.5s;
}

.img:hover {
    box-shadow: 0px 2px 10px rgba(0,0.4,0,0.2);
    transition: all 0.5s;
}

</style>