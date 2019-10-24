<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择班级</span>
        </div>
        <div class="select">
          <el-select v-model="classValue" placeholder="请选择" @change="changeClassData">
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
              <subject-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" :my-loading="myLoading" />
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
              <subject-important-focus-table ref="important" :class-value="classValue" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名分布—</span>
              </div>
              <div class="title" style="padding-top: 10px">
                <span style="font-size: 18px;">班级：共70人   全校：共500人</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-front-rank-chart />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="科校对比" name="third">
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
                <span style="font-size: 25px;color: #2ac06d">—科目六率科校对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rate-class-chart :all-grade-six-rates-data="allGradeSixRatesData" />
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
                <span style="font-size: 25px;color: #2ac06d">—科目等级分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-students-rank-chart ref="rankchart" :class-value="classValue" />
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-student-rank-table ref="ranktable" :class-value="classValue" />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="历次分布" name="fourtha">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <!--            <el-row style="padding-top: 20px">-->
            <!--              <div class="title">-->
            <!--                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">-物理历次成绩分析-</span>-->
            <!--              </div>-->
            <!--            </el-row>-->
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
                  <subject-trend-chart ref="trend" :class-value="classValue" />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rate-chart ref="mysix" :class-value="classValue" />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import subjectGradeTable from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectGradeTable'
import subjectImportantFocusTable from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectImportantFocusTable'
import subjectFrontRankChart from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectFrontRankChart'
import subjectClassSixRatesAna from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectClassSixRatesAna'
import subjectSixRateClassChart from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectSixRateClassChart'
import subjectStudentsRankChart from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectStudentsRankChart'
import subjectStudentRankTable from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectStudentRankTable'
import subjectTermGradeAverageTable from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectTermGradeAverageTable'
import subjectTrendChart from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectTrendChart'
import subjectInTermSixRatesTable from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectInTermSixRatesTable'
import subjectSixRateChart from '@/views/renkeTeacherGradeReport/subjectAnalysis/tableAndChart/subjectSixRateChart'
import { getTeacherInformationData } from '@/api/homepageData'
import { getSubjectAnaGradeTableData, getSubjectCompareSchoolData, getInTermSuccessiveGradeAverageData, getInTermSuccessiveSixRatesData } from '@/api/subjectAnalysisData'
export default {
  name: 'WuliAnalysis',
  components: {
    subjectGradeTable,
    subjectImportantFocusTable,
    subjectFrontRankChart,
    subjectClassSixRatesAna,
    subjectSixRateClassChart,
    subjectStudentsRankChart,
    subjectStudentRankTable,
    subjectTermGradeAverageTable,
    subjectTrendChart,
    subjectInTermSixRatesTable,
    subjectSixRateChart
  },
  data() {
    return {
      myLoading: true,
      classValue: '', // 班级名
      allGradeTableData: [],
      allGradeSixRatesData: [],
      termAverageData: [],
      inTermSixRatesData: [],
      id: window.localStorage.getItem('id'),
      tableInfo: [
        { prop: 'machinecard', lable: '考号' },
        { prop: 'studentname', lable: '姓名' },
        { prop: 'subject', lable: '科目' },
        { prop: 'classname', lable: '班级' },
        { prop: 'classscore', lable: '成绩' },
        { prop: 'classsindex', lable: '班名次' },
        { prop: 'schoolindex', lable: '校名次' },
        { prop: 'yingyuScore', lable: '进步/后退' }
      ],
      tableInfoTwo: [
        { prop: 'classid', lable: '类别' },
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
        { prop: 'mediumnum', lable: '超均人数' },
        { prop: 'mediumratio', lable: '超均率' }
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
    this.firstGetTeacherData()
    setTimeout(() => {
      this.getGradeTableData()
    }, 1000)
    setTimeout(() => {
      this.getInTermSuccessiveAvrData()
    }, 1000)
    setTimeout(() => {
      this.getInTermSuccessiveSixData()
    }, 1000)
    this.getSubjectSixRatesData()
  },
  methods: {
    firstGetTeacherData: function() {
      const prams = {
        userID: this.id
      }
      getTeacherInformationData(prams).then(response => {
        this.subject = response.data.info.subjectName
        console.log('测试是否拿到科目')
        console.log(this.subject)
        console.log('物理科目分析测试是否能够拿到老师的个人信息')
        console.log(response.data.info.className)
        // eslint-disable-next-line no-empty
        for (var i = 0; i < response.data.info.className.length; i++) {
          const option = {
            value: response.data.info.className[i],
            label: response.data.info.className[i]
          }
          this.options.push(option)
          this.classValue = this.options[0].value
        }
        console.log('测试能否拿到班级数组')
        console.log(this.options)
      })
    },
    handleClick: function() {
      console.log('我换了，你呢弟弟')
    },
    // 获取科目成绩单数据
    getGradeTableData: function() {
      const prams = {
        userID: this.id,
        classname: this.classValue
      }
      getSubjectAnaGradeTableData(prams).then(response => {
        console.log('测试是否拿到了科目成绩单的数据')
        console.log(response.data)
        this.allGradeTableData = response.data.info
        this.myLoading = false
      })
    },
    getSubjectSixRatesData: function() {
      const prams = {
        userID: this.id
      }
      getSubjectCompareSchoolData(prams).then(response => {
        console.log('测试是否拿到科目六率分析的数据')
        console.log(response.data)
        this.allGradeSixRatesData = response.data.info
      })
    },
    getInTermSuccessiveAvrData: function() {
      const prams = {
        userID: this.id,
        classname: this.classValue
      }
      getInTermSuccessiveGradeAverageData(prams).then(response => {
        console.log('测试是否拿到学期内历次均分数据')
        console.log(response.data)
        this.termAverageData = response.data.info
      })
    },
    getInTermSuccessiveSixData: function() {
      const prams = {
        userID: this.id,
        classname: this.classValue
      }
      getInTermSuccessiveSixRatesData(prams).then(response => {
        console.log('测试是否拿到学期内历次六率数据')
        console.log(response.data)
        this.inTermSixRatesData = response.data.info
      })
    },
    changeClassData: function(val) {
      let obj = {}
      obj = this.options.find((item) => {
        return item.value === val
      })
      let getName = ''
      getName = obj.label
      console.log('科目分析获取到的班级名' + getName)
      this.classValue = getName
      this.getGradeTableData()
      this.getInTermSuccessiveAvrData()
      // this.$refs.important.getFrontFiveData()
      // this.$refs.important.getBehindFiveData()
      setTimeout(() => {
        this.$refs.important.getFrontFiveData()
        this.$refs.important.getBehindFiveData()
        this.$refs.rankchart.getChartData()
        this.$refs.ranktable.getRankTableData()
        this.$refs.trend.updateChart()
        this.$refs.mysix.updateChart()
      }, 500)
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
