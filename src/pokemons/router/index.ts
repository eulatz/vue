import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: "list",
      props: {title: 'Listado'},
      name: 'pokemon-list',
      component: () => import('@/pokemons/pages/PokemonList.vue'),
    
    },
        {
      path: "by/:id",
      props: {title: 'Pokemon por ID'},
      name: 'pokemon-id',
      component: () => import('@/pokemons/pages/PokemonById.vue'),
    
    },
        {
      path: "search",
      props: {title: 'Busqueda'},
      name: 'pokemon-search',
      component: () => import('@/pokemons/pages/PokemonSearch.vue'),
    },
    
  ],
  
};
