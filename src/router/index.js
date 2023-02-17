import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../view/HomePage.vue'
import EventDetails from '../components/EventDetails.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: HomePage
},
{
    path: '/eventdetails',
    name: 'details',
    component: EventDetails
}

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router