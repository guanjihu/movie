import Vue from 'vue'
import Router from 'vue-router'
import Left from './views/nav/Left.vue'
import Right from './views/nav/Right.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: Left
        },
        {
            path: '/left',
            name: 'Left',
            component: Left
        },
        {
            path: '/right',
            name: 'Right',
            component: Right
        },
    ]
})