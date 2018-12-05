import { Rate, Button } from 'antd'
import * as React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { HomeWrap, HomeHeader, HomeIntro } from './style'
import logo from '@images/logo.svg'
import { IProps } from './type'
import { observer, inject } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@inject('globalStore')
@observer
class Home extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  changeLanguage() {
    const { language } = this.props.globalStore
    let lang = language
    lang = lang === 'zh' ? 'en' : 'zh'
    this.props.globalStore.changeLanguage(lang)
  }
  public render() {
    const { userInfo, language } = this.props.globalStore
    return (
      <HomeWrap>
        <HomeHeader>
          <img className="home-header-logo" src={logo} alt="logo" />
          <h2 className="home-header-title">
            <FormattedMessage id="title" />
          </h2>
        </HomeHeader>
        <HomeIntro>欢迎尝试小蚁重建的基础框架</HomeIntro>
        <Rate character="6" />
        <div>
          访问者：
          {userInfo.user_name}
        </div>
        <div>
          年纪：
          {userInfo.age}
        </div>
        <Button
          onClick={() =>
            this.props.globalStore.changeUserInfo({
              user_name: '蚂蚁',
              age: 24
            })
          }
        >
          触发mobx
        </Button>
        <div>
          <Link to="/login">前往登录页面</Link>
        </div>
        <FormattedMessage id="hello" />
        <button onClick={this.changeLanguage.bind(this)}>
          {language === 'zh' ? '切换英文' : 'change chinese'}
        </button>
      </HomeWrap>
    )
  }
}

export default withRouter(Home)
