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
import { getSubjectCompareSixRatesData } from '@/api/nianjizhurenGetData'
export default {
  name: 'SixRatesComparisonChart',
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
          data: []
        },
        series: [
          {
            name: '高分率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideLeft'
              }
            },
            data: []
          },
          {
            name: '优秀率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideLeft'
              }
            },
            data: []
          },
          {
            name: '良好率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideLeft'
              }
            },
            data: []
          },
          {
            name: '及格率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideLeft'
              }
            },
            data: []
          },
          {
            name: '低分率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideLeft'
              }
            },
            data: []
          },
          {
            name: '超均率',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideLeft'
              }
            },
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.firstGetChartData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('sixComparison'), 'macarons')
      this.chart.setOption(this.option)
    },
    firstGetChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getSubjectCompareSixRatesData(prams).then(response => {
        console.log('科目对比图tutut测试是否拿到六率数据')
        console.log(response.data)
        const classArray = []
        console.log('看一下能不能排序')
        console.log(response.data.info.sort(this.compare('classid')))
        for (var i = 0; i < response.data.info.length; i++) {
          classArray.push(response.data.info[i].classid)
        }
        console.log('检查输出的班级列表')
        console.log(classArray)
        this.option.yAxis.data = classArray
        for (var k = 0; k < response.data.info.length; k++) {
          this.option.series[0].data.push(response.data.info[k].highnumradio)
          this.option.series[1].data.push(response.data.info[k].excellentratio)
          this.option.series[2].data.push(response.data.info[k].goodratio)
          this.option.series[3].data.push(response.data.info[k].passratio)
          this.option.series[4].data.push(response.data.info[k].failratio)
          this.option.series[5].data.push(response.data.info[k].beyondradio)
        }
        setTimeout(() => {
          this.initChart()
        }, 2000)
      })
    },
    compare: function(property) {
      return function(a, b) {
        var value1 = a[property]
        var value2 = b[property]
        return value2 - value1
      }
    }
  }
}
</script>

<style scoped>

</style>
