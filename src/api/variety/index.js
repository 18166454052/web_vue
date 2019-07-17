import request from '@/utils/request'

export function varietyCategory(data) { //
  return request({
    url: 'varietyCategory',
    method: 'post',
    data
  })
}

export function varietyItem(data) { //
    return request({
      url: 'varietyItem',
      method: 'post',
      data
    })
}

export function varietyList(data) { //
  return request({
    url: 'varietyList',
    method: 'post',
    data
  })
}