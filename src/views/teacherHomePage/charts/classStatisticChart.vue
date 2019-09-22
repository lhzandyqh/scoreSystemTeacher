<template>
  <div class="app-container">
    <el-row>
      <span style="font-size: 20px;font-weight: bolder">分档统计图</span>
    </el-row>
    <el-row style="padding-top: 20px">
      <div id="class" style="width:100%;height: 400px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'ClassStatisticChart',
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item'
        },
        xAxis: {
          type: 'category',
          data: ['0-30', '30-60', '60-90', '90-120', '120-150', '150-180', '180-210', '210-240', '240-270', '270-300', '300-330', '330-360',
            '390-420', '420-450', '450-480', '480-510', '510-540', '540-570', '600-630', '630-660', '690-720'
          ],
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        // legend: {
        //   data: ['人数']
        // },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '人数',
          data: [2, 68, 57, 78, 45, 34, 67, 68, 57, 78, 85, 84, 98, 88, 87, 78, 95, 94, 89, 68, 57],
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
