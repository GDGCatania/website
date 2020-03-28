import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';
import homeRoutes from '@/modules/home/routes';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  homeRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to: Route, from: Route, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.name && from.name && to.name.indexOf(from.name) === 0) {
      return undefined;
    }

    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
