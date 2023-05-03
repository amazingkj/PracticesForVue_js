<template>
<div>
  <canvas ref="myChart" id="myChart" width="400" height="400">

</canvas>
</div>
   
</template>

<script>

export default {
  mounted() {
  new this.$_Chart(this.$refs.myChart, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  }

}
</script>

<style>

</style>