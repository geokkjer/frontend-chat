import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import ProfileView from '@/views/ProfileView.vue'
import ChatView from '@/views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navbar: NavbarComponent,
        hero: HeroComponent,
      },
      children: [],
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        default: ProfileView,
        navbar: NavbarComponent,
      },
    },
    {
      path: '/chat',
      name: 'chat',
      components: {
        default: ChatView,
        navbar: NavbarComponent,
      },
    },
  ],
})

export default router
