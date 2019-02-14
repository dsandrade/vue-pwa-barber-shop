import Vue from 'vue'
import Router from 'vue-router'

// CONTAINERS
import Full from '@/containers/Full'

// VIEWS
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'container',
      redirect: '/home',
      component: Full,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
