import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/'
import Starship from '@/pages/Starship/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/:id',
      name:'Starship',
      component:Starship
    }
  ]
})
