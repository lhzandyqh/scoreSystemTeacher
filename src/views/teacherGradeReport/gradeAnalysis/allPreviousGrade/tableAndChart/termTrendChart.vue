<template>
  <div class="app-container">
    <el-row>
      <el-row style="padding-top: 20px">
        <div id="total" style="height: 300px" />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getGradeLiciAverageData } from '@/api/banzhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'TotalGradeChangeTrend',
  data() {
    return {
      averageData: [],
      id: window.localStorage.getItem('id'),
      option: {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product'],
          source: [
            // { product: '平均分', '第一次月考': 43.3, '第二次月考': 85.8, '第三次月考': 93.7, '第四次月考': 78.4 },
            // { product: '标准差', '第一次月考': 83.1, '第二次月考': 73.4, '第三次月考': 55.1, '第四次月考': 56 }
            { product: '平均分' },
            { product: '标准差' }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          // { type: 'bar' },
          // { type: 'bar' },
          // { type: 'bar' },
          // { type: 'bar' }
        ]
      }
    }
  },
  mounted() {
    this.getData()
    setTimeout(() => {
      this.initChart()
    }, 1000)
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('total'), 'macarons')
      this.chart.setOption(this.option)
    },
    getData: function() {
      const prams = {
        userID: this.id
      }
      getGradeLiciAverageData(prams).then(response => {
        console.log('测试年级主任在图里面的均分数据')
        console.log(response.data)
        this.averageData = response.data.info
        for (let i = 0; i < this.averageData.length; i++) {
          this.option.dataset.dimensions.push(this.averageData[i].examname)
          this.option.dataset.source[0][this.averageData[i].examname] = this.averageData[i].scoreAvg
          this.option.dataset.source[1][this.averageData[i].examname] = this.averageData[i].StandardDiviation
          this.option.series.push({
            type: 'bar'
          })
        }
        console.log('检查数据')
        console.log(this.option.dataset.source[0])
      })
    }
  }
}
</script>

<style scoped>

</style>
