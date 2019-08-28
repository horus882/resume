import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Research from './pages/Research'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/about', name: 'About', component: About },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/research', name: 'Research', component: Research },
    { path: '/', redirect: '/about' }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')

