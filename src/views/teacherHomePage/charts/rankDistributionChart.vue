<template>
  <div class="app-container">
    <el-row>
      <span style="font-size: 20px">等级分布图</span>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-col :span="24">
        <div class="select">
          <el-row>
            <el-col :span="4">
              <el-select v-model="valuetwo" placeholder="请选择科目" @change="changeLocationValue">
                <el-option
                  v-for="item in optionsTwo"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="4" :offset="2">
              <el-select v-model="value" placeholder="请选择班级" @change="changeDataToInitChart">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row style="padding-top: 40px">
      <el-col :span="16">
        <div id="rankDis" style="width:1000px;height: 300px;" />
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
import { getClassDataBySubject, getRankChartDataBySubjectAndClass } from '@/api/nianjizhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'RankDistributionChart',
  data() {
    return {
      value: '1',
      valuetwo: '全科',
      options: [],
      optionsTwo: [
        {
          value: '全科',
          label: '全科'
        }, {
          value: '语文',
          label: '语文'
        }, {
          value: '数学',
          label: '数学'
        }, {
          value: '英语',
          label: '英语'
        }, {
          value: '物理',
          label: '物理'
        }, {
          value: '化学',
          label: '化学'
        }, {
          value: '生物',
          label: '生物'
        }, {
          value: '历史',
          label: '历史'
        }, {
          value: '政治',
          label: '政治'
        }, {
          value: '地理',
          label: '地理'
        }],
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
          data: ['高分【90%-100%】', '优秀【85%-90%】', '良好【75%-85%】', '及格【60%-75%】', '低分【0%-60%】'],
          top: 50
        },
        series: [
          {
            name: '等级分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '高分【90%-100%】' },
              { value: 310, name: '优秀【85%-90%】' },
              { value: 234, name: '良好【75%-85%】' },
              { value: 135, name: '及格【60%-75%】' },
              { value: 1548, name: '低分【0%-60%】' }
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
    this.firstGetClassData()
    this.firstInitChartByData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('rankDis'), 'macarons')
      this.chart.setOption(this.option)
    },
    changeLocationValue: function(val) {
      this.value = ''
      let obj = {}
      obj = this.optionsTwo.find((item) => {
        return item.value === val
      })
      let subjectname = ''
      subjectname = obj.label
      console.log('获取到的科目名' + subjectname)
      const prams = {
        subjectname: subjectname
      }
      getClassDataBySubject(prams).then(response => {
        console.log('测试年级主任通过科目拿取班级数据')
        console.log(response.data)
        this.options = []
        const afterSortData = response.data.class.sort(this.sortData)
        for (let i = 0; i < afterSortData.length; i++) {
          const obj = {
            value: response.data.class[i],
            label: response.data.class[i]
          }
          this.options.push(obj)
        }
        console.log('测试是否拿到了班级数据')
      })
    },
    firstGetClassData: function() {
      const prams = {
        subjectname: this.valuetwo
      }
      getClassDataBySubject(prams).then(response => {
        console.log('测试年级主任第一次获取班级数据')
        console.log(response.data)
        this.options = []
        const afterSortData = response.data.class.sort(this.sortData)
        for (let i = 0; i < afterSortData.length; i++) {
          const obj = {
            value: response.data.class[i],
            label: response.data.class[i]
          }
          this.options.push(obj)
        }
        console.log('测试是否拿到了班级数据')
      })
    },
    firstInitChartByData: function() {
      const prams = {
        subjectname: this.valuetwo,
        classname: this.value
      }
      getRankChartDataBySubjectAndClass(prams).then(response => {
        console.log('测试年级主任等级测试的数据')
        console.log(response.data)
        this.option.series[0].data[0].value = response.data.highScoreRate
        this.option.series[0].data[1].value = response.data.fineScoreRate
        this.option.series[0].data[2].value = response.data.goodScoreRate
        this.option.series[0].data[3].value = response.data.passScoreRate
        this.option.series[0].data[4].value = response.data.lowScoreRate
        this.initChart()
      })
    },
    changeDataToInitChart: function() {
      const prams = {
        subjectname: this.valuetwo,
        classname: this.value
      }
      getRankChartDataBySubjectAndClass(prams).then(response => {
        console.log('在选择班级后测试年级主任等级测试的数据再看能不能渲染图')
        console.log(response.data)
        this.option.series[0].data[0].value = response.data.highScoreRate
        this.option.series[0].data[1].value = response.data.fineScoreRate
        this.option.series[0].data[2].value = response.data.goodScoreRate
        this.option.series[0].data[3].value = response.data.passScoreRate
        this.option.series[0].data[4].value = response.data.lowScoreRate
        setTimeout(() => {
          this.initChart()
        }, 1000)
      })
    },
    sortData: function(a, b) {
      return a - b
    }
  }
}
</script>

<style scoped>
  .select{
    margin-bottom: 20px;
  }
  .box-card{
    width: 100%;
    height: 400px;
  }
  .card-container{
  }
  .title{
    text-align: center;
    margin-top: 30px;
  }
  .content{
    margin-top: 40px;
  }
</style>
