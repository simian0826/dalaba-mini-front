import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Input, AtTabBar } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui'

import './index.scss'
import {sendVerifyCode} from "../../api/api";


class Index extends Component {

  config = {
    navigationBarTitleText: '大喇叭集采',
    navigationBarTextStyle:'white',
    navigationBarBackgroundColor:'#B71C1C',
    backgroundColor:'#B71C1C',
    enablePullDownRefresh: true,


  };

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      phone: '1321230203',
      verifyCode:'',
      isFocus:false
    }
  }

  componentWillReceiveProps (nextProps) {

    console.log(this.props, nextProps)
  }

  componentWillMount(){
    console.log(this.$router.params);
    // let phone = this.state.phone.replace(/\\d{3})\\d{4}(\\d{4})/, "$1****$2");

    // console.log(phone);
    // this.setState({
    //   phone
    // })
  }
  componentWillUnmount () {

  }

  componentDidShow () { }

  componentDidHide () { }

  returnLogin(){
    Taro.redirectTo({
      url:'/pages/login/index'
    })
  }

  focusVerify(){
    this.setState({
      isFocus: true
    })
  }
  verifyInput(event){

    this.setState({
      verifyCode: event.detail.value
    })
    if (event.detail.value.length === 4){
      sendVerifyCode({mobile: event.detail.value}).then(res =>{
        console.log(res);
      })
    }
  }
  render () {
    return (
      <View className='app_container'>
        <View className='header_container pa-5'><AtIcon value='chevron-left' size='30' color='#666' onClick={this.returnLogin.bind(this)}></AtIcon></View>
        <View className='title mb-5'>短信验证</View>
        <View className='subtitle pt-3 mb-4'>尊敬的会员用户，为了保护您的账户安全，请输入验证码验证</View>
        <View className='phone_info pt-3'>验证码已经发送到你的手机号码 <Text className='phone_number pl-3'>{this.state.phone}</Text></View>
        <View className='verify_container'>
          <Text className='phone_number pl-3'>验证码</Text>
          <View className='verify_input_container'>
            <Input value={this.state.verifyCode} maxLength={4} onInput={this.verifyInput.bind(this)} type='number'
              className='real_input' focus={this.state.isFocus}
            />
            <Input password value={this.state.verifyCode.length>=1?this.state.verifyCode[0]:''} onClick={this.focusVerify.bind(this)}
              disabled className='input_item'
            />
            <Input password value={this.state.verifyCode.length>=2?this.state.verifyCode[1]:''} onClick={this.focusVerify.bind(this)}
              disabled className='input_item'
            />
            <Input password value={this.state.verifyCode.length>=3?this.state.verifyCode[2]:''} onClick={this.focusVerify.bind(this)}
              disabled className='input_item'
            />
            <Input password value={this.state.verifyCode.length>=4?this.state.verifyCode[3]:''} onClick={this.focusVerify.bind(this)}
              disabled className='input_item'
            />

          </View>
          <View className='supplement_container '>
            没有收到验证码？<Text className='resend px-2'>重新发送</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
