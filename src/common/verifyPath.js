import Taro from '@tarojs/taro'
import author from './author'

const verifyPath = [
   '/pages/supplier/index',
   '/pages/mine/index',
]

function isVerifyPath(path) {
   return verifyPath.includes(path)
 }

 export function verifyRedirect(path) {
  if (author.getUserInfo()){
    Taro.redirectTo({
      url: path
    })
  }else {
    if (isVerifyPath(path)) {
      Taro.redirectTo({
        url: `/pages/login/index?path=${path}`
      })
    }else {
      Taro.redirectTo({
        url: path
      })
    }
  }

 }
 export function verifyNavigate(path) {
   if (author.getUserInfo()){
     Taro.navigateTo({
       url: path
     })
   }else {
     if (isVerifyPath(path)) {
       Taro.navigateTo({
         url: `/pages/login/index?path=${path}`
       })
     }else {
       Taro.navigateTo({
         url: path
       })
     }
   }
 }
