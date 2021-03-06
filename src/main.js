import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false

const options = { name: 'lodash' } 
Vue.use(VueLodash, options) 
Vue.use(VueRouter)
const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')