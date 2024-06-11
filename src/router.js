import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectList from './components/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/',
                name: 'projects',
                component: ProjectList
            },
        ]
    });

export { router };