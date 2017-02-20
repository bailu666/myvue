// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('./../static/swiper-3.4.0.min.css')
require('./style/app.scss')
require('./style/home.scss')
require('./../static/swiper-3.4.0.min.js')
import router from './router'

/*eslint-disable no-new*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
