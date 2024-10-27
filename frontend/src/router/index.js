import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TracksView from '@/views/TracksView.vue'
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
      path: '/tracks',
      name: 'tracks',
      component: TracksView
    },
    {
      path: '/tracks/:id',
      name: 'track info',
      component: TrackInfoView
    }
  ]
})

export default router
