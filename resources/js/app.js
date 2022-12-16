import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import app from './components/app.vue'
import sideMenu from './components/sideMenu.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/sideMenu', name: 'sideMenu', component: sideMenu }
    ]
})

createApp(app)
.use(router)
.mount("#app")
