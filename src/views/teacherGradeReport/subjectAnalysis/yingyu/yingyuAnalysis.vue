<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择班级</span>
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请选择" @change="updateData">
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
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—科目成绩单—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" />
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
              <subject-important-focus-table ref="five" :subject="subject" :classname="value" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名分布—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-front-rank-chart ref="front" :subject="subject" :classname="value" />
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
                <span style="font-size: 25px;color: #2ac06d">—科目六率分析—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-class-six-rates-ana :all-grade-six-rates-data="allGradeSixRatesData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—科目六率班校对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rate-class-chart ref="compare" :subject="subject" :classname="value" />
            </el-row>
          </el-tab-pane>
          <!--          <el-tab-pane label="等级分布" name="fourth">-->
          <!--            <el-row style="padding-top: 20px">-->
          <!--              <div class="title">-->
          <!--                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>-->
          <!--              </div>-->
          <!--            </el-row>-->
          <!--            <el-row style="padding-top: 20px">-->
          <!--              <div class="title">-->
          <!--                <span style="font-size: 25px;color: #2ac06d">—科目等级分布图—</span>-->
          <!--              </div>-->
          <!--            </el-row>-->
          <!--            <el-row style="padding-top: 20px">-->
          <!--              <subject-students-rank-chart />-->
          <!--            </el-row>-->
          <!--            <el-row style="padding-top: 20px">-->
          <!--              <subject-student-rank-table />-->
          <!--            </el-row>-->
          <!--          </el-tab-pane>-->
          <el-tab-pane label="历次分布" name="fourtha">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">-英语历次成绩分析-</span>
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
                  <subject-term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfoThree" />
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <subject-trend-chart ref="average" :subject="subject" :classname="value" />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rate-chart ref="sixrates" :subject="subject" :classname="value" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import subjectGradeTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectGradeTable'
import subjectImportantFocusTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectImportantFocusTable'
import subjectFrontRankChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectFrontRankChart'
import subjectClassSixRatesAna from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectClassSixRatesAna'
import subjectSixRateClassChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectSixRateClassChart'
// import subjectStudentsRankChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectStudentsRankChart'
// import subjectStudentRankTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectStudentRankTable'
import subjectTermGradeAverageTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectTermGradeAverageTable'
import subjectTrendChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectTrendChart'
import subjectInTermSixRatesTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectInTermSixRatesTable'
import subjectSixRateChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectSixRateChart'
import { getSubjectAnalysisClassBySubject, getSubjectAnalysiSingleSubjecData, getSubjectAnalysisClassCompareSchoolData, getSubjectAnalysisLiciAverageScoreData, getSubjectAnalysisLiciSixRatesData } from '@/api/nianjizhurenGetData'
export default {
  name: 'YingyuAnalysis',
  components: {
    subjectGradeTable,
    subjectImportantFocusTable,
    subjectFrontRankChart,
    subjectClassSixRatesAna,
    subjectSixRateClassChart,
    // subjectStudentsRankChart,
    // subjectStudentRankTable,
    subjectTermGradeAverageTable,
    subjectTrendChart,
    subjectInTermSixRatesTable,
    subjectSixRateChart
  },
  data() {
    return {
      subject: '英语',
      id: window.localStorage.getItem('id'),
      value: '1',
      allGradeTableData: [],
      allGradeSixRatesData: [],
      termAverageData: [],
      inTermSixRatesData: [],
      tableInfo: [
        // { prop: 'id', lable: '序号' },
        { prop: 'studentnuber', lable: '考号' },
        { prop: 'studentname', lable: '姓名' },
        // { prop: 'classId', lable: '科目' },
        { prop: 'classidname', lable: '班级' },
        { prop: 'score', lable: '成绩' },
        { prop: 'classindex', lable: '班名次' },
        { prop: 'schoolindex', lable: '校名次' },
        { prop: 'jingbu', lable: '进步/后退' }
      ],
      tableInfoTwo: [
        { prop: 'subjectname', lable: '科目' },
        { prop: 'personsum', lable: '人数' },
        { prop: 'avg', lable: '平均分' },
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
        { prop: 'examtype', lable: '考试名称' },
        { prop: 'subjectname', lable: '学科' },
        { prop: 'personsum', lable: '班级人数' },
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
      activeName: 'first',
      options: []
    }
  },
  mounted() {
    this.getScoreTable()
    this.firstGetClass()
    this.getSixRatesData()
    this.getAverageData()
    this.getLiciSix()
  },
  methods: {
    firstGetClass: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getSubjectAnalysisClassBySubject(prams).then(response => {
        console.log('测试年级主任班级分析获取班级数据')
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
        classname: this.value,
        subjectname: this.subject
      }
      getSubjectAnalysiSingleSubjecData(prams).then(response => {
        console.log('测试年级主任科目分析单科成绩单的数据')
        console.log(response.data)
        this.allGradeTableData = response.data.info
      })
    },
    updateData: function() {
      this.getScoreTable()
      this.getSixRatesData()
      this.getAverageData()
      this.getLiciSix()
      setTimeout(() => {
        this.$refs.five.getFrontFiveData()
        this.$refs.five.getBehindFiveData()
        this.$refs.front.getChartData()
        this.$refs.compare.getChartData()
        this.$refs.average.getData()
        this.$refs.sixrates.getData()
      }, 1000)
    },
    getSixRatesData: function() {
      this.allGradeSixRatesData = []
      const prams = {
        userID: this.id,
        subjectname: this.subject,
        classname: this.value
      }
      getSubjectAnalysisClassCompareSchoolData(prams).then(response => {
        console.log('测试年级主任班校对比六率')
        console.log(response.data)
        this.allGradeSixRatesData.push(response.data.info[1])
      })
    },
    getAverageData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject,
        classname: this.value
      }
      getSubjectAnalysisLiciAverageScoreData(prams).then(response => {
        console.log('测试年级主任历次平均分')
        console.log(response.data)
        this.termAverageData = (response.data.info)
      })
    },
    getLiciSix: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject,
        classname: this.value
      }
      getSubjectAnalysisLiciSixRatesData(prams).then(response => {
        console.log('测试年级主任历次六率')
        console.log(response.data)
        this.inTermSixRatesData = (response.data.info)
      })
    },
    sortData: function(a, b) {
      return a - b
    },
    handleClick: function() {
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
