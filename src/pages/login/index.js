import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input, Form, Checkbox, CheckboxGroup  } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui'
import { Base64 } from 'js-base64';
import {fetchToken} from '../../api/api'
import headIcon from '../../asset/img/headIcon.jpeg'
import './index.scss'

const CLIENT_ID = 'test_client_id';
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
      form:{
        account:'',
        password:'',
      },

      showPassword: true,
      isRemember: false

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

  showPwd(){
    this.setState({
      showPassword: !this.state.showPassword
    })

  }
  changeRemember(){
    this.setState({
      isRemember: !this.state.isRemember
    })
  }
  formItemInput(index, event){
    let form = this.state.form;
    form[index] = event.detail.value;
    this.setState({
      form: form
    });

  }
  login(){
    console.log(this.state);

    if (this.state.form.account === ''){
      Taro.showToast({
        title: '请输入账号',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.state.form.password === ''){
      Taro.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
      return
    }
    let tempParams = {
      grant_type: 'password-valid',
      username: this.state.form.account,
      // password: window.atob(vm.form.password),
      password:Base64.encode(this.state.form.password),
      client_id: CLIENT_ID
    }
    fetchToken(tempParams).then(res =>{

      if (res.data.code === 11013){
        Taro.redirectTo({
          url: `/pages/verifyCode/index?phone=${res.data.message}`
        })
      }
      if (res.data.code === 13004){
        Taro.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    }).catch(e =>{


    })
  }

  render () {

    return (

      <View className='app_container pa-5' >
        <View className='header_container pa-3' >
          <Image src={headIcon} style='width: 100%; height: 100%; border-radius: 50%;' mode='widthFix' />
        </View>

        <View className='form_container px-5'>
          <Form  onReset={this.formReset} >
            <View className='form_item_container mb-5'>
              <View className='icon_container' >
                <AtIcon value='iphone' size='24' color='#ccc' ></AtIcon>
              </View>
              <Input  placeholder='请输入账号' value={this.state.form.account} onChange={this.formItemInput.bind(this, 'account')}
                className='input_item' placeholderClass='input_placeholder'
              />
            </View>
            <View className='form_item_container mt-5'>
              <View className='icon_container'>
                <AtIcon value='lock' size='24' color='#ccc' ></AtIcon>
              </View>
              <Input password={this.state.showPassword} value={this.state.form.password} onChange={this.formItemInput.bind(this, 'password')}
                placeholder='请输入密码' className='input_item' placeholderClass='input_placeholder'
              />
              <View className='show_password'  >
                <AtIcon value='eye' size='24' color='#ccc' onClick={this.showPwd.bind(this)} />
              </View>
            </View>
            <View className='form_item_container mt-4 pl-4'>
              <CheckboxGroup bindchange={this.changeRemember.bind(this)} className='check_box'>
                <Checkbox value={this.state.isRemember} onChange={this.changeRemember.bind(this)}><Text className='check_box'>15天内自动登陆</Text></Checkbox>
              </CheckboxGroup>

            </View>
            <View className='form_item_container mt-5 '>
              <AtButton circle type='primary'  className='login_button pa-1' formType='submit' onClick={this.login.bind(this)}>登 录</AtButton>
            </View>
            <View className='extra_container mt-5 '>
              <Text>账号注册</Text>
              <Text>|</Text>
              <Text>忘记密码</Text>
            </View>
          </Form>

        </View>

        <View className='footer mb-5'>
          重庆庆渝科技有限公司
        </View>
      </View>
    )
  }
}

export default Index
