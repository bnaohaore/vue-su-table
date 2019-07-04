import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*import suTable from './components/sutable'*/
import suTables from '../packages'
console.log(suTables);
Vue.use(suTables);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
