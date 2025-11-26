import { createApp } from 'vue';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import store from '@/store/store';
import './assets/main.css'

    store.startedLoadingPokemon()


const app = createApp(App)

const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 1000 * 120,    
                refetchOnReconnect: 'always',        
            }
        }
    });
app.use(VueQueryPlugin, {queryClient})
    app.use(router)

    app.mount('#app')
