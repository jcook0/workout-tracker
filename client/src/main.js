import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import './main.css'
import App from './App.vue'
import Home from './views/Home.vue';
import CreateExercise from './views/CreateExercise.vue';
import EditExercise from './views/EditExercise.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/createExercise',
    name: 'Create',
    component: CreateExercise,
  },
  {
    path: '/editExercise',
    name: 'Edit',
    component: EditExercise,
  }
  // Add more routes for other views as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
