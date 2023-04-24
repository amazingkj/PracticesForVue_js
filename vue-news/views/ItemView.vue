<template>
  <div>
    <section>
  
        <div class="user-container">
        <font-awesome-icon icon="fa-solid fa-user" />
        <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
        <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        </div>
        <div class="time">{{ fetchedItem.time_ago }}</div>
     
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
//        idInfo() {
//            return this.$store.state.id;
//        }

        ...mapGetters(['fetchedItem']),
   
    },
    created() {
        console.log(this.$route.params.id);
        const item = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', item);
    },
}
</script>

<style scoped>
section {
  padding: 1rem;
}
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>