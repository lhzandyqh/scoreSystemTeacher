<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-size: 30px;font-weight: bolder;color: #27ba6e">-最新成绩信息-</span>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <rank-distribution-chart />
      </el-col>
    </el-row>
    <el-row>
      <class-rank-table />
    </el-row>
    <el-row>
      <subject-average-chart />
    </el-row>
    <el-row>
      <class-statistic-chart />
    </el-row>
  </div>
</template>

<script>
import rankDistributionChart from '@/views/teacherHomePage/charts/rankDistributionChart'
import classRankTable from '@/views/teacherHomePage/charts/classRankTable'
import subjectAverageChart from '@/views/teacherHomePage/charts/subjectAverageChart'
import classStatisticChart from '@/views/teacherHomePage/charts/classStatisticChart'
// import classRankTable from '@views/fuyongTable/classRankTable'
export default {
  name: 'HomeIndex',
  components: { rankDistributionChart, classRankTable, subjectAverageChart, classStatisticChart }
}
</script>

<style scoped>
  .title{
    margin-top: 50px;
    text-align: center;
  }

</style>
