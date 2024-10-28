import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TracksView from '@/views/TracksView.vue'
import TrackInfoView from '@/views/TrackInfoView.vue'
import PlaylistsView from '@/views/PlaylistsView.vue'
import PlaylistInfoView from '@/views/PlaylistInfoView.vue'

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
    }, 
    {
      path: '/playlists',
      name: 'your playlist',
      component: PlaylistsView
    }, 
    {
      path: '/playlists/:id',
      name: 'playlist info',
      component: PlaylistInfoView
    }, 
  ]
})

export default router
