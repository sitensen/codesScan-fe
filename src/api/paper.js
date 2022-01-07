import request from '@/utils/request'

/**
 * 修改用户密码
 * @param {Object} data 修改的信息
 */
export function saveReport(data) {
  return request({
    url: '/sourceCode/save',
    method: 'post',
    data: data
  })
}


export function fetchList(data) {
  return request({
    url: '/sourcereport/list',
    method: 'post',
    data: data
  })
}

export function uploadFile(data) {
  return request({
    url: '/file/upload',
    method: 'post',
    data: data
  })
}


export function deleteRole(data) {
  return request({
    url:'/sourcereport/delete',
    method: 'get',
    params: data
  })
}

