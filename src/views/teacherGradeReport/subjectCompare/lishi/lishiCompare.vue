<template>
  <div class="app-container">
    <el-row>
      <div class="mainContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="历史科目六率对比" name="first">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—历史科目六率对比表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-class-six-rates-com :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—班级六率对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-six-rates-comparison-chart />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="历史单科前N名上线分布对比" name="second">
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder">2018-2019学年第一学期七年级期中考试</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—历史单科前N名上线分布表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <subject-front-n-rank :front-data="frontData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;font-weight: bolder;color: #2ac06d">—历史单科前N名上线分布图—</span>
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
import subjectClassSixRatesCom from '@/views/teacherGradeReport/subjectCompare/tableAndChart/subjectClassSixRatesCom'
import subjectSixRatesComparisonChart from '@/views/teacherGradeReport/subjectCompare/tableAndChart/subjectSixRatesComparisonChart'
import subjectFrontNRank from '@/views/teacherGradeReport/subjectCompare/tableAndChart/subjectFrontNRank'
import subjectFrontNRankChart from '@/views/teacherGradeReport/subjectCompare/tableAndChart/subjectFrontNRankChart'
export default {
  name: 'LishiCompare',
  components: { subjectClassSixRatesCom, subjectSixRatesComparisonChart, subjectFrontNRank, subjectFrontNRankChart },
  data() {
    return {
      inTermSixRatesData: [],
      frontData: [],
      activeName: 'first',
      tableInfo: [
        { prop: 'id', lable: '年级' },
        { prop: 'id', lable: '科目' },
        { prop: 'studentMachineCard', lable: '班级' },
        { prop: 'studentName', lable: '高分人数' },
        { prop: 'classId', lable: '高分率' },
        { prop: 'coversionTotal', lable: '高分率排名' },
        { prop: 'classIndex', lable: '优秀人数' },
        { prop: 'classIndex', lable: '优秀率' },
        { prop: 'advancefall', lable: '优秀率排名' },
        { prop: 'yuwenScore', lable: '良好人数' },
        { prop: 'shuxueScore', lable: '良好率' },
        { prop: 'yingyuScore', lable: '良好率排名' },
        { prop: 'threeScore', lable: '及格人数' },
        { prop: 'physics', lable: '及格率' },
        { prop: 'huaxueCoversion', lable: '及格率排名' },
        { prop: 'shengwuCoversion', lable: '低分人数' },
        { prop: 'lishiCoversion', lable: '低分率' },
        { prop: 'diliCoversion', lable: '低分率排名' },
        { prop: 'lishiCoversion', lable: '超均人数' },
        { prop: 'diliCoversion', lable: '超均率' },
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
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
  }
</style>
