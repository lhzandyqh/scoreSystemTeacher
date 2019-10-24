<template>
  <div class="tablecontainer">
    <el-table
      :data="inTermSixRatesData"
      align="center"
      border
      height="300"
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
  name: 'ClassSixRatesCom',
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
