import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import bg from '../../asset/img/background.png'
import search from '../../asset/img/search.png'
import './homeNav.scss'




class HomeNav extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onSearch(){
    console.log('aaa');
  }

  render () {
    return (
      <View className='header'>
        <Image src={bg} className='header-img' />
        <View className='info'>
          <Text className='temperature' >
            11℃
          </Text>
          <View className='location'>
            <AtIcon value='map-pin' size='20' color='#FFF'></AtIcon>
            <Text className='location-name'>
              重庆
            </Text>
          </View>
          <View className='activity'>
            <AtIcon value='bell' size='20' color='#FFF'></AtIcon>

            <Text className='activity_text'>
              活动
            </Text>
          </View>

        </View>
        <View className='search'>
          <Image src={search} className='search_icon' onClick={this.onSearch.bind(this)} />
          <Input style=''
            className='search_input'
            placeholder-style='font-size:14px'
            type='text'
            placeholder='请输入关键词'
          />
        </View>



      </View>
    )
  }
}

export default HomeNav
