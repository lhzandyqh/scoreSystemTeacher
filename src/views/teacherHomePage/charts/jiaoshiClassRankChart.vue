<template>
  <div class="app-container">
    <!--    <el-row>-->
    <!--      <span style="font-size: 20px;font-weight: bolder">教师等级分布图</span>-->
    <!--    </el-row>-->
    <el-row style="padding-top: 10px">
      <el-col :span="2">
        <div class="titletwo">
          <span>请选择班级</span>
        </div>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="请选择班级" @change="changeLocationValue">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-col :span="16">
        <div id="jaioshiRankDis" style="width:100%;height: 300px" />
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
    <el-row style="padding-top: 40px">
      <div class="table_container">
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="subjectname"
            label="科目"
            align="center"
            width="80"
          />
          <el-table-column
            prop="classid"
            align="center"
            label="班级"
            width="80"
          />
          <el-table-column
            prop="renshu"
            align="center"
            label="班级人数"
            width="80"
          />
          <el-table-column align="center" label="高分【90%~100%】">
            <el-table-column
              prop="highnum"
              align="center"
              label="高分人数"
              width="100"
            />
            <el-table-column
              prop="highnumradio"
              align="center"
              label="高分率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="优秀【85%~90%】">
            <el-table-column
              prop="excellentstudents"
              align="center"
              label="优秀人数"
              width="100"
            />
            <el-table-column
              prop="excellentratio"
              align="center"
              label="优秀率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="良好【75%~85%】">
            <el-table-column
              prop="goodnumbers"
              align="center"
              label="良好人数"
              width="100"
            />
            <el-table-column
              prop="goodratio"
              align="center"
              label="良好率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="及格【60%~75%】">
            <el-table-column
              prop="passnumbers"
              align="center"
              label="及格人数"
              width="100"
            />
            <el-table-column
              align="center"
              prop="passratio"
              label="及格率"
              width="100"
            />
          </el-table-column>
          <el-table-column align="center" label="低分【0%~60%】">
            <el-table-column
              prop="failnum"
              align="center"
              label="低分人数"
              width="120"
            />
            <el-table-column
              prop="failratio"
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
import { getTeacherInformationData, getTeacherRankChartData, getTeacherRankTableData } from '@/api/homepageData'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'RankDistributionChart',
  data() {
    return {
      value: 0,
      className: '',
      valuetwo: '',
      subject: '',
      tableData: [],
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
      role: window.localStorage.getItem('userRole'),
      id: window.localStorage.getItem('id'),
      chartData: [],
      options: [],
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
              { value: 0, name: '高分【90%-100%】' },
              { value: 0, name: '优秀【85%-90%】' },
              { value: 0, name: '良好【75%-85%】' },
              { value: 0, name: '及格【60%-75%】' },
              { value: 0, name: '低分【0%-60%】' }
              // { value: 335, name: '高分【90%-100%】' },
              // { value: 310, name: '优秀【85%-90%】' },
              // { value: 234, name: '良好【75%-85%】' },
              // { value: 135, name: '及格【60%-75%】' },
              // { value: 1548, name: '低分【0%-60%】' }
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
  created() {
    // this.firstGetTeacherData()
  },
  mounted() {
    this.firstGetTeacherData()
    setTimeout(() => {
      this.getChartData()
    }, 1000)
    // this.getChartData()
    this.initChart()
    this.getTableData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('jaioshiRankDis'), 'macarons')
      this.chart.setOption(this.option)
    },
    firstGetTeacherData: function() {
      const prams = {
        userID: this.id
      }
      getTeacherInformationData(prams).then(response => {
        this.subject = response.data.info.subjectName
        console.log('测试是否拿到科目')
        console.log(this.subject)
        window.localStorage.setItem('subject', this.subject)
        console.log('等级图测试是否能够拿到老师的个人信息')
        console.log(response.data.info.className)
        // eslint-disable-next-line no-empty
        for (var i = 0; i < response.data.info.className.length; i++) {
          const option = {
            value: response.data.info.className[i],
            label: response.data.info.className[i]
          }
          this.options.push(option)
          this.value = this.options[0].value
        }
        console.log('测试能否拿到班级数组')
        console.log(this.options)
      })
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject,
        classname: this.value
        // subjectname: '物理',
        // classname: 'A1-1'
      }
      console.log('检查获取图数据时的参数')
      console.log(prams)
      getTeacherRankChartData(prams).then(response => {
        console.log('测试否获取到了图的数据')
        console.log(response.data)
        this.option.series[0].data[0].value = response.data.info.highnum
        this.option.series[0].data[1].value = response.data.info.excellentstudents
        this.option.series[0].data[2].value = response.data.info.goodnumbers
        this.option.series[0].data[3].value = response.data.info.passnumbers
        this.option.series[0].data[4].value = response.data.info.failnum
        this.initChart()
      })
    },
    getTableData: function() {
      const prams = {
        userID: this.id
      }
      getTeacherRankTableData(prams).then(response => {
        console.log('测试否获取到了表的数据')
        console.log(response.data)
        this.tableData = response.data.info
      })
    },
    changeLocationValue: function(val) {
      let obj = {}
      obj = this.options.find((item) => {
        return item.value === val
      })
      let getName = ''
      getName = obj.label
      console.log('获取到的班级名' + getName)
      this.value = getName
      this.getChartData()
    }
  }
}
</script>

<style scoped>
  .select{
    margin-bottom: 20px;
  }
  .card{
    width: 100%;
    margin-left: -20%;
    margin-right: 20%;
  }
  .box-card{
    width: 100%;
    height: 100%;
  }
  .card-container{
  }
  box-card-two{
    height: 400px;
  }
  .title{
    text-align: center;
    margin-top: 30px;
  }
  .content{
    margin-top: 40px;
  }
  .titletwo{
    padding-top: 10px;
  }
  .table_container{
    padding-top: 40px;
  }
</style>
