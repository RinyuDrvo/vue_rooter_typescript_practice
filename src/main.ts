import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Users from './components/Users.vue';

Vue.use(Router);
Vue.config.productionTip = false;

// ルート定義
const routes: RouteConfig[] = [
  { path: '/', component: Home },
  {
    name: 'users',
    path: '/users/:id',
    component: Users,
  },
  { path: '/about', component: About },
];
const router = new Router({
  mode: 'history',
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
