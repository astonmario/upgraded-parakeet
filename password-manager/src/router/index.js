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
    component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
    meta: { title: '自述文件' },
    children: [
        {
            path: '/dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
            meta: { title: '系统首页' }
        },
        {
            path: '/table',
            component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
            meta: { title: '基础表格' }
        },
    ]
},
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
