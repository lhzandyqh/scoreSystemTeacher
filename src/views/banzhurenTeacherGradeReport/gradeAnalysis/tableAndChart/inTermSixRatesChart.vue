<template>
  <div class="app-container">
    <el-row>
      <el-row>
        <div id="six" style="height: 300px" />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getLiciSixRatesData } from '@/api/banzhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'InTermSixRatesChart',
  data() {
    return {
      sixRatesData: [],
      id: window.localStorage.getItem('id'),
      option: {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product'],
          source: [
            { product: '高分率' },
            { product: '优秀率' },
            { product: '良好率' },
            { product: '及格率' },
            { product: '低分率' },
            { product: '超均率' }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: []
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
      this.chart = echarts.init(document.getElementById('six'), 'macarons')
      this.chart.setOption(this.option)
    },
    getData: function() {
      const prams = {
        userID: this.id
      }
      getLiciSixRatesData(prams).then(response => {
        console.log('测试班主任在年级里面的六率数据')
        console.log(response.data)
        this.sixRatesData = response.data.info
        for (let i = 0; i < this.sixRatesData.length; i++) {
          this.option.dataset.dimensions.push(this.sixRatesData[i].examtype)
          this.option.dataset.source[0][this.sixRatesData[i].examtype] = this.sixRatesData[i].highnumradio
          this.option.dataset.source[1][this.sixRatesData[i].examtype] = this.sixRatesData[i].excellentratio
          this.option.dataset.source[2][this.sixRatesData[i].examtype] = this.sixRatesData[i].goodratio
          this.option.dataset.source[3][this.sixRatesData[i].examtype] = this.sixRatesData[i].passratio
          this.option.dataset.source[4][this.sixRatesData[i].examtype] = this.sixRatesData[i].failratio
          this.option.dataset.source[5][this.sixRatesData[i].examtype] = this.sixRatesData[i].beyondradio
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
