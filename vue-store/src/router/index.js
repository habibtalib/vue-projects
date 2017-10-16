import Vue from 'vue';
import Router from 'vue-router';

// Front End Components
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/pages/Front/Home';

// Customer Components
import Cart from '@/components/pages/Front/Cart';

// Admin Components
import Index from '@/components/pages/Admin/Index';
import New from '@/components/pages/Admin/New';
import Products from '@/components/pages/Admin/Products';
import Edit from '@/components/pages/Admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin/products',
      name: 'Admin',
      redirect: { name: 'Products' },
      // Parent routes component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '/',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
