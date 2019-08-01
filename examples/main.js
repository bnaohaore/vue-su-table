import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import suTables from 'vue-su-table'

import suTables from '../packages'

Vue.use(suTables);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
