<template>
  <div class="tablecontainer">
    <el-table
      v-loading="loading"
      :data="singleScoreData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
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
        :current-page="currentPage"
        :page-sizes="[50, 80, 100]"
        :page-size="50"
        :total="singleScoreData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
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
    loading: {
      type: Boolean,
      required: true
    },
    tableHeader: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 4,
      pagesize: 100
      // loading: true
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.controlLoading()
    // }, 7000)
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    controlLoading: function() {
      console.log('测试长度')
      console.log(this.singleScoreData.length)
      if (this.singleScoreData.length !== 0) {
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
