import request from '@/utils/request'

// 获取首页不同科目等级分布图（表）数据
export function getHomeSubjectRankData(parems) {
  return request({
    url: '/headmasterindex/teachClassLevelDistribution',
    method: 'get',
    params: parems
  })
}

// 获取首页班级均分数据
export function getHomeClassAverageData(parems) {
  return request({
    url: '/headmasterindex/findTeachClassAvgDistribute',
    method: 'get',
    params: parems
  })
}

// 年级分析  获取年级成绩单数据
export function getGradeScoreTableData(parems) {
  return request({
    url: '/headMasterGrade/gradeExamTotal',
    method: 'get',
    params: parems
  })
}

// 年级分析  获取年级单科成绩单
export function getSingleScoreTableData(parems) {
  return request({
    url: '/headMasterGrade/getSingleSubjectScoreList',
    method: 'get',
    params: parems
  })
}

// 获取年级分析的年级六率
export function getGradeSixRatesData(parems) {
  return request({
    url: '/headMasterGrade/getAllSubjectGradeSixRadio',
    method: 'get',
    params: parems
  })
}

// 获取年级分析历次均分
export function getGradeLiciAverageData(parems) {
  return request({
    url: '/headMasterGrade/teachClassScoreAnalysis',
    method: 'get',
    params: parems
  })
}

// 获取年级分析历次六率
export function getLiciSixRatesData(parems) {
  return request({
    url: '/headMasterGrade/teachSubjectAllSixCompare',
    method: 'get',
    params: parems
  })
}

// 班级分析 班级成绩单数据
export function getClassScoreTableData(parems) {
  return request({
    url: '/api/headMasterClass/classExamTotal',
    method: 'get',
    params: parems
  })
}

// 班级分析 重点关注前5名
export function getFrontFiveData(parems) {
  return request({
    url: '/api/headMasterClass/classTopfive',
    method: 'get',
    params: parems
  })
}

// 班级分析 重点关注后5名
export function getBehindFiveData(parems) {
  return request({
    url: '/api/headMasterClass/classLassfive',
    method: 'get',
    params: parems
  })
}

// 班级分析 全校前N名分布
export function getFrontNData(parems) {
  return request({
    url: '/api/headMasterClass/AdminClassSchoolIndexStage',
    method: 'post',
    params: parems
  })
}

// 班级分析 班级六率分析
export function getClassSixRatesData(parems) {
  return request({
    url: '/api/headMasterClass/getAllSubjectGradeSixRadio',
    method: 'get',
    params: parems
  })
}

// 班级分析 班校对比平均分对比
export function getClassCompareSchoolAverageData(parems) {
  return request({
    url: '/api/headMasterClass/getSubjectClassSchoolCompare',
    method: 'get',
    params: parems
  })
}

// 班级分析 历次对比平均分
export function getLiciCompareAverageData(parems) {
  return request({
    url: '/api/headMasterClass/teachSubjectAllAvgAndDiv',
    method: 'post',
    params: parems
  })
}

// 班级分析 历次对比班级六率
export function getLiciCompareSixRatesData(parems) {
  return request({
    url: '/api/headMasterClass/teachSubjectAllSixRadio',
    method: 'post',
    params: parems
  })
}

// 班级对比 班级六率对比
export function getClassCompareSixRatesData(parems) {
  return request({
    url: '/api/headMasterClassCampare/teachClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}

// 班级对比 全校前N名分布
export function getSchoolFrontNData(parems) {
  return request({
    url: '/api/headMasterClassCampare/teachSubjectTopNDistriute',
    method: 'get',
    params: parems
  })
}

// 科目分析 科目成绩单
export function getSubjectScoreTable(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getSingleSubjectScoreList',
    method: 'get',
    params: parems
  })
}

// 科目分析 单科班级前5名(用于班级搜索)
export function getSubjectFrontFiveData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getSingleSubjectTopFive',
    method: 'get',
    params: parems
  })
}

// 科目分析 单科班级后五(用于班级搜索)
export function getSubjectBehindFiveData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getSingleSubjectLastFive',
    method: 'get',
    params: parems
  })
}

// 科目分析 单科班级前5名(默认不搜索)
export function getDefaultSubjectFrontFiveData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getDefaultSingleSubjectTopFive',
    method: 'get',
    params: parems
  })
}

// 科目分析 单科班级后5名(默认不搜索)
export function getDefaultSubjectBehindFiveData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getDefaultSingleSubjectLastFive',
    method: 'get',
    params: parems
  })
}

// 科目分析 重点关注前N名分布(默认)
export function getDefaultFrontNData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getDefaultSingleSubjectTopNDis',
    method: 'get',
    params: parems
  })
}

// 科目分析 中点关注前N名分布（需要加入班级参数）
export function getFrontNDataByClass(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/getSingleSubjectTopNDis',
    method: 'get',
    params: parems
  })
}

// 科目分析 科校对比（科目六率分析和科目六率班校对比图）
export function getSubjectSixRatesData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/teachClassSchoolCompare',
    method: 'post',
    params: parems
  })
}

// 科目分析 历次对比 成绩均分表
export function getSubjectAverageScoreTableData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/teachSubjectAllAvgAndDiv',
    method: 'post',
    params: parems
  })
}

// 科目分析 历次对比 成绩班级六率
export function getSubjectClassSixRatesData(parems) {
  return request({
    url: '/api/headMasterSubjectAnalysis/teachSubjectAllSixRadio',
    method: 'post',
    params: parems
  })
}

// 科目对比 六率对比
export function getSubjectCompareSixRatesData(parems) {
  return request({
    url: '/api/headMasterSubjectCompare/teachClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}

// 科目对比 前N名
export function getSubjectCompareFrontNData(parems) {
  return request({
    url: '/api/headMasterSubjectCompare/teachSubjectTopNDistriute',
    method: 'get',
    params: parems
  })
}

