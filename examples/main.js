import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import suTables from 'vue-su-table'
// import '../packages/element/theme-chalk/index.css'
// import element from '../packages/element'
// Vue.use(element);
import suTables from '../packages/index.js'

Vue.use(suTables);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
