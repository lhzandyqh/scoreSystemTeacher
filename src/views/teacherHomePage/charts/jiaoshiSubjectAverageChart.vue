<template>
  <div class="app-container">
    <el-row>
      <span style="font-size: 20px;font-weight: bolder">学科均分起势图</span>
    </el-row>
    <!--    <el-row style="padding-top: 20px">-->
    <!--      <el-select v-model="value" placeholder="请选择科目">-->
    <!--        <el-option-->
    <!--          v-for="item in options"-->
    <!--          :key="item.value"-->
    <!--          :label="item.label"-->
    <!--          :value="item.value"-->
    <!--        />-->
    <!--      </el-select>-->
    <!--    </el-row>-->
    <el-row style="padding-top: 20px">
      <div id="jiaoshiaverage" style="width:100%;height: 400px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'JiaoshiSubjectAverageChart',
  data() {
    return {
      value: '',
      // options: [{
      //   value: '选项1',
      //   label: '语文'
      // }, {
      //   value: '选项2',
      //   label: '数学'
      // }, {
      //   value: '选项3',
      //   label: '英语'
      // }, {
      //   value: '选项4',
      //   label: '物理'
      // }, {
      //   value: '选项5',
      //   label: '化学'
      // }, {
      //   value: '选项6',
      //   label: '生物'
      // }, {
      //   value: '选项7',
      //   label: '历史'
      // }, {
      //   value: '选项8',
      //   label: '政治'
      // }, {
      //   value: '选项9',
      //   label: '地理'
      // }],
      option: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['班平均分']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1班', '2班', '3班', '4班', '5班', '6班', '7班', '8班', '9班', '10班', '11班', '12班']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '班平均分',
            type: 'bar',
            data: [80, 79, 70, 82, 86, 77, 86, 92, 86, 70, 64, 83],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
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
      this.chart = echarts.init(document.getElementById('jiaoshiaverage'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
