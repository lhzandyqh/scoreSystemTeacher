<template>
  <div class="app-container">
    <el-row>
      <el-col :span="16">
        <div id="student" style="width:1000px;height: 300px;" />
      </el-col>
      <el-col :span="8">
        <div class="card">
          <el-card class="box-card-two">
            <div slot="header" class="clearfix">
              <span>高分学生名单</span>
              <el-button style="float: right; padding: 3px 0" type="text">切换</el-button>
            </div>
            <div class="mingdan">
              <el-table
                :data="tableDataTwo"
                stripe
                style="width: 100%"
              >
                <el-table-column
                  prop="number"
                  align="center"
                  label="考号"
                  width="85"
                />
                <el-table-column
                  prop="class"
                  align="center"
                  label="班级"
                  width="85"
                />
                <el-table-column
                  prop="name"
                  align="center"
                  label="姓名"
                  width="85"
                />
                <el-table-column
                  prop="score"
                  align="center"
                  label="分数"
                />
              </el-table>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getHomeSubjectRankData } from '@/api/banzhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'StudentsRankChart',
  data() {
    return {
      id: window.localStorage.getItem('id'),
      subject: '',
      tableDataTwo: [{
        number: '65734322',
        class: 'A1-1',
        name: '张昊',
        score: '100'
      }, {
        number: '98452321',
        class: 'A1-1',
        name: '刘彦辰',
        score: '100'
      }, {
        number: '48292322',
        class: 'A1-1',
        name: '卢昊',
        score: '100'
      }, {
        number: '44532212',
        class: 'A1-1',
        name: '杜鹏程',
        score: '100'
      }],
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
    // setTimeout(() => {
    //   this.getChartData()
    // }, 1000)
    this.getChartData()
    // this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('student'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      console.log('检查获取班主任等级分布图数据时的参数')
      console.log(prams)
      getHomeSubjectRankData(prams).then(response => {
        console.log('测试班主任等级分布是否获取到了图的数据')
        console.log(response.data)
        this.option.series[0].data[0].value = response.data.info.highnum
        this.option.series[0].data[1].value = response.data.info.excellentstudents
        this.option.series[0].data[2].value = response.data.info.goodnumbers
        this.option.series[0].data[3].value = response.data.info.passnumbers
        this.option.series[0].data[4].value = response.data.info.failnum
        // this.tableData.push(response.data.info)
        // console.log('banzhuren')
        // console.log(this.tableData)
        this.initChart()
      })
    }
  }
}
</script>

<style scoped>

</style>
