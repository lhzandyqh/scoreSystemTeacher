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
        <el-select v-model="value" placeholder="请选择科目" @change="changeLocationValue">
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
import { getSingleScoreTableData } from '@/api/banzhurenGetData'
import singleScoreTable from '@/views/banzhurenTeacherGradeReport/gradeProfiles/tableAndChart/singleScoreTable'
export default {
  name: 'SingleSubject',
  components: { singleScoreTable },
  data() {
    return {
      value: '',
      input3: '',
      subject: window.localStorage.getItem('mysubject'),
      singleScoreData: [
        { id: '0804501', subject: '语文', studentMachineCard: '34501', studentName: '罗楚元', classId: '9', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' },
        { id: '0804502', subject: '语文', studentMachineCard: '34501', studentName: '欧阳昱', classId: '3', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' },
        { id: '0804503', subject: '语文', studentMachineCard: '34501', studentName: '罗义诚', classId: '5', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' },
        { id: '0804504', subject: '语文', studentMachineCard: '34501', studentName: '陈楚', classId: '3', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' },
        { id: '0804505', subject: '语文', studentMachineCard: '34501', studentName: '李哲瀚', classId: '6', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' },
        { id: '0804506', subject: '语文', studentMachineCard: '34501', studentName: '宋思淼', classId: '2', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' },
        { id: '0804507', subject: '语文', studentMachineCard: '34501', studentName: '丁辰', classId: '1', coversionTotal: '80', classIndex: '9', schoolIndex: '45', advancefall: '4' }
      ],
      tableInfo: [
        // { prop: 'id', lable: '序号' },
        { prop: 'studentnuber', lable: '考号' },
        { prop: 'subjectname', lable: '科目' },
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
    this.getTableData()
  },
  methods: {
    getTableData: function() {
      const prams = {
        subjectname: this.subject
      }
      getSingleScoreTableData(prams).then(response => {
        console.log('检查班主任的单科成绩单获取数据')
        console.log(response.data)
        this.singleScoreData = response.data.info
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
