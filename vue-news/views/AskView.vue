<template>
      <div>
        <list-item></list-item>
      </div>
</template>

<script>
import ListItem from '../src/components/ListItem.vue';
import ListMixin from '../src/mixins/ListMixin.js';
//import bus from '../utils/bus.js';

export default {
    components: {
    ListItem,
   },
  //  mounted() {
  //   bus.$emit('end:spinner'); 
  //  }
    mixins: [ListMixin]
}

</script>

