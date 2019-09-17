<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择班级</span>
        </div>
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—科目成绩单—</span>
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—重点关注—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-important-focus-table />
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—科目六率分析—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-class-six-rates-ana :all-grade-six-rates-data="allGradeSixRatesData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—科目六率班校对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rate-class-chart />
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—科目等级分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-students-rank-chart />
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-student-rank-table />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="历次分布" name="fourtha">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">-物理历次成绩分析-</span>
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
                  <subject-term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfoThree" />
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <subject-trend-chart />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rate-chart />
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
import subjectStudentsRankChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectStudentsRankChart'
import subjectStudentRankTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectStudentRankTable'
import subjectTermGradeAverageTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectTermGradeAverageTable'
import subjectTrendChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectTrendChart'
import subjectInTermSixRatesTable from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectInTermSixRatesTable'
import subjectSixRateChart from '@/views/teacherGradeReport/subjectAnalysis/tableAndChart/subjectSixRateChart'
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
      value: '选项1',
      allGradeTableData: [],
      allGradeSixRatesData: [],
      termAverageData: [],
      inTermSixRatesData: [],
      tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentMachineCard', lable: '考号' },
        { prop: 'studentName', lable: '姓名' },
        { prop: 'classId', lable: '科目' },
        { prop: 'classIndex', lable: '班级' },
        { prop: 'advancefall', lable: '成绩' },
        { prop: 'yuwenScore', lable: '班名次' },
        { prop: 'shuxueScore', lable: '校名次' },
        { prop: 'yingyuScore', lable: '进步/后退' }
      ],
      tableInfoTwo: [
        { prop: 'studentMachineCard', lable: '类别' },
        { prop: 'studentName', lable: '人数' },
        { prop: 'classId', lable: '平均分' },
        { prop: 'classIndex', lable: '高分人数' },
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
      activeName: 'first',
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
      }]
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
