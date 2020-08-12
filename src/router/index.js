import Vue from 'vue';
import VueRouter from 'vue-router';
import Board from '../views/Board..vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Board',
    component: Board,
  },
  {
    path: '/card',
    name: 'Card',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Card.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
