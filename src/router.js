import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'Home',
            component: () =>
                import ('./views/mian/Home'),
            children: [{
                    path: 'left',
                    name: "Left",
                    component: () =>
                        import ('./views/nav/Left')
                },
                {
                    path: 'right',
                    component: () =>
                        import ('./views/nav/Right')
                }

            ]
        },
        {
            path: '/',
            redirect: "/home/left"
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ("./views/mian/About")
        },
        {
            path: '/My',
            name: 'my',
            component: () =>
                import ('./views/mian/My')
        },
        {
            path: '/hao',
            name: 'Hao',
            component: () =>
                import ('./views/mian/Hao')
        },
        {
            path: '/filmId/:id',
            name: 'filmId',
            component: () =>
                import ('./views/Qall')
        }


    ]
})