<template>
  <div class="tablecontainer">
    <!--    <span style="font-size: 12px;">高分率：90%-100% 优秀率：90%-100% 良好率：90%-100% 及格率：90%-100% 低分率：90%-100% 超均率：超过平均分比率</span>-->
    <el-table
      :data="termAverageData"
      align="center"
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
    <!--    <div class="fenye">-->
    <!--      <el-pagination-->
    <!--        style="margin-top:20px;"-->
    <!--        :current-page="currentPage4"-->
    <!--        :page-sizes="[100, 200, 300, 400]"-->
    <!--        :page-size="100"-->
    <!--        layout="total, sizes, prev, pager, next, jumper"-->
    <!--        :total="400"-->
    <!--        @size-change="handleSizeChange"-->
    <!--        @current-change="handleCurrentChange"-->
    <!--      />-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'TermGradeAverageTable',
  props: {
    termAverageData: {
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
      currentPage4: 4

    }
  },
  mounted() {
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
