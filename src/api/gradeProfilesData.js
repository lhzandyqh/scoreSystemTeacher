import request from '@/utils/request'

// 获取年级成绩单数据
export function getGradeScoreTableData(parems) {
  return request({
    url: '/api/grade/gradeExamTotal',
    method: 'get',
    params: parems
  })
}

// 获取教学班单科成绩单
export function getTeachClassSingleSubjetClassTable(parems) {
  return request({
    url: '/api/grade/gradeSubjectExamTotal',
    method: 'get',
    params: parems
  })
}

// 获取年级成绩六率分析数据
export function getGradeSixRatesData(parems) {
  return request({
    url: '/api/grade/teachClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}

// 获取年级成绩历次均分表
export function getGradeSuccessiveAverageScoreData(parems) {
  return request({
    url: '/api/grade/teachClassScoreAnalysis',
    method: 'get',
    params: parems
  })
}

// 获取年级历次六率表
export function getGradeSuccessiveSixRatesData(parems) {
  return request({
    url: '/api/grade/teachSubjectAllSixCompare',
    method: 'get',
    params: parems
  })
}
