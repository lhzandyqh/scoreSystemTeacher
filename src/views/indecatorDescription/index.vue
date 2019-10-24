<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">平均分</span>
          </div>
          <span>全体样本值之和与样本数的比值</span>
          <img :src="imgUrl" style="width: 80%;height: 20%;padding-top: 40px">
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">方差</span>
          </div>
          <span>方差（样本方差）是每个样本值与全体样本值的平均数之差的平方值的平均数。方差越大，数据的波动越大；方差越小，数据的波动就越小。</span>
          <img :src="imgUrl2" style="width: 80%;height: 20%">
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">标准差</span>
          </div>
          <span>标准差是方差的算术平方根。标准差能反映一个数据集的离散程度。</span>
          <img :src="imgUrl3" style="width: 80%;height: 20%">
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">标准分</span>
          </div>
          <span>高考采用标准分与百分登记表进行排名计算，主要解决原始分单位不等值、没有可加性、无明确意义及不具可比性的特性。用来说明原始分在所属的那批分数中的相对位置。</span>
          <img :src="imgUrl4" style="width: 80%;height: 20%">
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding-top: 20px">
      <el-card class="box-card-two">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder">排位分</span>
        </div>
        <span>排位分跟现在的标准分不一样，它是按照排名的比率对应分值。</span>
        <img :src="imgUrl5" style="width: 80%;height: 20%;padding-top: 10px;text-align: center">
        <div>
          <span>假如年级学生的语文原始分输入到系统，根据原始分分值进行排位，看目前的学生占到哪个区间，然后将比例对照上边的表转化为对应的分数；</span>
        </div>
        <h4>问题1：教师如何比较班级的平均水平及分散程度？</h4>
        <div>
          <span>使用平均分与标准差，平均分反应整体平均水平，标准差反应成绩的离散程度。
            标准差是一组数据平均值分散程度的一种度量，一个较大的标准差，代表大部分数值和其平均值之间差异较大；一个较小的标准差，代表这些数值较接近平均值。
          </span>
        </div>
        <h4>问题2：班主任如何对比班级的全科历次成绩进行对比</h4>
        <div>
          <span>（1）	采用标准分、排位分，T分去除原始分的无意义</span>
        </div>
        <div>
          <span>（2）	设置考试难度惩罚因子α，使得全科按比重进行对比</span>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      imgUrl: require('@/views/picture/pingjun.png'),
      imgUrl2: require('@/views/picture/fangcha.png'),
      imgUrl3: require('@/views/picture/biaozhuncha.png'),
      imgUrl4: require('@/views/picture/biaozhunfen.png'),
      imgUrl5: require('@/views/picture/paiweifeng.png')
    }
  }
}
</script>

<style scoped>
  .box-card{
    height: 300px;
  }

</style>
