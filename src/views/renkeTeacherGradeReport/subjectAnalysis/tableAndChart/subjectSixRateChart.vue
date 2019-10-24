<template>
  <div class="app-container">
    <el-row>
      <el-row>
        <div id="xingzhengduibi" style="width:1200px;height: 400px;margin-left: 8%" />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getInTermSuccessiveSixRatesData } from '@/api/subjectAnalysisData'
require('echarts/theme/macarons')
export default {
  name: 'SubjectSixRateChart',
  props: {
    classValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      averageData: [],
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
    setTimeout(() => {
      this.getData()
    }, 500)
    setTimeout(() => {
      this.initChart()
    }, 1000)
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('xingzhengduibi'), 'macarons')
      this.chart.setOption(this.option)
    },
    getData: function() {
      const prams = {
        userID: this.id,
        classname: this.classValue
      }
      getInTermSuccessiveSixRatesData(prams).then(response => {
        console.log('测试在科目分析历次图里面的均分数据')
        console.log(response.data)
        this.averageData = response.data.info
        for (let i = 0; i < this.averageData.length; i++) {
          this.option.dataset.dimensions.push(this.averageData[i].examtype)
          this.option.dataset.source[0][this.averageData[i].examtype] = this.averageData[i].highnumradio
          this.option.dataset.source[1][this.averageData[i].examtype] = this.averageData[i].excellentratio
          this.option.dataset.source[2][this.averageData[i].examtype] = this.averageData[i].goodratio
          this.option.dataset.source[3][this.averageData[i].examtype] = this.averageData[i].passratio
          this.option.dataset.source[4][this.averageData[i].examtype] = this.averageData[i].failratio
          this.option.dataset.source[5][this.averageData[i].examtype] = this.averageData[i].beyondradio
          this.option.series.push({
            type: 'bar'
          })
        }
        console.log('检查数据')
        console.log(this.averageData)
        console.log(this.option.dataset.source[0])
      })
    },
    updateChart: function() {
      this.option.dataset.source = []
      this.option.series = []
      this.option.dataset.source.push({ product: '高分率' })
      this.option.dataset.source.push({ product: '优秀率' })
      this.option.dataset.source.push({ product: '良好率' })
      this.option.dataset.source.push({ product: '及格率' })
      this.option.dataset.source.push({ product: '低分率' })
      this.option.dataset.source.push({ product: '超均率' })
      setTimeout(() => {
        this.getData()
      }, 500)
      setTimeout(() => {
        this.initChart()
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
