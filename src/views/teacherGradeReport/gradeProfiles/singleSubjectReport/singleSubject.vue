<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 25px;color: #2ac06d">—单科成绩单—</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <el-col :span="3">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </el-col>
    </el-row>
    <el-row style="padding-top: 20px">
      <single-score-table :single-score-data="singleScoreData" :table-header="tableInfo" />
    </el-row>
  </div>
</template>

<script>
import singleScoreTable from '@/views/teacherGradeReport/gradeProfiles/singleSubjectReport/tableAndChart/singleScoreTable'
export default {
  name: 'SingleSubject',
  components: { singleScoreTable },
  data() {
    return {
      singleScoreData: [],
      tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentMachineCard', lable: '考号' },
        { prop: 'studentName', lable: '姓名' },
        { prop: 'classId', lable: '班级/行政班' },
        { prop: 'coversionTotal', lable: '成绩' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'classIndex', lable: '校名次' },
        { prop: 'advancefall', lable: '进步/后退' }
      ],
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
