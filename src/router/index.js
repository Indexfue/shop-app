import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../core/layouts/DefaultLayout.vue';
import Catalog from '../modules/catalog/views/CatalogView.vue'

const routes = [{
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "catalog",
        component: Catalog,
      },
    ]
  }];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;