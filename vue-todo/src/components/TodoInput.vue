<template>
  <div class= "inputBox" shadow>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"> 
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-square-plus addBtn"></i>
    </span>
      <AlertModal  v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고!
        <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i>
        </h3>           
       <div slot="body">무언가를 입력하세요</div>
       </AlertModal >
  </div>
</template>

<script>
import AlertModal  from './common/AlertModal.vue'
export default {
  data() {
    return {
        newTodoItem: "",
        showModal: false
    }
  },
  methods: {
    addTodo(){
      if (this.newTodoItem !==''){
        // this.$emit('이벤트 이름',인지1,인자2, ...);
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        console.log(text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    AlertModal 
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;

}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}

</style>