import Taro from '@tarojs/taro'
import author from './author'

const TIME_OUT = 30000;
const HOST = 'http://qy.cqsudu.com:10200';


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
