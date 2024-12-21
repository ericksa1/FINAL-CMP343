import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
