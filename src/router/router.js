import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Layout,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Home
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import( /* webpackChunkName: "about" */ '@/views/About.vue')
      }
    }
  ]
})