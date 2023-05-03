<template>
    <div>
    <canvas ref="barChart" id="barChart" width="400" height="400">
    </canvas>
    </div>
</template>

<script>

export default {
    props: ['propsdata'],
  mounted() {
  new this.$_Chart(this.$refs.barChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: this.propsdata[0].data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
    onclick: function() {
        this.$emit('refresh:chart')
    }
  });

  }

}
</script>

<style>

</style>