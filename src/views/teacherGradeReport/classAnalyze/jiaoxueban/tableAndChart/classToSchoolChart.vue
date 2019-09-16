<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <div id="classtoschool" style="width:1000px;height: 400px;margin-left: 8%" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'ClassToSchoolChart',
  data() {
    return {
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
            max: 100,
            interval: 10,
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
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('classtoschool'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
