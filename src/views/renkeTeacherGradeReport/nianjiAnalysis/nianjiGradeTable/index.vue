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
      <!--      <el-col :span="3">-->
      <!--        <el-select v-model="value" placeholder="请选择">-->
      <!--          <el-option-->
      <!--            v-for="item in options"-->
      <!--            :key="item.value"-->
      <!--            :label="item.label"-->
      <!--            :value="item.value"-->
      <!--          />-->
      <!--        </el-select>-->
      <!--      </el-col>-->
      <el-col :span="4">
        <el-input v-model="input3" placeholder="请输入学生姓名查询" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </el-col>
    </el-row>
    <el-row style="padding-top: 20px">
      <single-score-table :single-score-data="singleScoreData" :table-header="tableInfo" :loading="loading" />
    </el-row>
  </div>
</template>

<script>
import singleScoreTable from '@/views/renkeTeacherGradeReport/nianjiAnalysis/nianjiGradeTable/tableAndChart/singleScoreTable'
import { getTeachClassSingleSubjetClassTable } from '@/api/gradeProfilesData'
export default {
  name: 'SingleSubject',
  components: { singleScoreTable },
  data() {
    return {
      input3: '',
      singleScoreData: [],
      loading: true,
      id: window.localStorage.getItem('id'),
      tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentnuber', lable: '考号' },
        { prop: 'studentname', lable: '姓名' },
        { prop: 'classname', lable: '班级/行政班' },
        { prop: 'score', lable: '成绩' },
        { prop: 'classindex', lable: '班名次' },
        { prop: 'schoolindex', lable: '校名次' },
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
  },
  mounted() {
    this.getSingleSubjectData()
  },
  methods: {
    getSingleSubjectData: function() {
      const prams = {
        userID: this.id
      }
      getTeachClassSingleSubjetClassTable(prams).then(response => {
        console.log('测试年级分析拿到的单科成绩单数据')
        console.log(response.data.info)
        this.singleScoreData = response.data.info
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
