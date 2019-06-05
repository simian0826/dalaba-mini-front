import Taro from '@tarojs/taro'
import author from '../common/author'

const TIME_OUT = 30000;
let HOST = '';
if (process.env.TARO_ENV !== 'h5'){
  HOST = 'http://qy.cqsudu.com:10200';
}

const interceptor = function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
    .then(res => {

      console.log(`http <-- ${url} result:`, res)
      if (res.statusCode !== 200){
        return Promise.reject(res)
      }
      return res
    })
}

Taro.addInterceptor(interceptor)

export async function fetchToken(params) {

  return Taro.request({
    url: `${HOST}/api/authz/oauth2/token.json`,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: params,

  });

}

export async function refreshToken(params) {


  return Taro.request({
    url: `${HOST}/api/authz/oauth2/token.json`,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    timeout: TIME_OUT,
    data: params,

  });

}

export async function sendVerifyCode(params){
  return Taro.request({
    url: `${HOST}/api/validation/open/mobile/sms.json`,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    timeout: TIME_OUT,
    data: params,

  });
}

export async function getUserInfo(params) {
  let token = await author.checkAndRefreshToken();
  return Taro.request({
    url: `${HOST}/api/authz/user/info.json`,
    method: 'GET',
    headers: {
      Authorization: token.accessToken
    },
    timeout: TIME_OUT,
    data: params
  });

}

export async function getHomeData() {
  let token = await author.checkAndRefreshToken();
  return Taro.request({
    url: `${HOST}/api/application/open/home.json`,
    method: 'GET',
    header: {
      Authorization: token.accessToken
    },
    dataType: 'json'

  });
}
