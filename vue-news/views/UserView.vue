<template>
  <div>
    <user-profile :info="userInfo"></user-profile>
    <div slot="username">{{ userInfo.id }}</div>
    <span slot="time">{{ 'Joined ' + userInfo.created}}, </span>
    <span slot="karma">{{ userInfo.karma }}</span>
  </div>
</template>

<script>
import UserProfile from '../src/components/UserProfile.vue';

export default {
  components: { 
    UserProfile,
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
       // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
       this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>