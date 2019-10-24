<template>
  <div class="app-container">
    <el-row style="padding-top: 70px">
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
import { getGradeSixRatesData } from '@/api/banzhurenGetData'
import gradeSixRatesTable from '@/views/banzhurenTeacherGradeReport/gradeAnalysis/tableAndChart/gradeSixRatesTable'
export default {
  name: 'GradeRates',
  components: { gradeSixRatesTable },
  data() {
    return {
      allGradeSixRatesData: [],
      id: window.localStorage.getItem('id'),
      tableInfo: [
        { prop: 'subjectname', lable: '学科' },
        { prop: 'leibie', lable: '类别' },
        { prop: 'renshu', lable: '人数' },
        { prop: 'scoreAvg', lable: '平均分' },
        { prop: 'StandardDiviation', lable: '标准差' },
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
      ]
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData: function() {
      const prams = {
        userID: this.id
      }
      getGradeSixRatesData(prams).then(resposne => {
        console.log('检查班主任六率数据')
        console.log(resposne.data)
        this.allGradeSixRatesData = resposne.data.info
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
