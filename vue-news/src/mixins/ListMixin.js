//mixin 
import bus from '../utils/bus.js'
import { store } from '../store/index.js'


export default {
   mounted() {
    bus.$emit('end:spinner'); 
   },
    // created() {
    //     bus.$emit('start:spinner');
    //     this.$store.dispatch('FETCH_LIST',this.$route.name)
    //   .then(() => {
    //       console.log('fetched');
    //       bus.$emit('end:spinner');
    //       //데이터를 다 받아오면 스피너 종료 
    //   }) 
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //   },
    //   render(createElement) {
    //     return createElement(ListView);

    //   }
}
