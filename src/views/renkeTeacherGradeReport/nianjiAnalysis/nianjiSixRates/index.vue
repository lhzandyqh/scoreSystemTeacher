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
      <grade-six-rates-table :all-grade-six-rates-data="allGradeSixRatesData" :table-header="tableInfo" :loading="loading" />
    </el-row>
    <!--    <el-row style="padding-top: 20px">-->
    <!--      <div class="title">-->
    <!--        <span style="font-size: 25px;color: #2ac06d">—年级成绩六率各班级对比图—</span>-->
    <!--      </div>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
import gradeSixRatesTable from '@/views/renkeTeacherGradeReport/nianjiAnalysis/nianjiSixRates/tableAndChart/gradeSixRatesTable'
import { getGradeSixRatesData } from '@/api/gradeProfilesData'
export default {
  name: 'GradeRates',
  components: { gradeSixRatesTable },
  data() {
    return {
      loading: true,
      id: window.localStorage.getItem('id'),
      allGradeSixRatesData: [],
      tableInfo: [
        { prop: 'subjectname', lable: '学科' },
        { prop: 'classid', lable: '班级' },
        { prop: 'personsum', lable: '人数' },
        { prop: 'scoreAvg', lable: '平均分' },
        { prop: 'StandardDiviation', lable: '标准差' },
        { prop: 'highnum', lable: '高分人数' },
        { prop: 'highnumradio', lable: '高分率' },
        { prop: 'excellentstudents', lable: '优秀人数' },
        { prop: 'excellentratio', lable: '优秀率' },
        { prop: 'mediumnum', lable: '良好人数' },
        { prop: 'mediumratio', lable: '良好率' },
        { prop: 'passnumbers', lable: '及格人数' },
        { prop: 'passratio', lable: '及格率' },
        { prop: 'failnum', lable: '低分人数' },
        { prop: 'failratio', lable: '低分率' },
        { prop: 'beyondnum', lable: '超均人数' },
        { prop: 'beyondradio', lable: '超均率' }
      ]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData: function() {
      const prams = {
        userID: this.id
      }
      getGradeSixRatesData(prams).then(response => {
        console.log('测试有没有拿到六率数据')
        console.log(response.data)
        this.allGradeSixRatesData = response.data.info
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
  }

</style>
