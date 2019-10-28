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
        <el-select v-model="value" placeholder="请选择" @change="changeLocationValue">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4" :offset="2">
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
import { getSingleSubjectTableData } from '@/api/nianjizhurenGetData'
import singleScoreTable from '@/views/teacherGradeReport/gradeProfiles/singleSubjectReport/tableAndChart/singleScoreTable'
export default {
  name: 'SingleSubject',
  components: { singleScoreTable },
  data() {
    return {
      value: '',
      input3: '',
      subject: window.localStorage.getItem('mysubject'),
      singleScoreData: [],
      tableInfo: [
        // { prop: 'id', lable: '序号' },
        { prop: 'machineCard', lable: '考号' },
        { prop: 'subject', lable: '科目' },
        { prop: 'studentName', lable: '姓名' },
        { prop: 'jiaoxueClass', lable: '班级/行政班' },
        { prop: 'Score', lable: '成绩' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'schoolIndex', lable: '校名次' },
        { prop: 'schoolForBackWards', lable: '进步/后退' }
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
    this.getTableData()
  },
  methods: {
    getTableData: function() {
      const prams = {
        subject: this.subject
      }
      getSingleSubjectTableData(prams).then(response => {
        console.log('检查年级主任的单科成绩单获取数据')
        console.log(response.data)
        this.singleScoreData = response.data.subjectScoreReport
      })
    },
    changeLocationValue: function(val) {
      let obj = {}
      obj = this.options.find((item) => {
        return item.value === val
      })
      let getName = ''
      getName = obj.label
      console.log('获取到的科目名' + getName)
      this.value = getName
      this.subject = getName
      this.getTableData()
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
  }

</style>
