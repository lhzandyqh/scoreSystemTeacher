<template>
  <div class="app-container">
    <div id="student" style="width:1200px;height: 400px;margin-left: 11%" />
  </div>
</template>

<script>
import echarts from 'echarts'
import { getSubjectCompareGradeRankData } from '@/api/subjectAnalysisData'
require('echarts/theme/macarons')
export default {
  name: 'SubjectStudentsRankChart',
  props: {
    classValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      subject: window.localStorage.getItem('subject'),
      option: {
        title: {
          // text: '某站点用户访问来源',
          // subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['高分【90%-100%】', '优秀【85%-90%】', '良好【75%-85%】', '及格【60%-75%】', '低分【0%-60%】']
        },
        series: [
          {
            name: '等级分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 0, name: '高分【90%-100%】' },
              { value: 0, name: '优秀【85%-90%】' },
              { value: 0, name: '良好【75%-85%】' },
              { value: 0, name: '及格【60%-75%】' },
              { value: 0, name: '低分【0%-60%】' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
    // setTimeout(() => {
    //   this.getChartData()
    // }, 1000)
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('student'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject,
        classname: this.classValue
      }
      console.log('检查获取图数据时的参数')
      console.log(prams)
      getSubjectCompareGradeRankData(prams).then(response => {
        console.log('测试否获取到了图的数据')
        console.log(response.data)
        this.option.series[0].data[0].value = response.data.info.highnum
        this.option.series[0].data[1].value = response.data.info.excellentstudents
        this.option.series[0].data[2].value = response.data.info.goodnumbers
        this.option.series[0].data[3].value = response.data.info.passnumbers
        this.option.series[0].data[4].value = response.data.info.failnum
        this.initChart()
      })
    }
  }
}
</script>

<style scoped>

</style>
