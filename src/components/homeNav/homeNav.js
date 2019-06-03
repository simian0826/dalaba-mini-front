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
            <AtIcon value='map-pin' size='30' color='#FFF'></AtIcon>
            <Text className='location-name'>
              重庆
            </Text>
          </View>
          <View className='activity'>
            <AtIcon value='bell' size='30' color='#FFF'></AtIcon>

            <Text style=''>
              活动
            </Text>
          </View>

        </View>
        <View className='search'>
          <Image src={search} style='width: 20px; height: 18px; position: absolute; right: 20px;top: 8px;z-index:999' onClick={this.onSearch.bind(this)} />
          <Input style='background:#fff;border-radius:4px;padding:4px 30px 4px 10px;width:100%'
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
