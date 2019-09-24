import request from '@/utils/request'

// 获取教师个人信息
export function getTeacherInformationData(parems) {
  return request({
    url: '/api/teacherIndex/teacher_info',
    method: 'get',
    params: parems
  })
}

// 获取教师等级分布图中的数据
export function getTeacherRankChartData(parems) {
  return request({
    url: '/api/teacherIndex/teachClassLevelDistribution',
    method: 'get',
    params: parems
  })
}

// 获取教师等级分布表中的数据
export function getTeacherRankTableData(parems) {
  return request({
    url: '/api/teacherIndex/teachClassSubjectLevelList',
    method: 'get',
    params: parems
  })
}
