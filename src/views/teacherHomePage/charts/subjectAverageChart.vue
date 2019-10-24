<template>
  <div class="app-container">
    <el-row>
      <span style="font-size: 17px;">学科均分起势图</span>
    </el-row>
    <!--    <el-row style="padding-top: 20px" :gutter="20">-->
    <!--      <el-col :span="4">-->
    <!--        <el-select v-model="value" placeholder="请选择科目" @change="changeLocationValue">-->
    <!--          <el-option-->
    <!--            v-for="item in options"-->
    <!--            :key="item.value"-->
    <!--            :label="item.label"-->
    <!--            :value="item.value"-->
    <!--          />-->
    <!--        </el-select>-->
    <!--      </el-col>-->
    <!--      <el-col :span="4">-->
    <!--        <el-select v-model="value2" placeholder="请选择分值类别" @change="changeLocationValue">-->
    <!--          <el-option-->
    <!--            v-for="item in options2"-->
    <!--            :key="item.value"-->
    <!--            :label="item.label"-->
    <!--            :value="item.value"-->
    <!--          />-->
    <!--        </el-select>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <el-row style="padding-top: 20px">
      <div id="average" style="width:100%;height: 400px" />
    </el-row>
  </div>
</template>

<script>
import { getHomeClassAverageData } from '@/api/banzhurenGetData'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'SubjectAverageChart',
  data() {
    return {
      value: '',
      id: window.localStorage.getItem('id'),
      value2: '',
      chartData: [],
      options2: [
        {
          value: '选项1',
          label: '原始分'
        }, {
          value: '选项2',
          label: '占位分'
        }
      ],
      options: [{
        value: '选项1',
        label: '语文'
      }, {
        value: '选项2',
        label: '数学'
      }, {
        value: '选项3',
        label: '英语'
      }, {
        value: '选项4',
        label: '物理'
      }, {
        value: '选项5',
        label: '化学'
      }, {
        value: '选项6',
        label: '生物'
      }, {
        value: '选项7',
        label: '历史'
      }, {
        value: '选项8',
        label: '政治'
      }, {
        value: '选项9',
        label: '地理'
      }],
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
            data: []
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
            data: [],
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
    this.getChartData()
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('average'), 'macarons')
      this.chart.setOption(this.option)
    },
    compare: function(property) {
      return function(obj1, obj2) {
        return obj1[property] - obj2[property]
      }
    },
    getChartData: function() {
      const prams = {
        userID: this.id
      }
      getHomeClassAverageData(prams).then(response => {
        console.log('检查班主任首页的平均分数据')
        console.log(response.data.info)
        this.chartData = response.data.info.sort(this.compare('classname'))
        console.log('排序后')
        console.log(this.chartData)
        for (let i = 0; i < this.chartData.length - 1; i++) {
          this.option.xAxis[0].data.push(this.chartData[i].classname + '班')
          this.option.series[0].data.push(this.chartData[i].subjectClassAvg)
        }
        this.initChart()
      })
    }
  }
}
</script>

<style scoped>

</style>
