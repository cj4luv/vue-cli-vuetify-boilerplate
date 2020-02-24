import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';

import LoginLayout from '@layouts/LoginLayout';
import DefaultLayout from '@layouts/DefaultLayout';

import { Home } from '@views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/home',
        meta: { requiresAuth: true },
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    component: LoginLayout,
    meta: { requiresAuth: false }
  },
];

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const auth = Boolean(Vue.$cookies.get('auth-inven'));

    console.log('auth', auth);

    if (!auth) {
      next({
        path: '/login',
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
