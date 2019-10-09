import request from '@/utils/request'

// 科目对比获取科目对比六率对比
export function getSubjectCompareSixRatesData(parems) {
  return request({
    url: '/api/teachersubject/teachClassTotalSubjectContrast',
    method: 'get',
    params: parems
  })
}
