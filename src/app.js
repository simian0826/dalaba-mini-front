import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss'

import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/login/index',
      'pages/verifyCode/index',
      'pages/index/index',
      'pages/mine/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom'
    },
    // tabBar: {
    //   color: "#ccc",
    //   selectedColor: "#da251d",
    //   backgroundColor: "#FBFBFB",
    //   borderStyle: "white",
    //   list: [
    //     {
    //       pagePath: "pages/index/index",
    //       text: "首页",
    //       iconPath: "asset/img/home.png",
    //       selectedIconPath: "asset/img/home0.png"
    //     },
    //     {
    //       pagePath: "pages/mine/index",
    //       text: "我的",
    //       iconPath: "",
    //       selectedIconPath: ""
    //     },
    //   ],
    //   // custom: true,
    //
    // },

  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
