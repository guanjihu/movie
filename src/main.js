import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import 'lib-flexible'
import { Loading, Search, NavBar, IndexBar, IndexAnchor } from 'vant'
Vue.use(Loading).use(Search).use(NavBar)
Vue.use(IndexBar).use(IndexAnchor);
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')