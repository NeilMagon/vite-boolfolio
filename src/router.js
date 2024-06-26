import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/projects',
                name: 'projects',
                component: ProjectList
            },
            {
                path: '/projects/:slug',
                name: 'SingleProject',
                component: SingleProject
            },
        ]
    });

export { router };