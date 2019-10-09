<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 25px;color: #2ac06d">—年级成绩六率分析—</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <grade-six-rates-table :all-grade-six-rates-data="allGradeSixRatesData" :table-header="tableInfo" />
    </el-row>
  </div>
</template>

<script>
import gradeSixRatesTable from '@/views/teacherGradeReport/gradeAnalysis/gradeSixRates/tableAndChart/gradeSixRatesTable'
export default {
  name: 'GradeRates',
  components: { gradeSixRatesTable },
  data() {
    return {
      allGradeSixRatesData: [],
      tableInfo: [
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
      ]
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
  }

</style>
