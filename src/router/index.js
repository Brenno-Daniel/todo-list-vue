import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Kanban from '@/views/kanban/Kanban'

Vue.use(Router) 

// O router possui um array de rotas 'routes', abaixo configuramos a rota do home e kanban
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'kanban',
        path: '/kanban',
        component: Kanban
    }
]

const router = new Router({ routes })

export default router