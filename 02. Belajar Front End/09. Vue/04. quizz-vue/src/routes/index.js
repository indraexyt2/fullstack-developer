import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/quiz/:id',
        name: 'Quiz',
        component: () => import('../views/Quiz.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;