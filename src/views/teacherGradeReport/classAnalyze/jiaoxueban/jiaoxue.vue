<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择科目及班级</span>
        </div>
        <div class="select">
          <div class="select">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <el-select v-model="subjectValue" placeholder="请选择">
            <el-option
              v-for="item in optionsTwo"
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—教学班成绩单—</span>
              </div>
            </el-row>
            <el-row>
              <jiaoxue-class-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo"/>
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—十分一档统计图—</span>
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—重点关注—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-important-focus-table />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—全校前N名分布—</span>
              </div>
              <div class="title" style="padding-top: 10px">
                <span style="font-size: 18px;">班级：共70人   全校：共500人</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-front-rank-chart />
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—物理班六率班校对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <class-to-school-chart />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="等级分布" name="fourth" >
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—物理班等级分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-students-rank-chart />
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-student-rank-table />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="历次对比" name="fourth1">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">-学期内历次成绩分析-</span>
              </div>
            </el-row>
            <el-row style="paddig-top: 20px">
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩均分表-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <jiaoxue-term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfoThree"></jiaoxue-term-grade-average-table>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <jiaoxue-trend-chart />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-six-rate-chart />
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
import jiaoxueStudentsRankChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueStudentsRankChart'
import jiaoxueStudentRankTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueStudentRankTable'
import jiaoxueTermGradeAverageTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueTermGradeAverageTable'
import jiaoxueTrendChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueTrendChart'
import jiaoxueInTermSixRatesTable from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueInTermSixRatesTable'
import jiaoxueSixRateChart from '@/views/teacherGradeReport/classAnalyze/jiaoxueban/tableAndChart/jiaoxueSixRateChart'
export default {
  name: 'Jiaoxue',
  components: {
    jiaoxueClassGradeTable,
    jiaoxueOneScoreChart,
    jiaoxueImportantFocusTable,
    jiaoxueFrontRankChart,
    classToSchoolChart,
    jiaoxueStudentsRankChart,
    jiaoxueStudentRankTable,
    jiaoxueTermGradeAverageTable,
    jiaoxueTrendChart,
    jiaoxueInTermSixRatesTable,
    jiaoxueSixRateChart
  },
  data() {
    return {
      termAverageData: [],
      inTermSixRatesData: [],
      allGradeTableData: [],
      subjectValue: '选项1',
      activeName: 'first',
      value: '选项1',
      tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentMachineCard', lable: '考号' },
        { prop: 'studentName', lable: '姓名' },
        { prop: 'classId', lable: '班级/行政班' },
        { prop: 'coversionTotal', lable: '总分' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'classIndex', lable: '校名次' },
        { prop: 'advancefall', lable: '进步/后退' },
        { prop: 'yuwenScore', lable: '语文' },
        { prop: 'shuxueScore', lable: '数学' },
        { prop: 'yingyuScore', lable: '英语' },
        { prop: 'threeScore', lable: '三科总分' },
        { prop: 'physics', lable: '物理' },
        { prop: 'huaxueCoversion', lable: '化学' },
        { prop: 'shengwuCoversion', lable: '生物' },
        { prop: 'lishiCoversion', lable: '历史' },
        { prop: 'diliCoversion', lable: '地理' },
        { prop: 'zhengzhiCoversion', lable: '政治' }
      ],
      tableInfoThree: [
        { prop: 'id', lable: '日期' },
        { prop: 'studentMachineCard', lable: '考试名称' },
        { prop: 'studentName', lable: '平均分' },
        { prop: 'classId', lable: '标准差' }
      ],
      tableInfoFour: [
        { prop: 'id', lable: '日期' },
        { prop: 'studentMachineCard', lable: '考试名称' },
        { prop: 'studentName', lable: '学科' },
        { prop: 'classId', lable: '年级人数' },
        { prop: 'coversionTotal', lable: '高分人数' },
        { prop: 'classIndex', lable: '高分率' },
        { prop: 'advancefall', lable: '优秀人数' },
        { prop: 'yuwenScore', lable: '优秀率' },
        { prop: 'shuxueScore', lable: '良好人数' },
        { prop: 'yingyuScore', lable: '良好率' },
        { prop: 'threeScore', lable: '及格人数' },
        { prop: 'physics', lable: '及格率' },
        { prop: 'huaxueCoversion', lable: '低分人数' },
        { prop: 'shengwuCoversion', lable: '低分率' },
        { prop: 'lishiCoversion', lable: '超均人数' },
        { prop: 'diliCoversion', lable: '超均率' }
      ],
      options: [{
        value: '选项1',
        label: '一班'
      }, {
        value: '选项2',
        label: '二班'
      }, {
        value: '选项3',
        label: '三班'
      }, {
        value: '选项4',
        label: '四班'
      }, {
        value: '选项5',
        label: '五班'
      }],
      optionsTwo: [{
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
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
