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
export default {
  name: 'SixRateClassChart',
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
          data: ['班优秀率', '校优秀率']
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
            name: '比率',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '比率',
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
            name: '班优秀率',
            type: 'bar',
            data: [83, 79, 90, 64, 87, 77, 75.6, 82.2, 87]
          },
          {
            name: '校优秀率',
            type: 'line',
            yAxisIndex: 1,
            data: [77, 70, 80, 55, 73, 72, 83, 84, 80]
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
