import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/security/Login.vue'),
    },
    {
        path: '/register/choices',
        name: 'ChoicesRegister',
        component: () => import('../views/register/ChoicesRegister.vue'),
    },
    {
        path: '/register/:name',
        name: 'Register',
        component: () => import('../views/register/Register.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
