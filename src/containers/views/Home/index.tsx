import { Rate, Button } from 'antd'
import * as React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { HomeWrap, HomeHeader, HomeIntro } from './style'
import logo from '@images/logo.svg'
import { IProps } from './type'
import { observer, inject } from 'mobx-react'

@inject('globalStore')
@observer
class Home extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  public render() {
    const { userInfo } = this.props.globalStore

    return (
      <HomeWrap>
        <HomeHeader>
          <img className="home-header-logo" src={logo} alt="logo" />
          <h2 className="home-header-title">Welcome to React</h2>
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
      </HomeWrap>
    )
  }
}

export default withRouter(Home)
