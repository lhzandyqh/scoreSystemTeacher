<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="subject"
        label="科目"
        align="center"
      />
      <el-table-column
        prop="numsOfClass"
        align="center"
        label="班级人数"
      />
      <el-table-column align="center" label="高分【90%~100%】">
        <el-table-column
          prop="highScoreNums"
          align="center"
          label="高分人数"
        />
        <el-table-column
          prop="highScoreRate"
          align="center"
          label="高分率"
        />
      </el-table-column>
      <el-table-column align="center" label="优秀【85%~90%】">
        <el-table-column
          prop="goodScoreNums"
          align="center"
          label="优秀人数"
        />
        <el-table-column
          prop="goodScoreRate"
          align="center"
          label="优秀率"
        />
      </el-table-column>
      <el-table-column align="center" label="良好【75%~85%】">
        <el-table-column
          prop="fineScorNums"
          align="center"
          label="良好人数"
        />
        <el-table-column
          prop="fineScoreRate"
          align="center"
          label="良好率"
        />
      </el-table-column>
      <el-table-column align="center" label="及格【60%~75%】">
        <el-table-column
          prop="passScoreNums"
          align="center"
          label="及格人数"
        />
        <el-table-column
          align="center"
          prop="passScoreRate"
          label="及格率"
        />
      </el-table-column>
      <el-table-column align="center" label="低分【0%~60%】">
        <el-table-column
          prop="lowScoreNums"
          align="center"
          label="低分人数"
        />
        <el-table-column
          prop="lowScoreRate"
          align="center"
          label="低分率"
        />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getRankChartDataBySubjectAndClass } from '@/api/nianjizhurenGetData'
export default {
  name: 'StudentRankTable',
  props: {
    // subject: {
    //   type: String,
    //   required: true
    // },
    classname: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.firstInitTabletByData()
  },
  methods: {
    firstInitTabletByData: function() {
      const prams = {
        subjectname: '全科',
        classname: this.classname
      }
      this.tableData = []
      getRankChartDataBySubjectAndClass(prams).then(response => {
        this.tableData.push(response.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
