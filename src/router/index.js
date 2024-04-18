import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import ListUserView from '@/views/ListUserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/GalleryPINTER',
    name: 'galleryPINTER',
    component: GalleryView
  },
  {
    path: '/ListUser',
    name: 'listUser',
    component: ListUserView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
