<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择班级</span>
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请选择" @change="changeData">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="mainContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="成绩单" name="first">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—一分一档统计图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <one-score-chart />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—班级成绩单—</span>
              </div>
            </el-row>
            <el-row>
              <class-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="重点关注" name="second">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—重点关注—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <important-focus-table ref="important" :classname="value" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名分布—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <front-rank-chart ref="frontn" :classname="value" />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="班校对比" name="third">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—班级六率分析—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <class-six-rates-ana :all-grade-six-rates-data="allGradeSixRatesData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—科目班校平均分对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-compare-chart />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—科目六率班级对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 30px">
              <el-col :span="4">
                <el-select v-model="rateValue" placeholder="请选择六率">
                  <el-option
                    v-for="item in optionsTwo"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <six-rate-class-chart />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="等级分布" name="fourth">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—学生等级分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <students-rank-chart ref="student" :classname="value" />
            </el-row>
            <!--            <el-row style="padding-top: 20px">-->
            <!--              <student-rank-table ref="studenttable" :classname="value" />-->
            <!--            </el-row>-->
          </el-tab-pane>
          <el-tab-pane label="历次对比" name="fourth1">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">-班级历次成绩分析-</span>
              </div>
            </el-row>
            <el-row style="paddig-top: 20px">
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分表-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfoThree" />
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <xing-zhen-trend-chart ref="average" :classname="value" />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px" />
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <xingzhen-six-rate-chart ref="six" :classname="value" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import classGradeTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/classGradeTable'
import oneScoreChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/oneScoreChart'
import importantFocusTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/importantFocusTable'
import frontRankChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/frontRankChart'
import classSixRatesAna from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/classSixRatesAna'
import subjectCompareChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/subjectCompareChart'
import sixRateClassChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/sixRateClassChart'
import studentsRankChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/studentsRankChart'
// import studentRankTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/studentRankTable'
import inTermSixRatesTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/inTermSixRatesTable'
import termGradeAverageTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/termGradeAverageTable'
import xingZhenTrendChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/xingZhenTrendChart'
import xingzhenSixRateChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/xingzhenSixRateChart'
import { getBehindClassDataBySubject, getXingZhengScoreTable, getClassAnalysisXingzhengSixRatesData, getClassAnalysisXingzhengGradeAverageData, getClassAnalysisXingzhengGradeSixRatesData } from '@/api/nianjizhurenGetData'
export default {
  name: 'Xingzheng',
  components: {
    sixRateClassChart,
    classGradeTable,
    oneScoreChart,
    importantFocusTable,
    frontRankChart,
    classSixRatesAna,
    subjectCompareChart,
    studentsRankChart,
    // studentRankTable,
    inTermSixRatesTable,
    termGradeAverageTable,
    xingZhenTrendChart,
    xingzhenSixRateChart
  },
  data() {
    return {
      subject: '语文',
      id: window.localStorage.getItem('id'),
      allGradeTableData: [],
      allGradeSixRatesData: [],
      termAverageData: [],
      inTermSixRatesData: [],
      activeName: 'first',
      value: '1',
      rateValue: '',
      tableInfo: [
        // { prop: 'xuhao', lable: '序号' },
        { prop: 'studentNumber', lable: '考号' },
        { prop: 'studentName', lable: '姓名' },
        { prop: 'classId', lable: '班级/行政班' },
        { prop: 'coversionTotal', lable: '总分' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'schoolIndex', lable: '校名次' },
        { prop: 'jinbu', lable: '进步/后退' },
        { prop: 'yuwenScore', lable: '语文' },
        { prop: 'shuxueScore', lable: '数学' },
        { prop: 'yingyuScore', lable: '英语' },
        { prop: 'three', lable: '三科总分' },
        { prop: 'wuliCoversion', lable: '物理' },
        { prop: 'huaxueCoversion', lable: '化学' },
        { prop: 'shengwuCoversion', lable: '生物' },
        { prop: 'lishiCoversion', lable: '历史' },
        { prop: 'diliCoversion', lable: '地理' },
        { prop: 'diliCoversion', lable: '政治' }
      ],
      tableInfoTwo: [
        { prop: 'subjectname', lable: '学科' },
        // { prop: 'leibie', lable: '类别' },
        { prop: 'personsum', lable: '人数' },
        { prop: 'avg', lable: '平均分' },
        // { prop: 'StandardDiviation', lable: '标准差' },
        { prop: 'highnum', lable: '高分人数' },
        { prop: 'highnumradio', lable: '高分率' },
        { prop: 'excellentstudents', lable: '优秀人数' },
        { prop: 'excellentratio', lable: '优秀率' },
        { prop: 'goodnumbers', lable: '良好人数' },
        { prop: 'goodratio', lable: '良好率' },
        { prop: 'passnumbers', lable: '及格人数' },
        { prop: 'passratio', lable: '及格率' },
        { prop: 'failnum', lable: '低分人数' },
        { prop: 'failratio', lable: '低分率' },
        { prop: 'beyondnum', lable: '超均人数' },
        { prop: 'beyondradio', lable: '超均率' }
      ],
      tableInfoThree: [
        { prop: 'examdate', lable: '日期' },
        { prop: 'examname', lable: '考试名称' },
        { prop: 'scoreAvg', lable: '平均分' },
        { prop: 'StandardDiviation', lable: '标准差' }
      ],
      tableInfoFour: [
        { prop: 'examdate', lable: '日期' },
        { prop: 'examname', lable: '考试名称' },
        { prop: 'subjectname', lable: '学科' },
        { prop: 'personsum', lable: '年级人数' },
        { prop: 'highnum', lable: '高分人数' },
        { prop: 'highnumradio', lable: '高分率' },
        { prop: 'excellentstudents', lable: '优秀人数' },
        { prop: 'excellentratio', lable: '优秀率' },
        { prop: 'goodnumbers', lable: '良好人数' },
        { prop: 'goodratio', lable: '良好率' },
        { prop: 'passnumbers', lable: '及格人数' },
        { prop: 'passratio', lable: '及格率' },
        { prop: 'failnum', lable: '低分人数' },
        { prop: 'failratio', lable: '低分率' },
        { prop: 'beyondnum', lable: '超均人数' },
        { prop: 'beyondradio', lable: '超均率' }
      ],
      options: [],
      optionsTwo: [
        {
          value: '选项0',
          label: '高分率'
        },
        {
          value: '选项1',
          label: '优秀率'
        }, {
          value: '选项2',
          label: '良好率'
        }, {
          value: '选项3',
          label: '及格率'
        }, {
          value: '选项4',
          label: '低分率'
        }, {
          value: '选项5',
          label: '超均率'
        }]
    }
  },
  mounted() {
    this.firstGetClass()
    setTimeout(() => {
      this.getScoreTable()
      this.getSixRates()
      this.getLiciAverage()
      this.getLiciSixRates()
    }, 1000)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    firstGetClass: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getBehindClassDataBySubject(prams).then(response => {
        console.log('测试年级主任行政班获取班级数据')
        console.log(response.data)
        const afterSortData = response.data.classSet.sort(this.sortData)
        console.log(afterSortData)
        for (let i = 0; i < afterSortData.length; i++) {
          const obj = {
            value: response.data.classSet[i],
            label: response.data.classSet[i] + '班'
          }
          this.options.push(obj)
        }
      })
    },
    getScoreTable: function() {
      const prams = {
        userID: this.id,
        classname: this.value
      }
      getXingZhengScoreTable(prams).then(response => {
        console.log('测试年级主任行政班成绩单的数据')
        console.log(response.data)
        this.allGradeTableData = response.data.info
      })
    },
    getSixRates: function() {
      const prams = {
        userID: this.id,
        classname: this.value
      }
      getClassAnalysisXingzhengSixRatesData(prams).then(response => {
        console.log('测试年级主任行政班校对比六率的数据')
        console.log(response.data)
        this.allGradeSixRatesData = []
        this.allGradeSixRatesData.push(response.data.info[1])
        this.allGradeSixRatesData.push(response.data.info[3])
        this.allGradeSixRatesData.push(response.data.info[5])
      })
    },
    getLiciAverage: function() {
      const prams = {
        userID: this.id,
        classname: this.value
      }
      getClassAnalysisXingzhengGradeAverageData(prams).then(response => {
        console.log('测试年级主任行政班历次平均分的数据')
        console.log(response.data)
        this.termAverageData = response.data.info
      })
    },
    getLiciSixRates: function() {
      const prams = {
        userID: this.id,
        classname: this.value
      }
      getClassAnalysisXingzhengGradeSixRatesData(prams).then(response => {
        console.log('测试年级主任行政班历次六率的数据')
        console.log(response.data)
        this.inTermSixRatesData = response.data.info
      })
    },
    changeData: function() {
      this.getScoreTable()
      this.getSixRates()
      this.getLiciSixRates()
      this.getLiciAverage()
      this.$refs.important.getFiveData()
      // this.$refs.studenttable.firstInitTabletByData()
      setTimeout(() => {
        this.$refs.frontn.getChartData()
        this.$refs.student.firstInitChartByData()
        this.$refs.average.getData()
        this.$refs.six.getData()
      }, 1000)
    },
    sortData: function(a, b) {
      return a - b
    }
  }
}
</script>

<style scoped>
  .selectContainer{
    float: right;
  }
  .shuoming{
    float: left;
    padding-top: 10px;
  }
  .select{
    float: right;
    padding-left: 10px;
  }
  .title{
    text-align: center;
  }
</style>
