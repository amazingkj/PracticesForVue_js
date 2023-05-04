<template>
   <div>
        <div class="user-container">
        <font-awesome-icon icon="fa-solid fa-user" />
        <i class="fa-solid fa-user"></i>
        </div>
        
        <div class="user-description">
          <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          
          <!-- template v-if 대신 slot 사용, 
          ItemView > info.user / UserView > info.id -->

         <div class="time">
          <slot name="time">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          <slot name="karma"></slot>
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </div> 
         </div>
     </div>
</template>

<script>
export default {
  props: {
    info: Object
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