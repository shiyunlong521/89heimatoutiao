import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'// 换成小写的home
import Login from '../views/login'
Vue.use(VueRouter)
var routes = [
  {
    // 强制跳转
    path: '/',
    redirect: '/home'
  },
  {
    // home主页
    path: '/home',
    name: 'home',
    component: Home
  }, {
    // 登录页
    path: '/login',
    component: Login
  }
]
const router = new VueRouter({
  routes
})

export default router
