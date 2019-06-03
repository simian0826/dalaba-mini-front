import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input, Form  } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui'

import headIcon from '../../asset/img/headIcon.jpeg'

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

      <View className='app_container pa-5' style='text-align: center'>
        <View className='header_container pa-3' >
          <Image src={headIcon} style='width: 100%; height: 100%; border-radius: 50%;' mode='widthFix' />
        </View>

        <View className='form_container px-5'>
          <Form onSubmit={this.formSubmit} onReset={this.formReset} >
            <View className='form_item_container mb-5'>
              <View className='icon_container' >
                <AtIcon value='iphone' size='24' color='#ccc' ></AtIcon>
              </View>
              <Input  placeholder='请输入手机号' className='input_item' placeholderClass='input_placeholder' />
            </View>
            <View className='form_item_container mt-5'>
              <View className='icon_container' style=''>
                <AtIcon value='lock' size='24' color='#ccc' ></AtIcon>
              </View>
              <Input password placeholder='请输入密码' className='input_item' placeholderClass='input_placeholder' />
              <View className='show_password' style=''>
              </View>
            </View>
          </Form>

        </View>
      </View>
    )
  }
}

export default Index
