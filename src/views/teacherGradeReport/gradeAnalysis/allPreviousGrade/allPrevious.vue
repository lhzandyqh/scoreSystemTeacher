<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">-年级历次成绩分析-</span>
      </div>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-col :span="4">
        <el-select v-model="value" placeholder="请选择科目">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row style="paddig-top: 20px">
      <el-col :span="12">
        <el-row style="padding-top: 20px">
          <div class="title">
            <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分表-</span>
          </div>
        </el-row>
        <el-row style="padding-top: 20px">
          <term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfo" />
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row style="padding-top: 20px">
          <div class="title">
            <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
          </div>
        </el-row>
        <el-row style="padding-top: 20px">
          <term-trend-chart />
        </el-row>
      </el-col>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩年级六率表-</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoTwo" />
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩年级六率对比图-</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <in-term-six-rates-chart />
    </el-row>
  </div>
</template>

<script>
import termGradeAverageTable from '@/views/teacherGradeReport/gradeAnalysis/allPreviousGrade/tableAndChart/termGradeAverageTable'
import termTrendChart from '@/views/teacherGradeReport/gradeAnalysis/allPreviousGrade/tableAndChart/termTrendChart'
import inTermSixRatesTable from '@/views/teacherGradeReport/gradeAnalysis/allPreviousGrade/tableAndChart/inTermSixRatesTable'
import inTermSixRatesChart from '@/views/teacherGradeReport/gradeAnalysis/allPreviousGrade/tableAndChart/inTermSixRatesChart'
export default {
  name: 'AllPrevious',
  components: { inTermSixRatesTable, termGradeAverageTable, termTrendChart, inTermSixRatesChart },
  data() {
    return {
      termAverageData: [],
      inTermSixRatesData: [],
      tableInfo: [
        { prop: 'id', lable: '日期' },
        { prop: 'studentMachineCard', lable: '考试名称' },
        { prop: 'studentName', lable: '平均分' },
        { prop: 'classId', lable: '标准差' }
      ],
      tableInfoTwo: [
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
      value: '',
      options: [{
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
        value: '政治',
        label: '政治'
      }, {
        value: '历史',
        label: '历史'
      }, {
        value: '地理',
        label: '地理'
      }]
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
    }
</style>
