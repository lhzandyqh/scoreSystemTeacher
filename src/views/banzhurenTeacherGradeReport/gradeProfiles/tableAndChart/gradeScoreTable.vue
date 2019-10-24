<template>
  <div class="tablecontainer">
    <span style="font-size: 12px;">向上的红色箭头“↑5”表示前进5名 向下的绿色箭头“↓5”表示后退5名 “0”表示排名无变化 “--”表示未获得上次考试信息</span>
    <el-table
      v-loading="loading"
      :data="allGradeTableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      align="center"
      border
      height="400"
      style="width: 100%;margin-top:10px;"
    >
      <el-table-column
        v-for="(item,index) in tableHeader"
        :key="index"
        :prop="item.prop"
        :label="item.lable"
        align="center"
      />
    </el-table>
    <div class="fenye">
      <el-pagination
        style="margin-top:20px;"
        :current-page="currentPage"
        :page-sizes="[20, 50, 80, 150]"
        :page-size="150"
        layout="total, sizes, prev, pager, next, jumper"
        :total="allGradeTableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradeScoreTable',
  props: {
    allGradeTableData: {
      type: Array,
      required: true
    },
    tableHeader: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      currentPage: 1,
      pagesize: 10
    }
  },
  mounted() {
    setTimeout(() => {
      this.controlLoading()
    }, 500)
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    },
    controlLoading: function() {
      if (this.allGradeTableData.length !== 0) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
