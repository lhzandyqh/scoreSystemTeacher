<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <!--        <span style="font-size: 30px;font-weight: bolder;color: #27ba6e">-最新成绩信息-</span>-->
      </div>
    </el-row>
    <div v-if="role === '政治任课教师'|| role === '班主任'|| role === '物理任课教师' ">
      <el-row>
        <el-col :span="24">
          <jiaoshi-class-rank-chart />
        </el-col>
      </el-row>
    </div>
    <div v-if="role === '年级主任'">
      <el-row>
        <el-col :span="24">
          <rank-distribution-chart />
        </el-col>
      </el-row>
    </div>
    <!--    <el-row>-->
    <!--      <class-rank-table />-->
    <!--    </el-row>-->
    <!--    <div v-if="role === '政治任课教师'">-->
    <!--      <el-row>-->
    <!--        <el-col :span="24">-->
    <!--          <jiaoshi-subject-average-chart />-->
    <!--        </el-col>-->
    <!--      </el-row>-->
    <!--    </div>-->
    <div v-if="role === '年级主任'|| role === '班主任'">
      <el-row>
        <el-col :span="24">
          <subject-average-chart />
        </el-col>
      </el-row>
    </div>
    <div v-if="role === '年级主任'">
      <el-row>
        <el-col :span="24">
          <class-statistic-chart />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import rankDistributionChart from '@/views/teacherHomePage/charts/rankDistributionChart'
// import classRankTable from '@/views/teacherHomePage/charts/classRankTable'
import subjectAverageChart from '@/views/teacherHomePage/charts/subjectAverageChart'
import classStatisticChart from '@/views/teacherHomePage/charts/classStatisticChart'
import jiaoshiClassRankChart from '@/views/teacherHomePage/charts/jiaoshiClassRankChart'
// import jiaoshiSubjectAverageChart from '@/views/teacherHomePage/charts/jiaoshiSubjectAverageChart'
import { getTeacherInformationData } from '@/api/homepageData'
// import classRankTable from '@views/fuyongTable/classRankTable'
export default {
  name: 'HomeIndex',
  components: { rankDistributionChart, subjectAverageChart, classStatisticChart, jiaoshiClassRankChart },
  data() {
    return {
      role: window.localStorage.getItem('userRole'),
      id: window.localStorage.getItem('id')
    }
  },
  mounted() {
    this.firstGetTeacherData()
  },
  methods: {
    firstGetTeacherData: function() {
      const prams = {
        userID: this.id
      }
      getTeacherInformationData(prams).then(response => {
        console.log('测试是否能够拿到老师的个人信息')
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>
  .title{
    margin-top: 0px;
    text-align: center;
  }

</style>
