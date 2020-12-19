import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

Vue.use(Router) 

// O router possui um array de rotas 'routes', abaixo configuramos a rota do home
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }
]

const router = new Router({ routes })

export default router