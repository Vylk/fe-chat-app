import { createRouter, createWebHistory } from "vue-router";

class AppRouter{
    constructor(){
        this.routes = [
            {
                path: '/',
                name: 'home',
                component: () => import('@/pages/Home.vue'),
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/pages/Login.vue')
            }
        ]
        this.router = this.createRouterIntance()
    }
    createRouterIntance(){
        return createRouter({
            history: createWebHistory(),
            routes: this.routes
        })
    }

    getRouter(){
        return this.router
    }
}

const appRouter = new AppRouter()
export default appRouter.getRouter()
