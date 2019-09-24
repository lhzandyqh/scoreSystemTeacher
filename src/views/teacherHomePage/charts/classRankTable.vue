<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      height="300"
      style="width: 100%"
    >
      <el-table-column
        prop="kemu"
        label="科目"
        align="center"
        width="80"
      />
      <el-table-column
        prop="renshu"
        align="center"
        label="班级"
        width="80"
      />
      <el-table-column
        prop="renshu"
        align="center"
        label="班级人数"
        width="80"
      />
      <el-table-column align="center" label="高分【90%~100%】">
        <el-table-column
          prop="gaofen"
          align="center"
          label="高分人数"
          width="100"
        />
        <el-table-column
          prop="gaofenlv"
          align="center"
          label="高分率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="优秀【85%~90%】">
        <el-table-column
          prop="youxiu"
          align="center"
          label="优秀人数"
          width="100"
        />
        <el-table-column
          prop="youxiulv"
          align="center"
          label="优秀率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="良好【75%~85%】">
        <el-table-column
          prop="lianghao"
          align="center"
          label="良好人数"
          width="100"
        />
        <el-table-column
          prop="lianghaolv"
          align="center"
          label="良好率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="及格【60%~75%】">
        <el-table-column
          prop="jige"
          align="center"
          label="及格人数"
          width="100"
        />
        <el-table-column
          align="center"
          prop="jigelv"
          label="及格率"
          width="100"
        />
      </el-table-column>
      <el-table-column align="center" label="低分【0%~60%】">
        <el-table-column
          prop="difen"
          align="center"
          label="低分人数"
          width="120"
        />
        <el-table-column
          prop="difenlv"
          align="center"
          label="低分率"
        />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ClassRankTable',
  data() {
    return {
      tableData: [
        {
          kemu: '语文',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        }, {
          kemu: '语文',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        }, {
          kemu: '语文',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        }, {
          kemu: '语文',
          renshu: '456',
          gaofen: '35',
          gaofenlv: '12%',
          youxiu: '78',
          youxiulv: '25%',
          lianghao: '120',
          lianghaolv: '34%',
          jige: '400',
          jigelv: '84%',
          difen: '56',
          difenlv: '16%'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
