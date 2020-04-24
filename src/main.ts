import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);
Vue.config.productionTip = false;

// ルート定義
const routes: RouteConfig[] = [
  { path: '/', component: Home },
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
