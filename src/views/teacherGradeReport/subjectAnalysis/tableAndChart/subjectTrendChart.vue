<template>
  <div class="app-container">
    <el-row>
      <el-row style="padding-top: 20px">
        <div id="xztrend" style="width:500px;height: 300px;margin-left: 13%" />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'SubjectTrendChart',
  data() {
    return {
      option: {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', '第一次月考', '第二次月考', '第三次月考', '第四次月考'],
          source: [
            { product: '平均分', '第一次月考': 43.3, '第二次月考': 85.8, '第三次月考': 93.7, '第四次月考': 78.4 },
            { product: '标准差', '第一次月考': 83.1, '第二次月考': 73.4, '第三次月考': 55.1, '第四次月考': 56 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('xztrend'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
