<template>
  <div>
  <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by 
        <!--<router-link v-bind:to="'/user/'+ item.user">{{ item.user }}-->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}
        </router-link></small>
  </p>
  </div>
</template>

<script>
//import { fetchNewsList } from '../src/api/index.js';
//import { FETCH_NEWS } from '../src/store/actions.js';
export default {
created() {
  this.$store.dispatch('FETCH_NEWS');
  //this.$store.dispatch(FETCH_NEWS);
}
}
</script>

<style>

</style>