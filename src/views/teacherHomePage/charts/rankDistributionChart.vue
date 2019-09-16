<template>
  <div class="app-container">
    <el-row>
      <span style="font-size: 20px;font-weight: bolder">等级分布图</span>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-col :span="16">
        <div class="select">
          <el-row>
            <el-col :span="4">
              <el-select v-model="value" placeholder="请选择班级">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-select v-model="value" placeholder="请选择科目">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
          </el-row>
        </div>
        <div id="rankDis" style="width:100%;height: 400px" />
      </el-col>
      <el-col :span="8">
        <div class="card-container">
          <el-card class="box-card">
            <div class="title">
              <span style="font-size: 20px;font-weight: bolder">高分【90%-100%】学生名单</span>
            </div>
            <el-divider />
            <div class="content">
              <span style="font-size: 18px">刘晓明</span>
              <span style="font-size: 18px">陈元</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'RankDistributionChart',
  data() {
    return {
      option: {
        title: {
          // text: '某站点用户访问来源',
          // subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['高分【90%-100%】', '优秀【85%-90%】', '良好【75%-85%】', '及格【60%-75%】', '低分【0%-60%】']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '高分【90%-100%】' },
              { value: 310, name: '优秀【85%-90%】' },
              { value: 234, name: '良好【75%-85%】' },
              { value: 135, name: '及格【60%-75%】' },
              { value: 1548, name: '低分【0%-60%】' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('rankDis'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
  .select{
    margin-bottom: 20px;
  }
  .box-card{
    width: 100%;
    height: 400px;
  }
  .card-container{
  }
  .title{
    text-align: center;
    margin-top: 30px;
  }
  .content{
    margin-top: 40px;
  }
</style>
