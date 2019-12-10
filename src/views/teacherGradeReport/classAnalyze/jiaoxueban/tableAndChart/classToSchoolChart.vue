<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <div id="classtoschool" style="width:1000px;height: 400px;margin-left: 8%" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getClassAnalysisJiaoxueSixRatesData } from '@/api/nianjizhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'ClassToSchoolChart',
  props: {
    subject: {
      type: String,
      required: true
    },
    classname: {
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
          data: ['本班六率', '本校平均六率']
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
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '本班六率',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7]
          },
          {
            name: '本校平均六率',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7]
          }
        ]
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.getChartData()
    }, 1000)
    // this.getChartData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('classtoschool'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject,
        classname: this.classname
      }
      getClassAnalysisJiaoxueSixRatesData(prams).then(response => {
        console.log('年级组长测试教学班科校对比')
        console.log(response.data)
        this.option.series[0].data[0] = response.data.info[1].highnumradio
        this.option.series[0].data[1] = response.data.info[1].excellentratio
        this.option.series[0].data[2] = response.data.info[1].goodratio
        this.option.series[0].data[3] = response.data.info[1].passratio
        this.option.series[0].data[4] = response.data.info[1].failratio
        this.option.series[0].data[5] = response.data.info[1].beyondradio
        this.option.series[1].data[0] = response.data.info[0].highnumradio
        this.option.series[1].data[1] = response.data.info[0].excellentratio
        this.option.series[1].data[2] = response.data.info[0].goodratio
        this.option.series[1].data[3] = response.data.info[0].passratio
        this.option.series[1].data[4] = response.data.info[0].failratio
        this.option.series[1].data[5] = response.data.info[0].beyondradio
        setTimeout(() => {
          this.initChart()
        }, 1000)
      })
    }
  }
}
</script>

<style scoped>

</style>
