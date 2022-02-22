import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../components/Login';
import HomeView from '../components/Home';
import RegisterView from '../components/Register';
import DashboardView from '../components/Dashboard';

Vue.use(Router)

export default new Router({
    mode: 'history',
    //base: process.env.BASE_URL,
    routes: [
        {path: '/', component: HomeView},
        {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    }
]
})

