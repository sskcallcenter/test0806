import Vue from 'vue'
import Router from 'vue-router'

import UserDashboard from './components/User/DashboardComponent'
import UserAccount from './components/User/AccountComponent'
import UserAdmin from './components/User/AdminComponent'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/user',
            redirect: '/user/dashboard'
        },
        {
            path: '/user/dashboard',
            name: 'user-dashboard',
            component: UserDashboard,
        },
        {
            path: '/user/account',
            name: 'user-account',
            component: UserAccount,
        },
        {
            path: '/user/admin',
            name: 'user-admin',
            component: UserAdmin,
        },
    ],
})
