<template>
  <div>
    <!-- ul>li*3 -->
    <transitionGroup tag="ul" name="list">
      <li v-for="(todoItem,index) in this.storedToDoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fa-regular fa-square-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
         v-on:click="toggleComplete({todoItem, index})"></i>
      <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span> 
      <span class="removeBtn" v-on:click="removeTodo({todoItem, index})"> 
        <i class="fa-regular fa-trash-can"></i>
      </span>
      </li>
    </transitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
  },
  computed: {
   ...mapGetters(['storedToDoItems']) 
   //...mapGetters({
   //     todoItems:'storedTodoItems'
   //     })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

</style>