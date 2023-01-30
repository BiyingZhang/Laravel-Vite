import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import app from './components/app.vue'
import sideMenu from './components/sideMenu.vue'
import dashboard from './components/dashboard.vue'
import kanban from './components/kanban.vue'
import inbox from './components/inbox.vue'
import users from './components/users.vue'
import products from './components/products.vue'
import signin from './components/signIn.vue'
import signup from './components/signUp.vue'

const routes = [
    { path: '/sideMenu', name: 'sideMenu', component: sideMenu },
    { path: '/dashboard', component: dashboard },
    { path: '/kanban', component: kanban },
    { path: '/inbox', component: inbox },
    { path: '/users', component: users },
    { path: '/products', component: products },
    { path: '/signin', component: signin },
    { path: '/signup', component: signup },
  ]

  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(app)
.use(router)
.mount("#app")
