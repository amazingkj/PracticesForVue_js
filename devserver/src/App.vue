<template>
  <div id="app">
    <FirstSelect></FirstSelect> 
  </div>
</template>

<script>
import FirstSelect from './components/FirstSelect.vue'

export default {
components: { 
    FirstSelect
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;

}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}

</style>