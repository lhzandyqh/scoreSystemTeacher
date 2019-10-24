<template>
  <div class="tablecontainer">
    <el-table
      :data="singleScoreData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      align="center"
      height="300"
      border
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
        :page-sizes="[10, 20, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="singleScoreData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleScoreTable',
  props: {
    singleScoreData: {
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
    // setTimeout(() => {
    //   this.controlLoading()
    // }, 500)
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
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
