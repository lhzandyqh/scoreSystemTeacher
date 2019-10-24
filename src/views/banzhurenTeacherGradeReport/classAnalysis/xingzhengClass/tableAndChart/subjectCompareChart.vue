<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <div id="sub" style="width:1200px;height: 400px;" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getClassCompareSchoolAverageData } from '@/api/banzhurenGetData'
export default {
  name: 'SubjectCompareChart',
  data() {
    return {
      id: window.localStorage.getItem('id'),
      classAverage: [],
      schoolAverage: [],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['班平均分', '校平均分']
        },
        xAxis: [
          {
            type: 'category',
            data: ['语文', '数学', '英语', '物理', '化学', '生物', '地理', '历史', '政治'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '班平均分',
            type: 'bar',
            data: [83, 79, 90, 64, 87, 77, 75.6, 82.2, 87]
          },
          {
            name: '校平均分',
            type: 'line',
            yAxisIndex: 1,
            data: [77, 70, 80, 55, 73, 72, 83, 84, 80]
          }
        ]
      }
    }
  },
  mounted() {
    this.getChartData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('sub'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id
      }
      getClassCompareSchoolAverageData(prams).then(response => {
        console.log('测试班主任平均分班校对比')
        console.log(response.data)
        this.schoolAverage.push(response.data.info[0])
        this.classAverage.push(response.data.info[1])
        for (const key in this.classAverage[0]) {
          switch (key) {
            case 'yuwenclassscoreAvg':
              this.option.series[0].data[0] = this.classAverage[0][key]
              break
            case 'shuxueclassscoreAvg':
              this.option.series[0].data[1] = this.classAverage[0][key]
              break
            case 'yingyuclassscoreAvg':
              this.option.series[0].data[2] = this.classAverage[0][key]
              break
            case 'wuliclassscoreAvg':
              this.option.series[0].data[3] = this.classAverage[0][key]
              break
            case 'huaxueclassscoreAvg':
              this.option.series[0].data[4] = this.classAverage[0][key]
              break
            case 'shengwuclassscoreAvg':
              this.option.series[0].data[5] = this.classAverage[0][key]
              break
            case 'diliclassscoreAvg':
              this.option.series[0].data[6] = this.classAverage[0][key]
              break
            case 'lishiclassscoreAvg':
              this.option.series[0].data[7] = this.classAverage[0][key]
              break
            case 'zhengzhiclassscoreAvg':
              this.option.series[0].data[8] = this.classAverage[0][key]
              break
          }
        }
        for (const key in this.schoolAverage[0]) {
          switch (key) {
            case 'schoolYuwenAvg':
              this.option.series[1].data[0] = this.schoolAverage[0][key]
              break
            case 'schoolShuxueAvg':
              this.option.series[1].data[1] = this.schoolAverage[0][key]
              break
            case 'schoolYingyuAvg':
              this.option.series[1].data[2] = this.schoolAverage[0][key]
              break
            case 'schoolWuliAvg':
              this.option.series[1].data[3] = this.schoolAverage[0][key]
              break
            case 'schoolHuaxueAvg':
              this.option.series[1].data[4] = this.schoolAverage[0][key]
              break
            case 'schoolShengwuAvg':
              this.option.series[1].data[5] = this.schoolAverage[0][key]
              break
            case 'schoolDiliAvg':
              this.option.series[1].data[6] = this.schoolAverage[0][key]
              break
            case 'schoolLishiAvg':
              this.option.series[1].data[7] = this.schoolAverage[0][key]
              break
            case 'schoolZhengzhiAvg':
              this.option.series[1].data[8] = this.schoolAverage[0][key]
              break
          }
        }
        setTimeout(() => {
          this.initChart()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>
  #sub{
    width: 100%;
  }

</style>
