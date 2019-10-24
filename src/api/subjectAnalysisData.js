import request from '@/utils/request'

// 获取科目分析科目成绩单数据
export function getSubjectAnaGradeTableData(parems) {
  return request({
    url: '/api/teachersubject/findTeachSubjectScoreListByClass',
    method: 'get',
    params: parems
  })
}

// 获取科目分析重点关注成绩前5名
export function getSubjectFrontFiveData(parems) {
  return request({
    url: '/api/teachersubject/teachClassAttentionTopFive',
    method: 'post',
    params: parems
  })
}

// 获取科目分析重点关注成绩后5名
export function getSubjectBehindFiveData(parems) {
  return request({
    url: '/api/teachersubject/teachClassAttentionLastFive',
    method: 'post',
    params: parems
  })
}

// 获取科目分析科校对比表与图的数据
export function getSubjectCompareSchoolData(parems) {
  return request({
    url: '/api/teachersubject/teachClassSchoolCompare',
    method: 'post',
    params: parems
  })
}

// 获取科目分析班级成绩等级分布数据
export function getSubjectCompareGradeRankData(parems) {
  return request({
    url: '/api/teachersubject/teachClassLevelDistribution',
    method: 'post',
    params: parems
  })
}

// 获取科目分析学期内历次成绩均分数据
export function getInTermSuccessiveGradeAverageData(parems) {
  return request({
    url: '/api/teachersubject/teachSubjectAllAvgAndDiv',
    method: 'post',
    params: parems
  })
}

// 获取科目分析学期内历次成绩班级六率数据
export function getInTermSuccessiveSixRatesData(parems) {
  return request({
    url: '/api/teachersubject/teachSubjectAllSixRadio',
    method: 'post',
    params: parems
  })
}

