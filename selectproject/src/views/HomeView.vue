<template>
  <div class="home">    
    <img alt="Vue logo" src="../assets/logo.png">
    <FirstSelect></FirstSelect>
    <SelectHeader></SelectHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import SelectHeader from '@/components/SelectHeader.vue'
import FirstSelect from '@/components/FirstSelect.vue'

export default {
  name: 'HomeView',
  components: {
    SelectHeader,
    FirstSelect
  }
}
</script>
