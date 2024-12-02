import { createRouter, createWebHistory } from "vue-router";

class AppRouter{
    constructor(){
        this.routes = [
            {
                path: '/',
                name: 'home',
                component: () => import('@/pages/Home.vue')
            }
        ]
    }
}