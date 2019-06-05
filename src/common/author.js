import Taro from '@tarojs/taro'
import {fetchToken, refreshToken} from '../api/api'

const CLIENT_ID = 'test_client_id';

export default {
  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  },
  setToken(token){
    const storage = {
      accessToken: token.data.access_token,
      refreshToken: token.data.refresh_token,
      expiresIn: token.data.expires_in,
      expiredAt: new Date().getTime() + token.data.expires_in * 1000 - 119 * 60 * 1000 - 50 * 1000,
    };

    Taro.setStorageSync('user-token', JSON.stringify(storage));
  },
  getLocalToken(){

    const tokenStr = Taro.getStorageSync('user-token');
    return tokenStr ? JSON.parse(tokenStr) : null;
  },

  setUserInfo(info){
    Taro.setStorageSync('user-info', JSON.stringify(info));
  },
  getUserInfo(){
    const info = Taro.setStorageSync('user-info');
    return info ? JSON.parse(info) : null;
  },
  logout(){
    Taro.removeStorageSync('user-info');
    Taro.removeStorageSync('user-token');
  },
  //
  async checkAndRefreshToken(){
    let token = this.getLocalToken();
    let params = {
      client_id: CLIENT_ID,
      grant_type: '',
    }
    try {
      if (token) {
        const current = new Date().getTime();
        if (current >= token.expiredAt) {
          params.grant_type = 'refresh_token';
          params.refresh_token = token.refreshToken;
          let newToken = await refreshToken(params);
          this.setToken(newToken);
        }

      }else {
        params.grant_type = 'visitor_identity';
        params.visitor_identity = this.createGuid();

        token = await fetchToken(params);
        this.setToken(token);
      }
    }catch (e) {
      console.table(e.response)

    }

    return this.getLocalToken();
  },


}
