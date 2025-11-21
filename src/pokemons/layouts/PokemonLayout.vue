<script setup lang="ts">
    import NavBar from '@/shared/components/NavBar.vue';
    import { pokemonRoute } from '../router';
    import type{ RouterLink } from '@/router/list-routes';
    
    const routeLinks: RouterLink[] = pokemonRoute.children?.map(({name,path,props}) => {
        return {
            name: name?.toString() ?? ' ',
            path: `${pokemonRoute.path}/${path}`,
            title: (props as {title:string}).title,
        }
    }) || []
    
</script>

<template>
    <NavBar :links="routeLinks" isSecondary/>

    <div>
        <RouterView/>
    </div>
</template>


