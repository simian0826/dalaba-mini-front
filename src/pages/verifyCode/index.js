import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Input, AtTabBar } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui'

import { getHomeData} from "../../api/api";
import './index.scss'


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
      loading:false,
      phone: '1321230203'
    }
  }

  componentWillReceiveProps (nextProps) {

    console.log(this.props, nextProps)
  }

  componentWillMount(){
  }
  componentWillUnmount () {

  }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    return (

      <View className='app_container'>
        <View className='header_container pa-5'><AtIcon value='chevron-left' size='30' color='#666'></AtIcon></View>
        <View className='title mb-5'>短信验证</View>
        <View className='subtitle pt-3 mb-5'>尊敬的会员用户，为了保护您的账户安全，请输入验证码验证</View>
        <View className='phone_info pt-3'>验证码已经发送到你的手机号码 <Text className='phone_number pl-3'>{this.state.phone}</Text></View>
        <View className='verify_container '>
          <Text className='phone_number pl-3'>验证码</Text>
          <View className='verify_input_container'>
            <Input password value={this.state.form.account} onChange={this.formItemInput.bind(this, 'account')}
              className='input_item'
            />
            <Input password value={this.state.form.account} onChange={this.formItemInput.bind(this, 'account')}
              className='input_item'
            />
            <Input password value={this.state.form.account} onChange={this.formItemInput.bind(this, 'account')}
              className='input_item'
            />
            <Input password value={this.state.form.account} onChange={this.formItemInput.bind(this, 'account')}
              className='input_item'
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Index
