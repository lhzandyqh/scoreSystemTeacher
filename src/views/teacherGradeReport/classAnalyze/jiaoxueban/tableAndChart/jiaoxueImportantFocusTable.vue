<template>
  <div class="app-container">
    <div class="tableContent">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-table
            :data="tableDataThree"
            style="width: 73%"
          >
            <el-table-column align="center" label="前5名">
              <el-table-column
                prop="studentname"
                label="姓名"
                align="center"
              />
              <el-table-column
                prop="classscore"
                label="分数"
                align="center"
              />
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <el-table
            :data="tableDataTwo"
            style="width: 73%"
          >
            <el-table-column align="center" label="后5名">
              <el-table-column
                prop="studentname"
                label="姓名"
                align="center"
              />
              <el-table-column
                prop="classscore"
                label="分数"
                align="center"
              />
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <el-table
            :data="tableData"
            style="width: 73%"
          >
            <el-table-column align="center" label="进步最大前5名">
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
              />
              <el-table-column
                prop="score"
                label="进步名次"
                align="center"
              />
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <el-table
            :data="tableData"
            style="width: 73%"
          >
            <el-table-column align="center" label="退步最大前5名">
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
              />
              <el-table-column
                prop="score"
                label="退步名次"
                align="center"
              />
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getClassAnalysisJiaoxueFrontFiveData, getClassAnalysisJiaoxueBehindFiveData } from '@/api/nianjizhurenGetData'
export default {
  name: 'ImportantFocusOnTable',
  props: {
    subject: {
      type: String,
      required: true
    },
    classname: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      tableDataThree: [],
      tableDataTwo: [],
      tableData: [{
        name: '柯璐雅',
        score: 666
      }, {
        name: '李宗广',
        score: 665
      }, {
        name: '高子妍',
        score: 664
      }, {
        name: '刘静怡',
        score: 663
      }, {
        name: '齐俊超',
        score: 662
      }]
    }
  },
  mounted() {
    setTimeout(() => {
      this.getFiveData()
    }, 1000)
  },
  methods: {
    getFiveData: function() {
      const prams = {
        userID: this.id,
        classname: this.classname,
        subjectname: this.subject
      }
      getClassAnalysisJiaoxueFrontFiveData(prams).then(response => {
        console.log('检查年级主任教学班班级分析重点关注前5')
        console.log(response.data)
        this.tableDataThree = response.data.info
      })
      getClassAnalysisJiaoxueBehindFiveData(prams).then(response => {
        console.log('检查年级主任教学班班级分析重点关注后5')
        console.log(response.data)
        this.tableDataTwo = response.data.info
      })
    }
  }
}
</script>

<style scoped>
  .examName{
    padding-top: 20px;
  }
  .title{
    padding-top: 20px;
  }
  .tableContent{
    margin:0px auto;
    padding-top: 20px;
  }

</style>
