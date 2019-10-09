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
                <span style="font-size: 25px;color: #2ac06d">—班级成绩单—</span>
              </div>
            </el-row>
            <el-row>
              <class-grade-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" />
            </el-row>
            <el-row style="padding-top: 40px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—一分一档统计图—</span>
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
                <span style="font-size: 25px;color: #2ac06d">—重点关注—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <important-focus-table />
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
                  <xing-zhen-trend-chart />
                </el-row>
              </el-col>
            </el-row>
            <el-row style="padding-top: 20px" />
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率表-</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoFour" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩班级六率对比图-</span>
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
      allGradeTableData: [
        {
          xuhao: '1',
          kaohao: '34521',
          name: '陈元元',
          banji: '3',
          total: '567',
          classrank: '23',
          schoolrank: '134',
          jinbu: '4',
          yuwen: '87',
          shuxue: '97',
          yingyu: '80',
          three: '274',
          wuli: '86',
          huaxue: '78',
          shengwu: '80',
          lishi: '0',
          dili: '0',
          zhengzhi: '0'
        }, {
          xuhao: '2',
          kaohao: '34521',
          name: '罗正',
          banji: '3',
          total: '567',
          classrank: '23',
          schoolrank: '134',
          jinbu: '4',
          yuwen: '87',
          shuxue: '97',
          yingyu: '80',
          three: '274',
          wuli: '86',
          huaxue: '78',
          shengwu: '80',
          lishi: '0',
          dili: '0',
          zhengzhi: '0'
        }, {
          xuhao: '3',
          kaohao: '34521',
          name: '王小虎',
          banji: '3',
          total: '567',
          classrank: '23',
          schoolrank: '134',
          jinbu: '4',
          yuwen: '87',
          shuxue: '97',
          yingyu: '80',
          three: '274',
          wuli: '86',
          huaxue: '78',
          shengwu: '80',
          lishi: '0',
          dili: '0',
          zhengzhi: '0'
        }, {
          xuhao: '4',
          kaohao: '34521',
          name: '欧成',
          banji: '3',
          total: '567',
          classrank: '23',
          schoolrank: '134',
          jinbu: '4',
          yuwen: '87',
          shuxue: '97',
          yingyu: '80',
          three: '274',
          wuli: '86',
          huaxue: '78',
          shengwu: '80',
          lishi: '0',
          dili: '0',
          zhengzhi: '0'
        }
      ],
      allGradeSixRatesData: [{
        kemu: '语文',
        leibie: '行政',
        pingjun: '76',
        biaozhun: '70',
        chaoju: '249',
        chaojulv: '50%',
        renshu: '456',
        gaofen: '35',
        gaofenlv: '12%',
        youxiu: '78',
        youxiulv: '25%',
        lianghao: '120',
        lianghaolv: '34%',
        jige: '400',
        jigelv: '84%',
        difen: '56',
        difenlv: '16%'
      }, {
        kemu: '数学',
        leibie: '行政',
        pingjun: '76',
        biaozhun: '70',
        chaoju: '249',
        chaojulv: '50%',
        renshu: '456',
        gaofen: '35',
        gaofenlv: '12%',
        youxiu: '78',
        youxiulv: '25%',
        lianghao: '120',
        lianghaolv: '34%',
        jige: '400',
        jigelv: '84%',
        difen: '56',
        difenlv: '16%'
      }, {
        kemu: '英语',
        leibie: '行政',
        pingjun: '76',
        biaozhun: '70',
        chaoju: '249',
        chaojulv: '50%',
        renshu: '456',
        gaofen: '35',
        gaofenlv: '12%',
        youxiu: '78',
        youxiulv: '25%',
        lianghao: '120',
        lianghaolv: '34%',
        jige: '400',
        jigelv: '84%',
        difen: '56',
        difenlv: '16%'
      }, {
        kemu: '物理',
        leibie: '行政',
        pingjun: '76',
        biaozhun: '70',
        chaoju: '249',
        chaojulv: '50%',
        renshu: '456',
        gaofen: '35',
        gaofenlv: '12%',
        youxiu: '78',
        youxiulv: '25%',
        lianghao: '120',
        lianghaolv: '34%',
        jige: '400',
        jigelv: '84%',
        difen: '56',
        difenlv: '16%'
      }],
      termAverageData: [
        {
          date: '2019-03-12',
          name: '第一次月考',
          pingjun: '78',
          biaozhun: '67'
        },
        {
          date: '2019-04-12',
          name: '第二次月考',
          pingjun: '78',
          biaozhun: '67'
        },
        {
          date: '2019-05-12',
          name: '第三次月考',
          pingjun: '78',
          biaozhun: '67'
        },
        {
          date: '2019-06-12',
          name: '第四次月考',
          pingjun: '78',
          biaozhun: '67'
        }
      ],
      inTermSixRatesData: [
        {
          date: '2019-03-12',
          name: '第一次月考',
          xueke: '全科',
          biaozhun: '70',
          chaojun: '249',
          chaojunlv: '50%',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        },
        {
          date: '2019-04-12',
          name: '第二次月考',
          xueke: '全科',
          biaozhun: '70',
          chaojun: '249',
          chaojunlv: '50%',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        },
        {
          date: '2019-05-12',
          name: '第三次月考',
          xueke: '全科',
          biaozhun: '70',
          chaojun: '249',
          chaojunlv: '50%',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        },
        {
          date: '2019-06-12',
          name: '第四次月考',
          xueke: '全科',
          biaozhun: '70',
          chaojun: '249',
          chaojunlv: '50%',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        }
      ],
      activeName: 'first',
      value: '选项1',
      rateValue: '',
      tableInfo: [
        { prop: 'xuhao', lable: '序号' },
        { prop: 'kaohao', lable: '考号' },
        { prop: 'name', lable: '姓名' },
        { prop: 'banji', lable: '班级/行政班' },
        { prop: 'total', lable: '总分' },
        { prop: 'classrank', lable: '班名次' },
        { prop: 'schoolrank', lable: '校名次' },
        { prop: 'jinbu', lable: '进步/后退' },
        { prop: 'yuwen', lable: '语文' },
        { prop: 'shuxue', lable: '数学' },
        { prop: 'yingyu', lable: '英语' },
        { prop: 'three', lable: '三科总分' },
        { prop: 'wuli', lable: '物理' },
        { prop: 'huaxue', lable: '化学' },
        { prop: 'shengwu', lable: '生物' },
        { prop: 'lishi', lable: '历史' },
        { prop: 'dili', lable: '地理' },
        { prop: 'zhengzhi', lable: '政治' }
      ],
      tableInfoTwo: [
        { prop: 'kemu', lable: '学科' },
        { prop: 'leibie', lable: '类别' },
        { prop: 'renshu', lable: '人数' },
        { prop: 'pingjun', lable: '平均分' },
        { prop: 'biaozhun', lable: '标准差' },
        { prop: 'gaofen', lable: '高分人数' },
        { prop: 'gaofenlv', lable: '高分率' },
        { prop: 'youxiu', lable: '优秀人数' },
        { prop: 'youxiulv', lable: '优秀率' },
        { prop: 'lianghao', lable: '良好人数' },
        { prop: 'lianghaolv', lable: '良好率' },
        { prop: 'jige', lable: '及格人数' },
        { prop: 'jigelv', lable: '及格率' },
        { prop: 'difen', lable: '低分人数' },
        { prop: 'difenlv', lable: '低分率' },
        { prop: 'chaoju', lable: '超均人数' },
        { prop: 'chaojulv', lable: '超均率' }
      ],
      tableInfoThree: [
        { prop: 'date', lable: '日期' },
        { prop: 'name', lable: '考试名称' },
        { prop: 'pingjun', lable: '平均分' },
        { prop: 'biaozhun', lable: '标准差' }
      ],
      tableInfoFour: [
        { prop: 'date', lable: '日期' },
        { prop: 'name', lable: '考试名称' },
        { prop: 'xueke', lable: '学科' },
        { prop: 'renshu', lable: '年级人数' },
        { prop: 'gaofen', lable: '高分人数' },
        { prop: 'gaofenlv', lable: '高分率' },
        { prop: 'youxiu', lable: '优秀人数' },
        { prop: 'youxiulv', lable: '优秀率' },
        { prop: 'lianghao', lable: '良好人数' },
        { prop: 'lianghaolv', lable: '良好率' },
        { prop: 'jige', lable: '及格人数' },
        { prop: 'jigelv', lable: '及格率' },
        { prop: 'difen', lable: '低分人数' },
        { prop: 'difenlv', lable: '低分率' },
        { prop: 'chaojun', lable: '超均人数' },
        { prop: 'chaojunlv', lable: '超均率' }
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
