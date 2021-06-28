import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dealer',
    name: 'Dealer',
    component: () => import(/* webpackChunkName: "Dealer" */ '../views/Dealer.vue')
  },
  {
    path: '/shopmanual',
    name: 'Shopmanual',
    component: () => import(/* webpackChunkName: "Shopmanual" */ '../views/Shopmanual.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ////會員
  {
    path: '/creatmember',
    name: 'CreatMember',
    component: () => import(/* webpackChunkName: "CreatMember" */ '../views/member/CreatMember.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
  {
    path: '/Forget',
    name: 'Forget',
    component: () => import(/* webpackChunkName: "TwForget" */ '../views/member/TwForget.vue')
  },
  {
    path: '/MemberCenter',
    name: 'MemberCenter',
    component: () => import(/* webpackChunkName: "MemberCenter" */ '../views/member/MemberCenter.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
