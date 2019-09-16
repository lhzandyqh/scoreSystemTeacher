<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <div id="class" style="width:100%;height: 400px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OneScoreChart',
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: this.getXdata()
        },
        legend: {
          data: ['人数']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '人数',
          data: [2, 68, 57, 78, 45, 34, 67, 68, 57, 78, 85, 84, 98, 88, 87, 78, 95, 94, 89, 68, 57, 48, 45, 34, 5],
          type: 'bar'
        }]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('class'), 'macarons')
      this.chart.setOption(this.option)
    },
    getXdata: function() {
      var xAxisData = []
      var i = 0
      while (i < 750) {
        xAxisData.push(i)
        i = i + 30
      }
      return xAxisData
    },
    getYdata: function() {
      var data = []
      var i = 0
      while (i < 24) {
        data.push(parseInt(Math.random() * 10) * 10)
        i++
      }
      return data
    }
  }
}
</script>

<style scoped>

</style>
