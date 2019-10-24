<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 25px;color: #2ac06d">-年级历次成绩分析-</span>
      </div>
    </el-row>
    <!--    <el-row style="padding-top: 30px">-->
    <!--      <el-col :span="4">-->
    <!--        <el-select v-model="value" placeholder="请选择科目">-->
    <!--          <el-option-->
    <!--            v-for="item in options"-->
    <!--            :key="item.value"-->
    <!--            :label="item.label"-->
    <!--            :value="item.value"-->
    <!--          />-->
    <!--        </el-select>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <el-row style="paddig-top: 20px">
      <el-col :span="12">
        <el-row style="padding-top: 20px">
          <div class="title">
            <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分表-</span>
          </div>
        </el-row>
        <el-row style="padding-top: 20px">
          <term-grade-average-table :term-average-data="termAverageData" :table-header="tableInfo" />
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row style="padding-top: 20px">
          <div class="title">
            <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩均分趋势图-</span>
          </div>
        </el-row>
        <el-row style="padding-top: 20px">
          <term-trend-chart />
        </el-row>
      </el-col>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩年级六率对比图-</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <in-term-six-rates-chart />
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="title">
        <span style="font-size: 20px;color: #2ac06d">-学期内历次成绩年级六率表-</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <in-term-six-rates-table :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfoTwo" />
    </el-row>
  </div>
</template>

<script>
import termGradeAverageTable from '@/views/banzhurenTeacherGradeReport/gradeAnalysis/tableAndChart/termGradeAverageTable'
import termTrendChart from '@/views/banzhurenTeacherGradeReport/gradeAnalysis/tableAndChart/termTrendChart'
import inTermSixRatesTable from '@/views/banzhurenTeacherGradeReport/gradeAnalysis/tableAndChart/inTermSixRatesTable'
import inTermSixRatesChart from '@/views/banzhurenTeacherGradeReport/gradeAnalysis/tableAndChart/inTermSixRatesChart'
import { getGradeLiciAverageData, getLiciSixRatesData } from '@/api/banzhurenGetData'
export default {
  name: 'AllPrevious',
  components: { inTermSixRatesTable, termGradeAverageTable, termTrendChart, inTermSixRatesChart },
  data() {
    return {
      termAverageData: [],
      inTermSixRatesData: [],
      id: window.localStorage.getItem('id'),
      tableInfo: [
        { prop: 'examdate', lable: '日期' },
        { prop: 'examname', lable: '考试名称' },
        { prop: 'scoreAvg', lable: '平均分' },
        { prop: 'StandardDiviation', lable: '标准差' }
      ],
      tableInfoTwo: [
        { prop: 'examdate', lable: '日期' },
        { prop: 'examtype', lable: '考试名称' },
        { prop: 'subjectname', lable: '学科' },
        { prop: 'personsum', lable: '年级人数' },
        { prop: 'highnum', lable: '高分人数' },
        { prop: 'highnumradio', lable: '高分率' },
        { prop: 'excellentstudents', lable: '优秀人数' },
        { prop: 'excellentratio', lable: '优秀率' },
        { prop: 'goodnumbers', lable: '良好人数' },
        { prop: 'goodratio', lable: '良好率' },
        { prop: 'passnumbers', lable: '及格人数' },
        { prop: 'passratio', lable: '及格率' },
        { prop: 'failnum', lable: '低分人数' },
        { prop: 'failratio', lable: '低分率' },
        { prop: 'beyondnum', lable: '超均人数' },
        { prop: 'beyondradio', lable: '超均率' }
      ],
      value: '',
      options: [{
        value: '语文',
        label: '语文'
      }, {
        value: '数学',
        label: '数学'
      }, {
        value: '英语',
        label: '英语'
      }, {
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
      }]
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData: function() {
      const prams = {
        userID: this.id
      }
      getGradeLiciAverageData(prams).then(response => {
        console.log('测试班主任年级均分数据')
        console.log(response.data)
        this.termAverageData = response.data.info
      })
      getLiciSixRatesData(prams).then(response => {
        console.log('测试班主任年级六率')
        console.log(response.data)
        this.inTermSixRatesData = response.data.info
      })
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
  }
</style>
