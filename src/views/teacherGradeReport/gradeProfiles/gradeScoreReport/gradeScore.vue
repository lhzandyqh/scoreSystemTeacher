<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 25px;color: #2ac06d">—年级成绩单—</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <el-col :span="5">
        <el-input v-model="input3" placeholder="请输入学生姓名进行查询" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </el-col>
    </el-row>
    <el-row style="padding-top: 20px">
      <grade-score-table :all-grade-table-data="allGradeTableData" :table-header="tableInfo" />
    </el-row>
    <el-row style="padding-top: 20px">
      <class-statistic-chart />
    </el-row>
  </div>
</template>

<script>
import gradeScoreTable from '@/views/teacherGradeReport/gradeProfiles/gradeScoreReport/tableAndChart/gradeScoreTable'
import classStatisticChart from '@/views/teacherGradeReport/gradeProfiles/gradeScoreReport/tableAndChart/classStatisticChart'
import { getGradeScoreTableData } from '@/api/gradeProfilesData'
export default {
  name: 'GradeScore',
  components: { gradeScoreTable, classStatisticChart },
  data() {
    return {
      input3: '',
      allGradeTableData: [],
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
      ]
    }
  },
  mounted() {
    this.getGradeTableData()
  },
  methods: {
    getGradeTableData: function() {
      getGradeScoreTableData().then(response => {
        console.log('年级概况测试是否能够拿到年级成绩单数据')
        console.log(response.data)
        this.allGradeTableData = response.data.info
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
