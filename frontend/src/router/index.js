import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SongsView from '@/views/SongsView.vue'
import TrackInfoView from '@/views/TrackInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongsView
    },
    {
      path: '/songs/:id',
      name: 'track info',
      component: TrackInfoView
    }
  ]
})

export default router
