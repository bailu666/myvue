import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Home from 'components/Home/Home'
import Search from 'components/Search/Search'
import Cart from 'components/Cart/Cart'

//  全局注册
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
