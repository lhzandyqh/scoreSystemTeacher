<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <div id="sixrate" style="width:1200px;height: 400px;margin-left: 11%" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getSubjectCompareSchoolData } from '@/api/subjectAnalysisData'
export default {
  name: 'SixRateClassChart',
  props: {
    allGradeSixRatesData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      sixRatesData: [],
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
          data: ['班比率', '校平均比率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['高分率', '优秀率', '良好率', '及格率', '低分率', '超均率'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '比率',
            min: 0,
            max: 1,
            interval: 0.1,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '比率',
            min: 0,
            max: 1,
            interval: 0.1,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          // {
          //   name: '班比率',
          //   type: 'bar',
          //   data: [83, 79, 90, 64, 87, 77]
          // },
          // {
          //   name: '校平均比率',
          //   type: 'line',
          //   yAxisIndex: 1,
          //   data: [77, 70, 80, 55, 73, 72]
          // }
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
    getData: function() {
      const prams = {
        userID: this.id
      }
      getSubjectCompareSchoolData(prams).then(response => {
        console.log('测试在图里面的均分数据')
        console.log(response.data)
        this.sixRatesData = response.data.info
        for (let i = 0; i < this.sixRatesData.length; i++) {
          this.option.series.push({
            name: this.sixRatesData[i].classid,
            type: 'bar',
            data: [
              this.sixRatesData[i].highnumradio,
              this.sixRatesData[i].excellentratio,
              this.sixRatesData[i].goodratio,
              this.sixRatesData[i].passratio,
              this.sixRatesData[i].failratio,
              this.sixRatesData[i].beyondradio
            ]
          })
        }
      })
    },
    pushData: function() {
      console.log('我要开始作了')
      for (let i = 0; i < this.allGradeSixRatesData.length; i++) {
        this.option.series.push({
          name: this.allGradeSixRatesData[i].classid,
          type: 'bar',
          data: [
            this.allGradeSixRatesData[i].highnumradio,
            this.allGradeSixRatesData[i].excellentratio,
            this.allGradeSixRatesData[i].goodratio,
            this.allGradeSixRatesData[i].passratio,
            this.allGradeSixRatesData[i].failratio,
            this.allGradeSixRatesData[i].beyondradio
          ]
        })
      }
      console.log()
    },
    initChart: function() {
      this.chart = echarts.init(document.getElementById('sixrate'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
  #sub{
    width: 100%;
  }

</style>
