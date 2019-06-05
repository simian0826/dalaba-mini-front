import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image  } from '@tarojs/components'
import { AtIcon, AtTabBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './tabNav.scss'
import {changeCurrent} from "../../actions/tabNav";
import { verifyRedirect } from '../../common/verifyPath'

@connect(({ tabNav }) => ({
  tabNav
}), (dispatch) => ({
  changeCurrent (value) {

    dispatch(changeCurrent(value))
  },

}))
class TabNav extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  componentWillMount(){
    console.log(this.$router.path);
    console.log(this.props.tabNav);
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
    console.log(this.$router.path);
  }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {

    this.props.changeCurrent(value)
    let path = ''
    switch (value) {
      case 0:
        path = '/pages/index/index'

        break;
      case 1:
        path = '/pages/index/index'

        break;
      case 2:
        path = '/pages/index/index'

        break;
      case 3:
        path = '/pages/index/index'

        break;
      case 4:
        path = '/pages/mine/index'

        break;
      default:
          break
    }
    verifyRedirect(path)

  }

  render () {
    return (
      <View>
        <AtTabBar
          fixed
          selectedColor='#da251d'
          color='#ccc'
          tabList={[
            { title: '首页', iconType: 'home', },
            { title: '分类', iconType: 'menu' },
            { title: '发布', image: '/asset/img/add.png' },
            { title: '消息', iconType: 'message' },
            { title: '我的', iconType: 'folder',}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.tabNav.current}
        />
      </View>


    )
  }
}

export default TabNav
