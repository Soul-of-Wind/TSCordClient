import { createMemoryHistory, createRouter } from 'vue-router'

import ViewHome from "../view/ViewHome.vue";

const routes = [
    { path: '/', component: ViewHome },
    { path: '/example/:id', component: import('../view/example/[id].vue') },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router