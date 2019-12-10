<template>
  <div class="app-container">
    <el-row />
    <el-row>
      <el-col :span="12">
        <div id="frontrank" style="width:500px;height: 400px" />
      </el-col>
      <el-col :span="12">
        <el-row>
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
        </el-row>
        <el-row>
          <div class="table">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="class"
                align="center"
                label="班级/行政班"
              />
              <el-table-column
                prop="frontone"
                align="center"
                label="校前100名人数"
              />
              <el-table-column
                prop="fronttwo"
                align="center"
                label="校100-200名人数"
              />
              <el-table-column
                prop="frontthree"
                align="center"
                label="校200-300名人数"
              />
              <el-table-column
                prop="frontfour"
                align="center"
                label="校300-400名人数"
              />
              <el-table-column
                prop="afterfour"
                align="center"
                label="校400名后人数"
              />
            </el-table>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClassAnalysisXingzhengFrontNData } from '@/api/nianjizhurenGetData'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'FrontRankChart',
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
      id: window.localStorage.getItem('id'),
      tableData: [
        {
          class: '一班',
          frontone: 0,
          fronttwo: 0,
          frontthree: 0,
          frontfour: 0,
          afterfour: 0
        }
      ],
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
            data: ['前100名', '前100-200名', '前200-300名', '前300-400', '400名后'],
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
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.getChartData()
    // this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('frontrank'), 'macarons')
      this.chart.setOption(this.option)
    },
    getChartData: function() {
      const prams = {
        userID: this.id,
        classname: this.classname
      }
      getClassAnalysisXingzhengFrontNData(prams).then(response => {
        console.log('年级主任行政班前N名分布')
        this.option.series[0].data = []
        console.log(response.data)
        this.option.series[0].data.push(response.data.info.oneHundrednum)
        this.option.series[0].data.push(response.data.info.twoHundrednum)
        this.option.series[0].data.push(response.data.info.threeHundernum)
        this.option.series[0].data.push(response.data.info.fourHundernum)
        this.option.series[0].data.push(response.data.info.othernum)
        // this.tableData.push(response.data.info)
        this.tableData[0].class = this.classname
        this.tableData[0].frontone = response.data.info.oneHundrednum
        this.tableData[0].fronttwo = response.data.info.twoHundrednum
        this.tableData[0].frontthree = response.data.info.threeHundernum
        this.tableData[0].frontfour = response.data.info.fourHundernum
        this.tableData[0].afterfour = response.data.info.othernum
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
    /*margin-left: 20%;*/
    margin-top: 20px;
  }

</style>
