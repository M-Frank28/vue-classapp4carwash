import { createApp } from 'vue'
import App from './App.vue'

import ContactC from './components/ContactC.vue'
import HomeC from './components/HomeC.vue'
import ServicesC from './components/ServicesC.vue'

import {createRouter, createWebHistory} from 'vue-router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//defining the routes=> components

const routes = [
    {path:'/home', component: HomeC},
    {path:'/services', component: ServicesC},
    {path:'/contact', component: ContactC}
];

//instance of the router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//instance the app

const app = createApp(App);
app.use(router);

app.mount('#app')
