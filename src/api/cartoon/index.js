import request from '@/utils/request'

export function cartoonCategory(data) { //
  return request({
    url: 'cartoonCategory',
    method: 'post',
    data
  })
}

export function cartoonItem(data) { //
    return request({
      url: 'cartoonItem',
      method: 'post',
      data
    })
}

export function cartoonList(data) { //
  return request({
    url: 'cartoonList',
    method: 'post',
    data
  })
}