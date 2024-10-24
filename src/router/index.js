import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../core/layouts/DefaultLayout.vue';
import Catalog from '../modules/catalog/views/CatalogView.vue'
import ProductDetailPage from '../modules/product/views/ProductDetailPage.vue';


const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
        {
            path: "/",
            name: "catalog",
            component: Catalog,
        },
        ]
  },
  {
    path: "/product/:id",
    component: DefaultLayout,
    children: [
    {
        path: "/product/:id",
        name: "product_detail",
        component: ProductDetailPage,
        props: true,
    },
    ]
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;