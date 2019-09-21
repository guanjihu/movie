import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import 'lib-flexible'
import store from '../store/store'
import { Loading, Search, NavBar } from 'vant'
Vue.use(Loading).use(Search).use(NavBar)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')