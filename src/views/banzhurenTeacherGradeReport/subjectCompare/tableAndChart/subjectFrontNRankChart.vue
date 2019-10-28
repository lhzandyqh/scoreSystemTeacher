<template>
  <div class="app-container">
    <el-row>
      <el-row style="padding-top: 20px;padding-left: 10%">
        <div id="sixComparisonchart" style="width:700px;height: 400px;margin-left: 8%" />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getSubjectCompareFrontNData } from '@/api/banzhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'SubjectFrontNRankChart',
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
          data: ['前100名', '前200名', '前300名', '前400名', '前500名']
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
          data: ['一班', '二班', '三班', '四班', '五班', '六班', '七班']
        },
        series: [
          {
            name: '前100名',
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
            name: '前200名',
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
            name: '前300名',
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
            name: '前400名',
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
            name: '前500名',
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
    setTimeout(() => {
      this.initChart()
    }, 2000)
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('sixComparisonchart'), 'macarons')
      this.chart.setOption(this.option)
    },
    firstGetChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getSubjectCompareFrontNData(prams).then(response => {
        console.log('班主任科目对比图测试是否拿到前N数据')
        console.log(response.data)
        const classArray = []
        console.log('看一下能不能排序')
        console.log(response.data.info.sort(this.compare('classid')))
        for (var i = 0; i < response.data.info.length; i++) {
          classArray.push(response.data.info[i].classid)
          this.option.series[0].data.push(response.data.info[i].oneHunderdnum)
          this.option.series[1].data.push(response.data.info[i].twoHundrednum)
          this.option.series[2].data.push(response.data.info[i].threeHundernum)
          this.option.series[3].data.push(response.data.info[i].fourHundernum)
          this.option.series[4].data.push(response.data.info[i].othernum)
        }
        console.log('检查输出的班级列表')
        console.log(classArray)
        this.option.yAxis.data = classArray
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
