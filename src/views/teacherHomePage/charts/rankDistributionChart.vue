<template>
  <div class="app-container">
    <el-row>
      <span style="font-size: 20px;font-weight: bolder">等级分布图</span>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-col :span="24">
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
              <el-select v-model="valuetwo" placeholder="请选择科目">
                <el-option
                  v-for="item in optionsTwo"
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
      <!--      <el-col :span="8">-->
      <!--        <div class="card-container">-->
      <!--          <el-card class="box-card">-->
      <!--            <div class="title">-->
      <!--              <span style="font-size: 20px;font-weight: bolder">高分【90%-100%】学生名单</span>-->
      <!--            </div>-->
      <!--            <div class="content">-->
      <!--              <span style="font-size: 18px">刘晓明</span>-->
      <!--              <span style="font-size: 18px">陈元</span>-->
      <!--            </div>-->
      <!--          </el-card>-->
      <!--        </div>-->
      <!--      </el-col>-->
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
      value: '',
      valuetwo: '',
      options: [{
        value: '选项1',
        label: '一班'
      }, {
        value: '选项2',
        label: '二班'
      }, {
        value: '选项3',
        label: '三班'
      }, {
        value: '选项4',
        label: '四班'
      }, {
        value: '选项5',
        label: '五班'
      }],
      optionsTwo: [{
        value: '选项1',
        label: '语文'
      }, {
        value: '选项2',
        label: '数学'
      }, {
        value: '选项3',
        label: '英语'
      }, {
        value: '选项4',
        label: '物理'
      }, {
        value: '选项5',
        label: '化学'
      }, {
        value: '选项6',
        label: '生物'
      }, {
        value: '选项7',
        label: '历史'
      }, {
        value: '选项8',
        label: '政治'
      }, {
        value: '选项9',
        label: '地理'
      }],
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
          right: 'right',
          data: ['高分【90%-100%】', '优秀【85%-90%】', '良好【75%-85%】', '及格【60%-75%】', '低分【0%-60%】'],
          top: 50
        },
        series: [
          {
            name: '等级分布',
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
