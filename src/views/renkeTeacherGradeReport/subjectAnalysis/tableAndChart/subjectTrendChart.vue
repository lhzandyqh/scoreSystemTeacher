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
import { getInTermSuccessiveGradeAverageData } from '@/api/subjectAnalysisData'
require('echarts/theme/macarons')
export default {
  name: 'SubjectTrendChart',
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
            { product: '平均分' },
            { product: '标准差' }
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
      this.chart = echarts.init(document.getElementById('xztrend'), 'macarons')
      this.chart.setOption(this.option)
    },
    getData: function() {
      const prams = {
        userID: this.id,
        classname: this.classValue
      }
      getInTermSuccessiveGradeAverageData(prams).then(response => {
        console.log('测试在科目分析历次图里面的均分数据')
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
        console.log(this.averageData)
        console.log(this.option.dataset.source[0])
      })
    },
    updateChart: function() {
      this.option.dataset.source = []
      this.option.series = []
      this.option.dataset.source.push({ product: '平均分' })
      this.option.dataset.source.push({ product: '标准差' })
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
