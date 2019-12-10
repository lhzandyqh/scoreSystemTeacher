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
    <el-row style="padding-top: 20px">
      <div class="app-container">
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="subject"
            label="科目"
            align="center"
            width="80"
          />
          <el-table-column
            prop="numsOfClass"
            align="center"
            label="班级人数"
            width="80"
          />
          <el-table-column align="center" label="高分【90%~100%】">
            <el-table-column
              prop="highScoreNums"
              align="center"
              label="高分人数"
              width="100"
            />
            <el-table-column
              prop="highScoreRate"
              align="center"
              label="高分率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="优秀【85%~90%】">
            <el-table-column
              prop="goodScoreNums"
              align="center"
              label="优秀人数"
              width="100"
            />
            <el-table-column
              prop="goodScoreRate"
              align="center"
              label="优秀率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="良好【75%~85%】">
            <el-table-column
              prop="fineScorNums"
              align="center"
              label="良好人数"
              width="100"
            />
            <el-table-column
              prop="fineScoreRate"
              align="center"
              label="良好率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="及格【60%~75%】">
            <el-table-column
              prop="passScoreNums"
              align="center"
              label="及格人数"
              width="100"
            />
            <el-table-column
              align="center"
              prop="passScoreRate"
              label="及格率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="低分【0%~60%】">
            <el-table-column
              prop="lowScoreNums"
              align="center"
              label="低分人数"
              width="120"
            />
            <el-table-column
              prop="lowScoreRate"
              align="center"
              label="低分率"
            />
          </el-table-column>
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getRankChartDataBySubjectAndClass } from '@/api/nianjizhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'StudentsRankChart',
  props: {
    // subject: {
    //   type: String,
    //   required: true
    // },
    classname: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      tableData: [],
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
    // this.initChart()
    this.firstInitChartByData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('student'), 'macarons')
      this.chart.setOption(this.option)
    },
    firstInitChartByData: function() {
      const prams = {
        subjectname: '全科',
        classname: this.classname
      }
      getRankChartDataBySubjectAndClass(prams).then(response => {
        console.log('测试年级主任行政班等级测试的数据')
        console.log(response.data)
        this.tableData = []
        this.option.series[0].data[0].value = response.data.highScoreRate
        this.option.series[0].data[1].value = response.data.fineScoreRate
        this.option.series[0].data[2].value = response.data.goodScoreRate
        this.option.series[0].data[3].value = response.data.passScoreRate
        this.option.series[0].data[4].value = response.data.lowScoreRate
        this.tableData.push(response.data)
        setTimeout(() => {
          this.initChart()
        }, 2000)
      })
    },
    sortData: function(a, b) {
      return a - b
    }
  }
}
</script>

<style scoped>

</style>
