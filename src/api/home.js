import request from '../utils/request'

export function getUserData(){
    return request({
        url: `/user/getData`,
        method: 'get',
          
      })
}

export function deleteUser(data){
  return request({
      url: `/user/delData`,
      method: 'post',
      data
    })
}