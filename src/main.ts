import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import App from './App.vue';

Vue.use(Router);
Vue.config.productionTip = false;

// コンポーネント
const Home = Vue.extend({
  render() {
    return this.$createElement('h2', 'home');
  },
});
const About = Vue.extend({
  render() {
    return this.$createElement('h2', 'About');
  },
});

// ルート定義
const routes: RouteConfig[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];
const router = new Router({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
