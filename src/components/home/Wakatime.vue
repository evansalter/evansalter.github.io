<template>
  <div class="chart-container">
      <v-progress-circular indeterminate v-if="loading" :size="50" color="blue-grey lighten-4"></v-progress-circular>
      <canvas id="chart" :class="{hidden: loading}"></canvas>
  </div>
</template>

<script>
const axios = require('axios').default
const Chart = require('chart.js')

const corsProxyURL = 'https://cors-anywhere.herokuapp.com'
const wakatimeTopLanguagesURL = 'https://wakatime.com/share/@f088a47b-db50-441d-b317-5706454b2818/e888cbe5-de3f-4352-b3c7-cf3610080fc9.json'

export default {
  name: 'wakatime',
  data: () => {
    return {
      loading: true,
      chart: null
    }
  },
  mounted () {
    const url = `${corsProxyURL}/${wakatimeTopLanguagesURL}`
    axios.get(url).then(resp => {
      this.loading = false
      const labelsAndDatasets = labelsAndDatasetsFromRawData(resp.data.data)
      this.chart = new Chart('chart', {
        type: 'horizontalBar',
        data: {
          labels: labelsAndDatasets.labels,
          datasets: labelsAndDatasets.dataSets
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      })
    })
  }
}

function labelsAndDatasetsFromRawData (data) {
  const labels = []
  const dataPoints = []
  data.splice(0, 5).forEach(d => {
    labels.push(d.name)
    dataPoints.push(d.percent)
  })
  return {
    labels,
    dataSets: [{
      data: dataPoints
    }]
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  text-align: center;

  .progress-circular {
    margin: 50px 0;
  }
}

.hidden {
  display: none;
}
</style>
