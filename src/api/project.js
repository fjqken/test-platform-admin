import request from '@/utils/request'

export function project_list(data) {
  return request({
    url: '/project_api/select_list',
    method: 'post',
    data
  })
}
