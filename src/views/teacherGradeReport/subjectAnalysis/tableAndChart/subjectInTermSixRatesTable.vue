<template>
  <div class="tablecontainer">
    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      :data="inTermSixRatesData"
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
  </div>
</template>

<script>
export default {
  name: 'SubjectInTermSixRatesTable',
  props: {
    inTermSixRatesData: {
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

    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
