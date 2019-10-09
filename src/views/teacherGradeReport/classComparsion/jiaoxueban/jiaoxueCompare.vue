<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择科目</span>
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请选择">
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
                <span style="font-size: 25px;color: #2ac06d">—班级六率对比表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-class-six-rates-com :in-term-six-rates-data="inTermSixRatesData" :table-header="tableInfo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—班级六率对比图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-six-rates-comparison-chart />
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
                <span style="font-size: 25px;color: #2ac06d">—全校前N名上线分布表—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-front-n-rank :front-data="frontData" :table-header="tableInfoTwo" />
            </el-row>
            <el-row style="padding-top: 20px">
              <div class="title">
                <span style="font-size: 25px;color: #2ac06d">—全校前N名上线分布图—</span>
              </div>
            </el-row>
            <el-row style="padding-top: 20px">
              <jiaoxue-front-n-rank-chart />
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
export default {
  name: 'JiaoxueCompare',
  components: { jiaoxueClassSixRatesCom, jiaoxueSixRatesComparisonChart, jiaoxueFrontNRank, jiaoxueFrontNRankChart },
  data() {
    return {
      activeName: 'first',
      inTermSixRatesData: [],
      frontData: [],
      options: [{
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
        label: '政治'
      }, {
        value: '选项8',
        label: '历史'
      }, {
        value: '选项9',
        label: '地理'
      }],
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
        { prop: 'physics', lable: '科目' },
        { prop: 'huaxueCoversion', lable: '班级/行政班' },
        { prop: 'shengwuCoversion', lable: '校前100名人数' },
        { prop: 'lishiCoversion', lable: '前100名排名' },
        { prop: 'diliCoversion', lable: '校前200名人数' },
        { prop: 'lishiCoversion', lable: '前200名排名' },
        { prop: 'diliCoversion', lable: '校前300名人数' },
        { prop: 'zhengzhiCoversion', lable: '校前300名排名人数' }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
