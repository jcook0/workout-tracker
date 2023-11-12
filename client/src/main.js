import { createApp, reactive, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './main.css'
import App from './App.vue'
import Home from './views/Home.vue';
import CreateExercise from './views/CreateExercise.vue';
import EditExercise from './views/EditExercise.vue';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwgugab4TEYa_9nV_2yGpmaVJM-fAueag",
  authDomain: "workout-tracker-bc4f7.firebaseapp.com",
  projectId: "workout-tracker-bc4f7",
  storageBucket: "workout-tracker-bc4f7.appspot.com",
  messagingSenderId: "709517383461",
  appId: "1:709517383461:web:0a9163a679a86932e2eccc",
  measurementId: "G-74M70H233P"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const globalStore = reactive({
  exercise: [],
  user: null
});

const auth = getAuth();

onAuthStateChanged(auth, user1 => {
  if (user1) {
    globalStore.user = user1
  } else {

  }
})

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

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router).mount('#app')


