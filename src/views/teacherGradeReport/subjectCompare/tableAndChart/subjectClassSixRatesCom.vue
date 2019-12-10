<template>
  <div class="tablecontainer">
    <el-table
      v-loading="loading"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      :data="inTermSixRatesData"
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
  </div>
</template>

<script>
export default {
  name: 'SubjectClassSixRatesCom',
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
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.controlLoading()
    }, 2000)
  },
  methods: {
    controlLoading: function() {
      if (this.inTermSixRatesData.length !== 0) {
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
