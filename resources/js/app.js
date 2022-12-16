import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import app from './components/app.vue'
import intro from './components/intro.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/intro', name: 'intro', component: intro }
    ]
})

createApp(app)
.use(router)
.mount("#app")
