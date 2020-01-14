import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false

Vue.use(VueLodash, options) // options is optional
const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueRouter)
const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')