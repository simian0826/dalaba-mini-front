import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Swiper, SwiperItem, AtTabBar } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui'
import pintuan from '../../asset/img/pintuan.png'
import xunjia from '../../asset/img/xunjia.png'
import kanjia from '../../asset/img/kanjia.png'
import daigou from '../../asset/img/daigou.png'
import headerIcon from '../../asset/img/icon.png'
import HomeNav from '../../components/homeNav/homeNav'
import TabNav from '../../components/tabNav/tabNav'
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

      <View className='app_container' style=''>

        <TabNav />

      </View>
    )
  }
}

export default Index
