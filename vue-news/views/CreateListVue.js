import ListView from './ListView.vue'
import bus from '../src/utils/bus.js'

export default function createListView(name) { //기존 컴포넌트 위에 새로운 컴포넌트를 만드는 것 - 하이오더컴포넌트 route 연동 참고
    return {
        //재사용할 인스턴트(컴포넌트) 옵션들이 들어갈 자리 
    //스피너 시작될 때,사라질 때 지정하기. 
      name,
      created() {
        bus.$emit('start:spinner');
        This.$store.dispatch('FETCH_NEWS')
      .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
          //데이터를 다 받아오면 스피너 종료 
      }) 
      .catch((error) => {
        console.log(error);
      });
      },
      render(createElement) {
        return createElement(ListView);

      }
  }
}