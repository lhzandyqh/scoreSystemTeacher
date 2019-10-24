<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <div id="sixrate" style="width:1200px;height: 400px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getSubjectSixRatesData } from '@/api/banzhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'SixRateClassChart',
  props: {
    subject: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
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
            interval: 0.05,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '比率',
            min: 0,
            max: 1,
            interval: 0.05,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '班比率',
            type: 'bar',
            data: []
          },
          {
            name: '校比率',
            type: 'line',
            yAxisIndex: 1,
            data: []
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
      this.chart = echarts.init(document.getElementById('sixrate'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getSubjectSixRatesData(prams).then(response => {
        console.log('班主任测试班校对比图')
        console.log(response.data.info)
        this.option.series[0].data.push(response.data.info[1].highnumradio)
        this.option.series[0].data.push(response.data.info[1].excellentratio)
        this.option.series[0].data.push(response.data.info[1].goodratio)
        this.option.series[0].data.push(response.data.info[1].passratio)
        this.option.series[0].data.push(response.data.info[1].failratio)
        this.option.series[0].data.push(response.data.info[1].beyondradio)
        this.option.series[1].data.push(response.data.info[0].highnumradio)
        this.option.series[1].data.push(response.data.info[0].excellentratio)
        this.option.series[1].data.push(response.data.info[0].goodratio)
        this.option.series[1].data.push(response.data.info[0].passratio)
        this.option.series[1].data.push(response.data.info[0].failratio)
        this.option.series[1].data.push(response.data.info[0].beyondradio)
        setTimeout(() => {
          this.initChart()
        }, 1000)
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
