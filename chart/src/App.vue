<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
    <line-chart></line-chart>
  
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
//import axios from 'axios'

export default {
  //컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartDataSet: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }],
    }
  },
  methods: {
    refreshChart() {
      this.chartDataSet[0].data = [10, 10, 10, 10, 10, 10];

    }
  },
  created(){
  //  axios.get('charts/line/1').then(response => this.chartDataSet = response.data)
  //  .catch(error => console.log(error))
  }
}
</script>

<style>

</style>