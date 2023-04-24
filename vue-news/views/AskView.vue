<template>
      <div>
        <p v-for="item in fetchedAsk">
       <!-- <a v-bind:href="item.url">{{item.title}}</a> -->
        <router-link v-bind:to="`/item/${item.id}`">
            {{item.title}}
        </router-link>
         <small>{{item.time_ago}} by {{item.user}}</small>
          </p>
      </div>
  
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
//        ...mapGetters([
//            'fetchedAsk'
//        ])
//객체가 아니라 배열 표기법으로 연결하면 
//객체 표기법 {} 과 배열 표기법 []

//       #2
       ...mapState({
        fetchedAsk: state => state.ask
      })
//       #1         
//       ask() {
//        return this.$store.state.ask;
//       }
    },
    created(){
         this.$store.dispatch('FETCH_ASK');
       
    },
    //beforeMount,
    //mounted

}
</script>

<style>

</style>