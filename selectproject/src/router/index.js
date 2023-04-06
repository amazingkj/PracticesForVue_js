import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AddView from '../views/AddView.vue';
import ListView from '../views/ListView.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode:'history',
 routes:[
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/add',
    component: AddView,
  },
  {
    path: '/list',
    component: ListView,
  },
]

});
