<template>
  <div class="app-container">
    <el-row>
      <el-row style="padding-top: 20px;padding-left: 10%">
        <div id="sixComparison" style="width:700px;height: 400px;margin-left: 8%" />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getSubjectCompareSixRatesData } from '@/api/subjectCompareData'
export default {
  name: 'SixRatesComparisonChart',
  data() {
    return {
      id: window.localStorage.getItem('id'),
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['高分率', '优秀率', '良好率', '及格率', '低分率', '超均率']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: [] // '一班', '二班', '三班', '四班', '五班', '六班', '七班'
        },
        series: [
          {
            name: '高分率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            // data: [320, 302, 301, 334, 390, 330, 320]
            data: []
          },
          {
            name: '优秀率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            // data: [120, 132, 101, 134, 90, 230, 210]
            data: []
          },
          {
            name: '良好率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            // data: [220, 182, 191, 234, 290, 330, 310]
            data: []
          },
          {
            name: '及格率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            // data: [150, 212, 201, 154, 190, 330, 410]
            data: []
          },
          {
            name: '低分率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            // data: [820, 832, 901, 934, 1290, 1330, 1320]
            data: []
          },
          {
            name: '超均率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            // data: [320, 302, 301, 334, 390, 330, 320]
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.firstGetChartData()
    setTimeout(() => {
      this.initChart()
    }, 2000)
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('sixComparison'), 'macarons')
      this.chart.setOption(this.option)
    },
    firstGetChartData: function() {
      const prams = {
        userID: this.id
      }
      getSubjectCompareSixRatesData(prams).then(response => {
        console.log('科目对比图测试是否拿到六率数据')
        console.log(response.data)
        const classArray = []
        for (var i = 0; i < response.data.info.length; i++) {
          classArray.push(response.data.info[i].classid)
          this.option.series[0].data.push(response.data.info[i].highnumradio)
          this.option.series[1].data.push(response.data.info[i].excellentratio)
          this.option.series[2].data.push(response.data.info[i].goodratio)
          this.option.series[3].data.push(response.data.info[i].passratio)
          this.option.series[4].data.push(response.data.info[i].failratio)
          this.option.series[5].data.push(response.data.info[i].beyondradio)
        }
        console.log('检查输出的班级列表')
        console.log(classArray)
        this.option.yAxis.data = classArray
      })
    }
  }
}
</script>

<style scoped>

</style>
