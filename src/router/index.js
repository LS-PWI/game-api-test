import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Ping from "../components/Ping.vue";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Ping',
        component: Ping
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
