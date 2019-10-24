<template>
  <div class="app-container">
    <el-row />
    <el-row>
      <el-col :span="12">
        <div id="frontrank" style="width:500px;height: 400px" />
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">前100名学生名单</span>
            <el-button style="float: right; padding: 3px 0" type="text">上一页</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">下一页</el-button>
          </div>
          <div>
            <!--            <span style="font-size: 14px">孙金鑫</span><br>-->
            <!--            <span style="font-size: 14px">邓庆东</span>-->
            <el-row :gutter="20">
              <el-col :span="4">
                <span style="font-size: 14px">齐俊超</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">吴思琪</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">段红瑞</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">陈科</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">孙金鑫</span>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 20px">
              <el-col :span="4">
                <span style="font-size: 14px">杜明</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">刘静怡</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">高紫燕</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">赵明凯</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size: 14px">陈瑞芬</span>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 70%"
        >
          <el-table-column
            prop="class"
            align="center"
            label="班级/行政班"
            width="150"
          />
          <el-table-column
            prop="frontone"
            align="center"
            label="校前100名人数"
            width="160"
          />
          <el-table-column
            prop="fronttwo"
            align="center"
            label="校100-200名人数"
            width="160"
          />
          <el-table-column
            prop="frontthree"
            align="center"
            label="校200-300名人数"
          />
          <el-table-column
            prop="frontthree"
            align="center"
            label="校300-400名人数"
          />
          <el-table-column
            prop="frontthree"
            align="center"
            label="校400名之后人数"
          />
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getDefaultFrontNData } from '@/api/banzhurenGetData'
require('echarts/theme/macarons')
export default {
  name: 'SubjectFrontRankChart',
  props: {
    subject: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: window.localStorage.getItem('id'),
      tableData: [{
        class: '一班',
        frontone: '15',
        fronttwo: '15',
        frontthree: '23'
      }],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['前100名', '前100-200名', '前200-300名', '前300-400名', '400名之后'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '人数',
            type: 'bar',
            barWidth: '40%',
            data: [15, 30, 53, 34, 34]
          }
        ]
      }
    }
  },
  mounted() {
    // this.initChart()
    this.getChartData()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('frontrank'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subject
      }
      getDefaultFrontNData(prams).then(response => {
        console.log('测试班主任前N名分布默认')
        console.log(response.data)
        this.option.series[0].data[0] = response.data.info.oneHunderdnum
        this.option.series[0].data[1] = response.data.info.twoHundrednum
        this.option.series[0].data[2] = response.data.info.threeHundernum
        this.option.series[0].data[3] = response.data.info.fourHundernum
        this.option.series[0].data[4] = response.data.info.othernum
        setTimeout(() => {
          this.initChart()
        }, 1000)
      })
    }
  }
}
</script>

<style scoped>
  .box-card{
    width: 80%;
    margin-top: 60px;
    margin-left: 40px;
  }
  .table{
    margin-left: 20%;
    margin-top: 20px;
  }

</style>
