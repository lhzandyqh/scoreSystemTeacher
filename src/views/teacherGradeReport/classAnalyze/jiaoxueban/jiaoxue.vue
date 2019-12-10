<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择科目及班级</span>
        </div>
        <div class="select">
          <el-select v-model="subjectValue" placeholder="请选择" @change="changeLocationValue">
            <el-option
              v-for="item in optionsTwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
                <span style="font-size: 25px;color: #2ac06d">—教学班成绩单—</span>
              </div>
            </el-row>
            <el-row>
              <jiaoxue-class-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—十分一档统计图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-one-score-chart />
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
              <jiaoxue-important-focus-table ref="important" :classname="value" :subject="subjectValue" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名分布—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-front-rank-chart ref="frontn" :classname="value" :subject="subjectValue" />
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
                <span style="font-size: 25px;color: #2ac06d">—六率班校对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <class-to-school-chart ref="compare" :classname="value" :subject="subjectValue" />
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
          <!--                <span style="font-size: 25px;color: #2ac06d">—物理班等级分布图—</span>-->
          <!--              </div>-->
          <!--            </el-row>-->
          <!--            <el-row style="padding-top: 20px">-->
          <!--              <jiaoxue-students-rank-chart />-->
          <!--            </el-row>-->
          <!--            <el-row style="padding-top: 20px">-->
          <!--              <jiaoxue-student-rank-table />-->
          <!--            </el-row>-->
          <!--          </el-tab-pane>-->
          <el-tab-pane label="历次对比" name="fourth1">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">-学期内历次成绩分析-</span>
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
                  <jiaoxue-term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfoThree" />
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <jiaoxue-trend-chart ref="average" :classname="value" :subject="subjectValue" />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-six-rate-chart ref="six" :classname="value" :subject="subjectValue" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>
<script>
import jiaoxueClassGradeTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueClassGradeTable'
import jiaoxueOneScoreChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueOneScoreChart'
import jiaoxueImportantFocusTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueImportantFocusTable'
import jiaoxueFrontRankChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueFrontRankChart'
import classToSchoolChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/classToSchoolChart'
// import jiaoxueStudentsRankChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueStudentsRankChart'
// import jiaoxueStudentRankTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueStudentRankTable'
import jiaoxueTermGradeAverageTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueTermGradeAverageTable'
import jiaoxueTrendChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueTrendChart'
import jiaoxueInTermSixRatesTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueInTermSixRatesTable'
import jiaoxueSixRateChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueSixRateChart'
import { getClassAnalysisJiaoxueGetClassDataBySubject, getClassAnalysisJiaoxueSingleSubjectData, getClassAnalysisJiaoxueGradeAverageData, getClassAnalysisJiaoxueGradeSixRatesData } from '@/api/nianjizhurenGetData'
export default {
  name: 'Jiaoxue',
  components: {
    jiaoxueClassGradeTable,
    jiaoxueOneScoreChart,
    jiaoxueImportantFocusTable,
    jiaoxueFrontRankChart,
    classToSchoolChart,
    // jiaoxueStudentsRankChart,
    // jiaoxueStudentRankTable,
    jiaoxueTermGradeAverageTable,
    jiaoxueTrendChart,
    jiaoxueInTermSixRatesTable,
    jiaoxueSixRateChart
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      termAverageData: [],
      inTermSixRatesData: [],
      allGradeTableData: [],
      subjectValue: '物理',
      activeName: 'first',
      value: '',
      tableInfo: [
        // { prop: 'id', lable: '序号' },
        { prop: 'studentnuber', lable: '考号' },
        { prop: 'studentname', lable: '姓名' },
        { prop: 'classname', lable: '班级/行政班' },
        { prop: 'score', lable: '分数' },
        { prop: 'classindex', lable: '班名次' },
        { prop: 'schoolindex', lable: '校名次' }
        // { prop: 'advancefall', lable: '进步/后退' },
        // { prop: 'yuwenScore', lable: '语文' },
        // { prop: 'shuxueScore', lable: '数学' },
        // { prop: 'yingyuScore', lable: '英语' },
        // { prop: 'threeScore', lable: '三科总分' },
        // { prop: 'physics', lable: '物理' },
        // { prop: 'huaxueCoversion', lable: '化学' },
        // { prop: 'shengwuCoversion', lable: '生物' },
        // { prop: 'lishiCoversion', lable: '历史' },
        // { prop: 'diliCoversion', lable: '地理' },
        // { prop: 'zhengzhiCoversion', lable: '政治' }
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
      optionsTwo: [{
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
      }]
    }
  },
  mounted() {
    this.firstGetClassData()
    setTimeout(() => {
      this.getScoreTable()
      // this.getSixRates()
      this.getLiciAverage()
      this.getLiciSixRates()
    }, 1000)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    changeData: function() {
      this.getScoreTable()
      // this.getSixRates()
      this.getLiciSixRates()
      this.getLiciAverage()
      // this.$refs.important.getFiveData()
      // this.$refs.studenttable.firstInitTabletByData()
      setTimeout(() => {
        this.$refs.important.getFiveData()
        this.$refs.frontn.getChartData()
        this.$refs.compare.getChartData()
        // this.$refs.student.firstInitChartByData()
        this.$refs.average.getData()
        this.$refs.six.getData()
      }, 1000)
    },
    getScoreTable: function() {
      const prams = {
        userID: this.id,
        classname: this.value,
        subjectname: this.subjectValue
      }
      getClassAnalysisJiaoxueSingleSubjectData(prams).then(response => {
        console.log('测试年级主任教学班成绩单的数据')
        console.log(response.data)
        this.allGradeTableData = response.data.info
      })
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
        subjectname: subjectname,
        userID: this.id
      }
      getClassAnalysisJiaoxueGetClassDataBySubject(prams).then(response => {
        console.log('测试年级主任通过科目拿取班级数据')
        console.log(response.data)
        this.options = []
        const afterSortData = response.data.classSet.sort(this.sortData)
        for (let i = 0; i < afterSortData.length; i++) {
          const obj = {
            value: response.data.classSet[i],
            label: response.data.classSet[i] + '班'
          }
          this.options.push(obj)
        }
        console.log('测试是否拿到了班级数据')
      })
    },
    firstGetClassData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subjectValue
      }
      getClassAnalysisJiaoxueGetClassDataBySubject(prams).then(response => {
        console.log('测试年级主任在教学班第一次获取班级数据')
        console.log(response.data)
        this.options = []
        const afterSortData = response.data.classSet.sort(this.sortData)
        console.log(afterSortData)
        for (let i = 0; i < afterSortData.length; i++) {
          const obj = {
            value: response.data.classSet[i],
            label: response.data.classSet[i] + '班'
          }
          this.options.push(obj)
        }
        this.value = this.options[0].value
        console.log(this.value)
        console.log('测试是否拿到了班级数据')
      })
    },
    getLiciAverage: function() {
      const prams = {
        userID: this.id,
        classname: this.value,
        subjectname: this.subjectValue
      }
      getClassAnalysisJiaoxueGradeAverageData(prams).then(response => {
        console.log('测试年级主任教学班历次平均分的数据')
        console.log(response.data)
        this.termAverageData = response.data.info
      })
    },
    getLiciSixRates: function() {
      const prams = {
        userID: this.id,
        classname: this.value,
        subjectname: this.subjectValue
      }
      getClassAnalysisJiaoxueGradeSixRatesData(prams).then(response => {
        console.log('测试年级主任教学班历次六率的数据')
        console.log(response.data)
        this.inTermSixRatesData = response.data.info
      })
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
