import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Swiper, SwiperItem, AtTabBar } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui'
import pintuan from '../../asset/img/pintuan.png'
import xunjia from '../../asset/img/xunjia.png'
import kanjia from '../../asset/img/kanjia.png'
import daigou from '../../asset/img/daigou.png'
import headerIcon from '../../asset/img/icon.png'
import { connect } from '@tarojs/redux'
import HomeNav from '../../components/homeNav/homeNav'
import TabNav from '../../components/tabNav/tabNav'

import { add, minus, asyncAdd } from '../../actions/counter'
import { getHomeData} from "../../api/api";
import './index.scss'


//
// @connect(({ counter, home }) => ({
//   counter, home
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   },
//
//
// }))
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
      home: {},
      decorationCurrent: 0,
      infoCurrent: 0,
      newsCurrent: 0,
      logoCurrent: 0,
    }
  }

  componentWillReceiveProps (nextProps) {

    console.log(this.props, nextProps)
  }

  componentWillMount(){
    this.fetchHomeData();
  }
  componentWillUnmount () {

  }

  componentDidShow () { }

  componentDidHide () { }

  fetchHomeData(){
    this.setState({
      loading: true
    })
    getHomeData().then(res => {
      console.log(res.data);
      this.setState({
        home: res.data,
        loading: false
      })
    }).catch(e =>{
      this.setState({
        loading: false
      })
    })

  }
  handleDecorationTabClick (value) {
    this.setState({
      decorationCurrent: value
    })
  }
  handleInfoTabClick (value) {
    this.setState({
      infoCurrent: value
    })
  }
  handleNewsTabClick (value) {
    this.setState({
      newsCurrent: value
    })
  }
  handleLogoTabClick(value) {
    this.setState({
      logoCurrent: value
    })
  }



  renderSupplier(item){
    return (
      <View className='supplier_item' key={item.id}>
        <View className='supplier_img_container' >
          <Image
            className='supplier_img'
            src={item.logo}
            mode='scaleToFill'
          >
          </Image>
        </View>
        <View className='supplier_info_container at-row at-row__align--end' style=''>
          <View className='supplier_title' style='margin-bottom:10px'>
            <Text style='font-size:18px'>{item.agent}</Text>
          </View>

            <View className='supplier_info'>
              <Text style='color:#aaa'>材料分类：</Text>{item.materialName}
            </View>
            <View className='supplier_info'>
              <Text style='color:#aaa'>主营品牌：</Text>{item.brand}
            </View>
        </View>

      </View>
    )
  }
  renderProject(item, index){
    return(
      <View className='project_item'  key={item.id}>
        <View className='project_index_container'>
          <View className='project_index'>{index + 1}</View>
        </View>
        <View className='project_info_container'>
          <View className='project_info_title'>
            {item.name}
          </View>
          <View className='project_info_sub_title'>
            {item.type}<Text style='padding:0 10px'>|</Text>{item.phase} {item.intelligences ? <Text className='project_accurate_info'>精准情报</Text> : null}
          </View>
        </View>
        <View className='project_extra_container'>
          {item.source === 0
          ? <View className='project_user_tag'>
              用户
            </View>
          : null

          }

        </View>
      </View>
    )
  }
  renderInquire(item){
      return (
        <View className='info_item_container' key={item.id}>
          <View className='info_item'>
            <View className='info_item_header'>
              <View className='info_item_avatar_container'>
                <Image
                  src={headerIcon}
                  className='info_item_avatar'
                  mode='scaleToFill'
                >

                </Image>
              </View>
              <View className='info_item_title_container'>
                <View className='info_item_title'>
                  {item.name}
                </View>
                <View className='info_item_date'>
                  {item.createdAtStr}
                </View>
              </View>
            </View>

            <View className='info_item_body'>
              <View className='at-col at-col-12 mb-4'>
                询价材料 : <Text className='info_item_text'> {item.materialsName}</Text>
              </View>
              <View className='at-col at-col-12 mb-4'>
                品牌 : <Text className='info_item_text'> {item.brand}</Text>
              </View>
              <View className='at-col at-col-12 mb-4'>
                分类 : <Text className='info_item_text'> {item.category}</Text>
              </View>
            </View>
            <View className='info_item_footer'>
              <View>
                <View>
                  <AtIcon  value='eye' size='18' color='#aaa'></AtIcon><Text className='ml-2'>{item.watch}</Text>
                </View>
              </View>
              <View>
                <View>
                  <AtIcon  value='heart' size='18' color='#aaa'></AtIcon><Text className='ml-2'>{item.likes}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )
  }

  renderProjectCooperation(item){
    return (
      <View className='info_item_container' key={item.id}>
        <View className='info_item'>
          <View className='info_item_header'>
            <View className='info_item_avatar_container'>
              <Image
                src={headerIcon}
                className='info_item_avatar'
                mode='scaleToFill'
              >

              </Image>
            </View>
            <View className='info_item_title_container'>
              <View className='info_item_title'>
                {item.usrName}
              </View>
              <View className='info_item_date'>
                {item.createdAtStr}
              </View>
            </View>
          </View>

          <View className='info_item_body'>
            <View className='at-col at-col-12 mb-4'>
              项目名称 : <Text className='info_item_text'> {item.projectName}</Text>
            </View>
            <View className='at-col at-col-12 mb-4'>
              材料 : <Text className='info_item_text'> {item.materialsName}</Text>
            </View>
            <View className='at-col at-col-12 mb-4'>
              品牌 : <Text className='info_item_text'> {item.brand}</Text>
            </View>
          </View>
          <View className='info_item_footer'>
            <View>
              <View>
                <AtIcon  value='eye' size='18' color='#aaa'></AtIcon><Text className='ml-2'>{item.watch}</Text>
              </View>
            </View>
            <View>
              <View>
                <AtIcon  value='heart' size='18' color='#aaa'></AtIcon><Text className='ml-2'>{item.likes}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderNews(item, index){
    return(
        index === 0
        ?
        <View className='news_item_first pb-3 pt-4'>
          <View className='news_item_img_container'>
            <Image
              src={item.imageUri}
              className='img'
              mode='scaleToFill'
            >
            </Image>
          </View>
          <View className='news_item_info_container pl-3'>
            <View className='title'>
              {item.title}
            </View>
            <View className='detail'>
              {item.summary}
            </View>
          </View>
        </View>
        :
        <View className='news_item  pb-3 pt-4'>
          <View className='dot'></View>
          <View className='title pl-3'> {item.title}</View>
        </View>
    )
  }

  render () {
    let {home} = this.state;
    //console.log(home);
    const decorationTabList = [{ title: '家装商家' }, { title: '公装商家' }, { title: '项目信息' }];
    const InfoTabList = [{ title: '询价信息' }, { title: '项目合作信息' }];
    const newsTabList = [{ title: '平台动态' }, { title: '行业资讯' }];
    const logoTabList = [{ title: '供应商' }, { title: '设计施工单位' }, { title: '开发商/企事业单位' }];

    //菜单栏每8个为一个滑块
    let navSwipers = [];
    if (home.categories) {
      for (let i = 0, length = Math.ceil(home.categories.length / 8); i < length; i++){
        let swiperItemLength = 8;
        if ((i + 1) * 8 < home.categories.length) {
          navSwipers.push(home.categories.slice(i * swiperItemLength, i  + swiperItemLength))
        }else {
          navSwipers.push(home.categories.slice(i * swiperItemLength, i  + home.categories.length ))
        }
      }
    }

    return (

      <View className='app_container' style=''>
        <HomeNav />
        <View className='home_container'>
          <AtToast isOpened={this.state.loading} text='加载中' status='loading' duration={0} hasMask></AtToast>
          <Swiper
            indicatorColor='#999'
            indicatorActiveColor='#333'
            indicatorDots
            className='nav_container mb-5'
          >
            { navSwipers
              ? navSwipers.map(swiperItem =>{
                return(
                  <SwiperItem className='swiper_item_container'>
                      {
                        swiperItem.map(item =>{
                          return(
                            <View className='nav_item' >
                              <Image
                                mode='widthFix'
                                className='nav_icon'
                                src={item.iconWapUrl}
                              >
                              </Image>
                              <Text className='nav_title'>{item.name}</Text>
                            </View>
                          )
                        })
                      }
                  </SwiperItem>
                )
              })
              : null
            }
          </Swiper>

          <View style='height:200px;' className='mb-5'>
            <Swiper
              style='width:100%;height:100%'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              indicatorDots
            >
              {
                home.banners
                  ? home.banners.map(item =>{
                    return(
                      <SwiperItem>
                        <Image mode='scaleToFill' src={item.picUrl} style='width:100%'>
                        </Image>
                      </SwiperItem>

                    )
                  })
                  : null
              }
            </Swiper>
          </View>
          <View className='mb-5 at-row at-row--wrap decoration_container'>
            <View className='at-col at-col-12' style='background:#fff' >
              <AtTabs
                swipeable
                current={this.state.decorationCurrent}
                tabList={decorationTabList}
                onClick={this.handleDecorationTabClick.bind(this)}
              >
                <AtTabsPane current={this.state.decorationCurrent} index={0} >
                  <View >
                    {
                      home.homeSuppliersRecommend
                        ? home.homeSuppliersRecommend.map(item =>{
                          return this.renderSupplier(item)
                        })
                        : null
                    }

                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>
                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.decorationCurrent} index={1}>
                  <View >
                    {
                      home.projectSuppliersRecommend
                        ? home.projectSuppliersRecommend.map(item =>{
                          return this.renderSupplier(item)
                        })
                        : null
                    }
                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>

                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.decorationCurrent} index={2}>
                  <View >
                    {
                      home.projectsRecommend
                        ? home.projectsRecommend.map((item, index) =>{
                          return this.renderProject(item, index)
                        })
                        : null
                    }
                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>

                  </View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>

          <View className='mb-5 at-row at-row--wrap info_tab_container'>
            <View className='at-col at-col-12' style='background:#fff' >
              <AtTabs
                swipeable
                current={this.state.infoCurrent}
                tabList={InfoTabList}
                onClick={this.handleInfoTabClick.bind(this)}
              >
                <AtTabsPane current={this.state.infoCurrent} index={0} >
                  <View className='info_container'>
                      {
                        home.inquiries
                          ? home.inquiries.map((item, index) =>{
                            return this.renderInquire(item, index)
                          })
                          : null
                      }
                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>

                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.infoCurrent} index={1}>
                  <View className='info_container'>
                    {
                      home.projectCooperations
                        ? home.projectCooperations.map((item, index) =>{
                          return this.renderProjectCooperation(item, index)
                        })
                        : null
                    }

                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>

                  </View>
                </AtTabsPane>

              </AtTabs>
            </View>
          </View>
          <View className='mb-5 broadcast_container'>
            <View className='broadcast_block px-3 py-5'>
              <View className='img_container mb-3'>
                <Image src={xunjia} style='width:60%' mode='widthFix' />
              </View>
              <View className='text'>
                为您询价
              </View>
            </View>
            <View className='broadcast_block px-3 py-5'>
              <View className='img_container mb-3'>
                <Image src={kanjia} style='width:60%' mode='widthFix' />
              </View>
              <View className='text'>
                为您砍价
              </View>
            </View>
            <View className='broadcast_block px-3 py-5'>
              <View className='img_container mb-3'>
                <Image src={daigou} style='width:60%' mode='widthFix' />
              </View>
              <View className='text'>
                为您代购
              </View>
            </View>
            <View className='broadcast_block px-3 py-5'>
              <View className='img_container mb-3'>
                <Image src={pintuan} style='width:60%' mode='widthFix' />
              </View>
              <View className='text'>
                为您拼团
              </View>
            </View>

          </View>

          <View className='mb-5 at-row at-row--wrap news_tab_container'>
            <View className='at-col at-col-12' style='background:#fff' >
              <AtTabs
                swipeable
                current={this.state.newsCurrent}
                tabList={newsTabList}
                onClick={this.handleNewsTabClick.bind(this)}
              >
                <AtTabsPane current={this.state.newsCurrent} index={0} >
                  <View className='news_container px-4 '>
                    {
                      home.platformNews
                        ? home.platformNews.map((item, index) =>{
                          return this.renderNews(item, index)
                        })
                        : null
                    }
                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>

                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.newsCurrent} index={1}>
                  <View className='news_container'>
                    {
                      home.industryNews
                        ? home.industryNews.map((item, index) =>{
                          return this.renderNews(item, index)
                        })
                        : null
                    }

                    <View className='more_container'>
                      <View className='more_container_btn'>
                        更多
                      </View>
                    </View>

                  </View>
                </AtTabsPane>

              </AtTabs>
            </View>
          </View>


        </View>

        <View className='mb-5 at-row at-row--wrap logo_tab_container'>
          <View className='at-col at-col-12' style='background:#fff' >
            <AtTabs
              swipeable
              scroll
              current={this.state.logoCurrent}
              tabList={logoTabList}
              onClick={this.handleLogoTabClick.bind(this)}
            >
              <AtTabsPane current={this.state.newsCurrent} index={0}>
                <View className='news_container px-4 '>
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.newsCurrent} index={1}>
                <View className='news_container px-4 '>
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.newsCurrent} index={2}>
                <View className='news_container px-4 '>
                </View>
              </AtTabsPane>


            </AtTabs>
          </View>
        </View>

        <TabNav />

      </View>
    )
  }
}

export default Index
