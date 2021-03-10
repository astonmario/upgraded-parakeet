import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
  },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
