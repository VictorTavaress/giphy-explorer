import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/PageHome.vue') },
      { path: 'favorites', name: 'favorites', component: () => import('pages/PageFavorites.vue') },
      { path: 'categories', name: 'categories', component: () => import('pages/PageCategories.vue') },
      { path: 'about', name: 'about', component: () => import('pages/PageAbout.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;