import request from '@/utils/request'

export function project_list(data) {
  return request({
    url: '/project_api/select_list',
    method: 'post',
    data
  })
}

export function creat_project(data) {
  return request({
    url: '/project_api/creat_project',
    method: 'post',
    data
  })
}
