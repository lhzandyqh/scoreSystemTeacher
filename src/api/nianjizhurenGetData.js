import request from '@/utils/request'

// 首页根据科目显示不同的班
export function getClassDataBySubject(parems) {
  return request({
    url: '/api/gradeTeacherIndex/classBySubject',
    method: 'get',
    params: parems
  })
}

// 首页根据科目和班级显示等级分布图
export function getRankChartDataBySubjectAndClass(parems) {
  return request({
    url: '/api/gradeTeacherIndex/levelDistribution',
    method: 'get',
    params: parems
  })
}

// 首页学科均分起势图
export function getSubjectAverageTrendChartData(parems) {
  return request({
    url: '/api/gradeTeacherIndex/avgScoreDistribute',
    method: 'get',
    params: parems
  })
}

// 年级概况 单科成绩单
export function getSingleSubjectTableData(parems) {
  return request({
    url: '/api/gradeTeacherGradeAnalysis/gradeTeacherSubjectScoreReport',
    method: 'get',
    params: parems
  })
}

// 年级分析 年级六率表
export function getGradeAnalysisSixRatesData(parems) {
  return request({
    url: '/api/geadeProfileForGradeTec/gradeTeacherSixRate',
    method: 'get',
    params: parems
  })
}

// 成绩分析 历次成绩均分表
export function getLiciAverageScoreTableData(parems) {
  return request({
    url: '/api/geadeProfileForGradeTec/gradeTeacherPreviousScore',
    method: 'get',
    params: parems
  })
}

// 班级分析 科目班级下拉列表
export function getBehindClassDataBySubject(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachSubjectAllclass',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班班级成绩单
export function getXingZhengScoreTable(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/getAdminClassSubjectScoreList',
    method: 'get',
    params: parems
  })
}

// 科目分析 根据科目返回班
export function getSubjectAnalysisClassBySubject(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/teachSubjectAllclass',
    method: 'post',
    params: parems
  })
}

// 科目分析 单科成绩单
export function getSubjectAnalysiSingleSubjecData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/getSingleSubjectScoreList',
    method: 'get',
    params: parems
  })
}

// 科目分析 单科班级前5
export function getSubjectAnalysisClassFrontFiveData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/getSingleSubjectTopFive',
    method: 'get',
    params: parems
  })
}

// 科目分析 单科班级后5
export function getSubjectAnalysisClassBehindFiveData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/getSingleSubjectLastFive',
    method: 'get',
    params: parems
  })
}

// 科目分析 前N名分布
export function getSubjectAnalysisClassFrontNData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/getSingleSubjectTopNDis',
    method: 'get',
    params: parems
  })
}

// 科目分析 班校对比
export function getSubjectAnalysisClassCompareSchoolData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/teachClassSchoolCompare',
    method: 'post',
    params: parems
  })
}

// 科目分析 历次对比 成绩均分
export function getSubjectAnalysisLiciAverageScoreData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/teachSubjectAllAvgAndDiv',
    method: 'post',
    params: parems
  })
}

// 科目分析 历次对比 班级六率
export function getSubjectAnalysisLiciSixRatesData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectAnalysis/teachSubjectAllSixRadio',
    method: 'post',
    params: parems
  })
}

// 科目对比 科目六率对比
export function getSubjectCompareSixRatesData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectCompare/teachClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}

// 科目对比 班级前N名
export function getSubjectCompareFrontNData(parems) {
  return request({
    url: '/api/GradeDirectorSubjectCompare/teachSubjectTopNDistriute',
    method: 'get',
    params: parems
  })
}

// 班级分析 行政班 重点关注前5名
export function getClassAnalysisXingzhengFrontFiveData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/AdminClassTopFiveScore',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班 重点关注后5名
export function getClassAnalysisXingzhengBehindFiveData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/AdminClassLastFiveScore',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班 全校前N名分布
export function getClassAnalysisXingzhengFrontNData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/getAdminTopNDis',
    method: 'get',
    params: parems
  })
}

// 班级分析 行政班 班校对比 班级六率分析
export function getClassAnalysisXingzhengSixRatesData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachAdminClassSchoolCompare',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班 历次对比 年级均分
export function getClassAnalysisXingzhengGradeAverageData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachAdminSubjectAllAvgAndDiv',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班 历次对比 年级六率
export function getClassAnalysisXingzhengGradeSixRatesData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachAdminSubjectAllSixRadio',
    method: 'post',
    params: parems
  })
}

// 班级分析 根据学科获得班级
export function getClassAnalysisJiaoxueGetClassDataBySubject(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachSubjectAllclass',
    method: 'post',
    params: parems
  })
}

// 班级分析 教学班 单科成绩单
export function getClassAnalysisJiaoxueSingleSubjectData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/getTeachClassSubjectScoreList',
    method: 'get',
    params: parems
  })
}

// 班级分析 教学班 重点关注前5名
export function getClassAnalysisJiaoxueFrontFiveData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/TeachClassTopFiveScore',
    method: 'post',
    params: parems
  })
}

// 班级分析 教学班 重点关注后5名
export function getClassAnalysisJiaoxueBehindFiveData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/TeachClassLastFiveScore',
    method: 'post',
    params: parems
  })
}

// 班级分析 教学班 前N名
export function getClassAnalysisJiaoxueFrontNData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/getTeachTopNDis',
    method: 'get',
    params: parems
  })
}

// 班级分析 教学班 班校对比 班级六率分析
export function getClassAnalysisJiaoxueSixRatesData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachTeachClassSchoolCompare',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班 历次对比 年级均分
export function getClassAnalysisJiaoxueGradeAverageData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachTeachSubjectAllAvgAndDiv',
    method: 'post',
    params: parems
  })
}

// 班级分析 行政班 历次对比 年级六率
export function getClassAnalysisJiaoxueGradeSixRatesData(parems) {
  return request({
    url: '/api/GradeDirectorClassAnalysis/teachTeachSubjectAllSixRadio',
    method: 'post',
    params: parems
  })
}

// 班级对比 行政班 班级六率对比
export function getClassCompareXingzhengSixRateaData(parems) {
  return request({
    url: '/api/GradeDirectorClassCompare/teachAdminClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}

// 班级对比 行政班 前N名分布
export function getClassCompareXingzhengFrontNData(parems) {
  return request({
    url: '/api/GradeDirectorClassCompare/teachAdminSubjectTopNDistriute',
    method: 'get',
    params: parems
  })
}

// 班级对比 教学班 班级六率对比
export function getClassCompareJiaoxueSixRateaData(parems) {
  return request({
    url: '/api/GradeDirectorClassCompare/teachTeachClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}

// 班级对比 教学班 前N名分布
export function getClassCompareJiaoxueFrontNData(parems) {
  return request({
    url: '/api/GradeDirectorClassCompare/teachSubjectTopNDistriute',
    method: 'get',
    params: parems
  })
}
