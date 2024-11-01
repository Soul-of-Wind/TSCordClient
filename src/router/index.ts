import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import ViewHome from '../views/ViewHome.vue';
import ViewExample from '../views/example/ViewExample[id].vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LayoutDefault,
        name: 'Layout Default',
        children: [
            { path: '/', component: ViewHome, name: 'Home' },
            { path: '/example/:id', component: ViewExample, name: 'Example' }
        ]
    },
    {
        path: '/server/:uid',
        component: () => import('@/layouts/LayoutServer.vue'),
        children: [
            { path: '/server/:uid/:channelId', component: () => import('@/views/server/ViewServerChannel.vue') }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 