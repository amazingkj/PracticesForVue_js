<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../src/components/ListItem.vue';
//import bus from '../src/utils/bus.js';
import ListMixin from '../src/mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
}

</script>

