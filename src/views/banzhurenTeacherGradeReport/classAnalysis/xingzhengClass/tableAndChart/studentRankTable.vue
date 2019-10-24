<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="subjectname"
        label="科目"
        align="center"
        width="80"
      />
      <el-table-column
        prop="personsum"
        align="center"
        label="班级人数"
        width="80"
      />
      <el-table-column align="center" label="高分【90%~100%】">
        <el-table-column
          prop="highnum"
          align="center"
          label="高分人数"
          width="100"
        />
        <el-table-column
          prop="highnumradio"
          align="center"
          label="高分率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="优秀【85%~90%】">
        <el-table-column
          prop="excellentstudents"
          align="center"
          label="优秀人数"
          width="100"
        />
        <el-table-column
          prop="excellentratio"
          align="center"
          label="优秀率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="良好【75%~85%】">
        <el-table-column
          prop="goodnumbers"
          align="center"
          label="良好人数"
          width="100"
        />
        <el-table-column
          prop="goodratio"
          align="center"
          label="良好率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="及格【60%~75%】">
        <el-table-column
          prop="passnumbers"
          align="center"
          label="及格人数"
          width="100"
        />
        <el-table-column
          align="center"
          prop="passratio"
          label="及格率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="低分【0%~60%】">
        <el-table-column
          prop="failnum"
          align="center"
          label="低分人数"
          width="120"
        />
        <el-table-column
          prop="failratio"
          align="center"
          label="低分率"
        />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getHomeSubjectRankData } from '@/api/banzhurenGetData'
export default {
  name: 'StudentRankTable',
  data() {
    return {
      subject: '',
      id: window.localStorage.getItem('id'),
      tableData: []
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getHomeSubjectRankData(prams).then(response => {
        const mytabel = []
        mytabel.push(response.data.info)
        this.tableData = mytabel
        console.log('banzhuren  denngji table')
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
