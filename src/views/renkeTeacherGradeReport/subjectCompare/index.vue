<template>
  <div class="app-container">
    <el-row>
      <div class="mainContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="物理科目六率对比" name="first">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—物理科目六率对比表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-class-six-rates-com :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—班级六率对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rates-comparison-chart />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="物理单科前N名上线分布对比" name="second">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—物理单科前N名上线分布表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-front-n-rank :front-data="frontData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—物理单科前N名上线分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-front-n-rank-chart />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import subjectClassSixRatesCom from '@/views/renkeTeacherGradeReport/subjectCompare/tableAndChart/subjectClassSixRatesCom'
import subjectSixRatesComparisonChart from '@/views/renkeTeacherGradeReport/subjectCompare/tableAndChart/subjectSixRatesComparisonChart'
import subjectFrontNRank from '@/views/renkeTeacherGradeReport/subjectCompare/tableAndChart/subjectFrontNRank'
import subjectFrontNRankChart from '@/views/renkeTeacherGradeReport/subjectCompare/tableAndChart/subjectFrontNRankChart'
import { getSubjectCompareSixRatesData } from '@/api/subjectCompareData'
export default {
  name: 'WuliCompare',
  components: { subjectClassSixRatesCom, subjectSixRatesComparisonChart, subjectFrontNRank, subjectFrontNRankChart },
  data() {
    return {
      inTermSixRatesData: [],
      frontData: [],
      activeName: 'first',
      id: window.localStorage.getItem('id'),
      tableInfo: [
        { prop: 'id', lable: '年级' },
        { prop: 'subjectname', lable: '科目' },
        { prop: 'classid', lable: '班级' },
        { prop: 'highnum', lable: '高分人数' },
        { prop: 'highnumradio', lable: '高分率' },
        { prop: 'coversionTotal', lable: '高分率排名' },
        { prop: 'excellentstudents', lable: '优秀人数' },
        { prop: 'excellentratio', lable: '优秀率' },
        { prop: 'advancefall', lable: '优秀率排名' },
        { prop: 'goodnumbers', lable: '良好人数' },
        { prop: 'goodratio', lable: '良好率' },
        { prop: 'yingyuScore', lable: '良好率排名' },
        { prop: 'passnumbers', lable: '及格人数' },
        { prop: 'passratio', lable: '及格率' },
        { prop: 'huaxueCoversion', lable: '及格率排名' },
        { prop: 'failnum', lable: '低分人数' },
        { prop: 'failratio', lable: '低分率' },
        { prop: 'diliCoversion', lable: '低分率排名' },
        { prop: 'beyondnum', lable: '超均人数' },
        { prop: 'beyondradio', lable: '超均率' },
        { prop: 'zhengzhiCoversion', lable: '超均率排名' }
      ],
      tableInfoTwo: [
        { prop: 'physics', lable: '年级' },
        { prop: 'id', lable: '科目' },
        { prop: 'huaxueCoversion', lable: '班级' },
        { prop: 'shengwuCoversion', lable: '校前100名人数' },
        { prop: 'lishiCoversion', lable: '前100名排名' },
        { prop: 'diliCoversion', lable: '校前200名人数' },
        { prop: 'lishiCoversion', lable: '前200名排名' },
        { prop: 'diliCoversion', lable: '校前300名人数' },
        { prop: 'zhengzhiCoversion', lable: '校前300名排名人数' }
      ]
    }
  },
  mounted() {
    this.getSixRatesData()
  },
  methods: {
    handleClick: function() {
      console.log('我换了，你呢弟弟')
    },
    getSixRatesData: function() {
      const prams = {
        userID: this.id
      }
      getSubjectCompareSixRatesData(prams).then(response => {
        console.log('科目对比测试是否拿到六率数据')
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
