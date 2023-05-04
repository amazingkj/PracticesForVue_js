import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListVue.js';

//import {} from '../'
Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
    routes: [
      {
        path:'/',
        redirect:'/news',
        
      },
      {
        path:'/news',
        name:'news',
        //component: createListView('NewsView')
        component: NewsView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST',to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            //데이터를 다 받아오면 스피너 종료 
           }) 
          .catch((error) => {
           console.log(error);
           });
          
        }
      },
      {
        path:'/ask',
        name:'ask',
        //component: createListView('AskView')
        component: AskView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST',to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
           }) 
          .catch((error) => {
           console.log(error);
           });
          },
      },
      {
        path:'/jobs',
        name:'jobs',
        //component: createListView('JobsView')
        component: JobsView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST',to.name)
          .then(() => next()) 
          .catch((error) => {
           console.log(error);
           });
          },
      },
      {
        path:'/user/:id',
        component:UserView,
      },
      {
        path:'/item/:id',
        component:ItemView,
      },
    ]
  });

