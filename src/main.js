// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios  from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    List: Array
  },
  mutations:{

  }
  })




Vue.prototype.$axios = Axios

Vue.use(ElementUI);
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
