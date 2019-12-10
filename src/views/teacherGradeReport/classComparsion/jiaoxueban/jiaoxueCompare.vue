<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择科目</span>
        </div>
        <div class="select">
          <el-select v-model="subjectValue" placeholder="请选择" @change="updateData">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="mainContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="班级六率对比" name="first">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—班级六率对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-six-rates-comparison-chart ref="six" :subject="subjectValue" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—班级六率对比表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-class-six-rates-com :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfo" />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="全校前N名上线分布对比" name="second">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名上线分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-front-n-rank-chart ref="front" :subject="subjectValue" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名上线分布表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-front-n-rank :front-data="frontData" :table-header="tableInfoTwo" />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import jiaoxueClassSixRatesCom from '@/views/teacherGradeReport/classComparsion/jiaoxueban/tableAndChart/jiaoxueClassSixRatesCom'
import jiaoxueSixRatesComparisonChart from '@/views/teacherGradeReport/classComparsion/jiaoxueban/tableAndChart/jiaoxueSixRatesComparisonChart'
import jiaoxueFrontNRank from '@/views/teacherGradeReport/classComparsion/jiaoxueban/tableAndChart/jiaoxueFrontNRank'
import jiaoxueFrontNRankChart from '@/views/teacherGradeReport/classComparsion/jiaoxueban/tableAndChart/jiaoxueFrontNRankChart'
import { getClassCompareJiaoxueSixRateaData, getClassCompareJiaoxueFrontNData } from '@/api/nianjizhurenGetData'
export default {
  name: 'JiaoxueCompare',
  components: { jiaoxueClassSixRatesCom, jiaoxueSixRatesComparisonChart, jiaoxueFrontNRank, jiaoxueFrontNRankChart },
  data() {
    return {
      activeName: 'first',
      inTermSixRatesData: [],
      frontData: [],
      id: window.localStorage.getItem('id'),
      subjectValue: '物理',
      options: [{
        value: '物理',
        label: '物理'
      }, {
        value: '化学',
        label: '化学'
      }, {
        value: '生物',
        label: '生物'
      }, {
        value: '政治',
        label: '政治'
      }, {
        value: '历史',
        label: '历史'
      }, {
        value: '地理',
        label: '地理'
      }],
      tableInfo: [
        // { prop: 'id', lable: '年级' },
        // { prop: 'subjectname', lable: '班级' },
        { prop: 'classid', lable: '班级' },
        { prop: 'highnum', lable: '高分人数' },
        { prop: 'highnumradio', lable: '高分率' },
        // { prop: 'coversionTotal', lable: '高分率排名' },
        { prop: 'excellentstudents', lable: '优秀人数' },
        { prop: 'excellentratio', lable: '优秀率' },
        // { prop: 'advancefall', lable: '优秀率排名' },
        { prop: 'goodnumbers', lable: '良好人数' },
        { prop: 'goodratio', lable: '良好率' },
        // { prop: 'yingyuScore', lable: '良好率排名' },
        { prop: 'passnumbers', lable: '及格人数' },
        { prop: 'passratio', lable: '及格率' },
        // { prop: 'huaxueCoversion', lable: '及格率排名' },
        { prop: 'failnum', lable: '低分人数' },
        { prop: 'failratio', lable: '低分率' },
        // { prop: 'diliCoversion', lable: '低分率排名' },
        { prop: 'beyondnum', lable: '超均人数' },
        { prop: 'beyondradio', lable: '超均率' }
        // { prop: 'zhengzhiCoversion', lable: '超均率排名' }
      ],
      tableInfoTwo: [
        // { prop: 'gradename', lable: '年级' },
        { prop: 'classid', lable: '班级/行政班' },
        { prop: 'oneHunderdnum', lable: '校前100名人数' },
        // { prop: 'yibairank', lable: '前100名排名' },
        { prop: 'twoHundrednum', lable: '校前100-200名人数' },
        // { prop: 'liangbairank', lable: '前100-200名排名' },
        { prop: 'threeHundernum', lable: '校前200-300名人数' },
        // { prop: 'sanbairank', lable: '校前200-300名排名人数排名' },
        { prop: 'fourHundernum', lable: '校前300-400人数' },
        // { prop: 'sanbairank', lable: '校前300-400名排名人数' },
        { prop: 'othernum', lable: '校400名后人数数' }
        // { prop: 'sanbairank', lable: '校400名后人数排名' }
      ]
    }
  },
  mounted() {
    this.getSixRatesData()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getSixRatesData: function() {
      const prams = {
        userID: this.id,
        subjectname: this.subjectValue
      }
      getClassCompareJiaoxueSixRateaData(prams).then(response => {
        console.log('年级主任教学班班级对比测试是否拿到六率数据')
        console.log(response.data)
        this.inTermSixRatesData = response.data.info.sort(this.compare('classid'))
      })
      getClassCompareJiaoxueFrontNData(prams).then(response => {
        console.log('年级主任教学班班级对比测试是否拿到前N名数据')
        console.log(response.data)
        this.frontData = response.data.info.sort(this.compare('classid'))
      })
    },
    updateData: function() {
      this.getSixRatesData()
      setTimeout(() => {
        this.$refs.six.firstGetChartData()
        this.$refs.front.firstGetChartData()
      }, 1000)
    },
    compare: function(property) {
      return function(a, b) {
        var value1 = a[property]
        var value2 = b[property]
        return value1 - value2
      }
    }
  }
}
</script>

<style scoped>
  .selectContainer{
    float: right;
  }
  .shuoming{
    float: left;
    padding-top: 10px;
  }
  .select{
    float: right;
    padding-left: 10px;
  }
  .title{
    text-align: center;
  }

</style>
