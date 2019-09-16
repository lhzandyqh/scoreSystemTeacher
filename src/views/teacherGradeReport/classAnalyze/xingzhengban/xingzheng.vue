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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—班级成绩单—</span>
              </div>
            </el-row>
            <el-row>
              <class-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—一分一档统计图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <one-score-chart />
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
              <important-focus-table />
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
              <front-rank-chart />
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—班级六率分析—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <class-six-rates-ana :all-grade-six-rates-data="allGradeSixRatesData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—科目班校平均分对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-compare-chart />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—科目六率班级对比图—</span>
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
          <el-tab-pane label="等级分布" name="fourth" >
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—学生等级分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <students-rank-chart />
            </el-row>
            <el-row style="padding-top: 20px">
              <student-rank-table />
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
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">-班级历次成绩分析-</span>
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
                  <term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfoThree" />
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row style="padding-top: 20px">
                  <div class="title">
                    <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
                  </div>
                </el-row>
                <el-row style="padding-top: 20px">
                  <xing-zhen-trend-chart />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px">
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;font-weight: bolder;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <xingzhen-six-rate-chart />
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
import studentRankTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/studentRankTable'
import inTermSixRatesTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/inTermSixRatesTable'
import termGradeAverageTable from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/termGradeAverageTable'
import xingZhenTrendChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/xingZhenTrendChart'
import xingzhenSixRateChart from '@/views/teacherGradeReport/classAnalyze/xingzhengban/tableAndChart/xingzhenSixRateChart'
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
    studentRankTable,
    inTermSixRatesTable,
    termGradeAverageTable,
    xingZhenTrendChart,
    xingzhenSixRateChart
  },
  data() {
    return {
      allGradeTableData: [],
      allGradeSixRatesData: [],
      termAverageData: [],
      inTermSixRatesData: [],
      activeName: 'first',
      value: '选项1',
      rateValue: '',
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
      tableInfoTwo: [
        { prop: 'id', lable: '学科' },
        { prop: 'studentMachineCard', lable: '类别' },
        { prop: 'studentName', lable: '人数' },
        { prop: 'classId', lable: '平均分' },
        { prop: 'coversionTotal', lable: '标准差' },
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
