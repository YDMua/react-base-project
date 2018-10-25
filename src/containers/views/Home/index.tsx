import { Rate } from 'antd'
import * as React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { HomeWrap, HomeHeader, HomeIntro } from './style'
import logo from '@images/logo.svg'
// import { IProps } from './type'
import { observer, inject } from 'mobx-react'
// import { toJS } from 'mobx'
interface IP {
  globalStore: IGlobalStore.GlobalStore
}
@inject('globalStore')
@observer
class Home extends React.Component<IP> {
  constructor(props) {
    super(props)
  }
  // componentWillMount() {
  //   const { history } = this.props
  //   history.replace('/login')
  // }
  componentDidMount() {}

  // @computed
  // get hello() {
  //   const { test } = this.props.globalStore
  //   return test ? test.hello : ''
  // }
  public render() {
    const { userInfo } = this.props.globalStore
    console.log('hello', userInfo)
    const newDat = {
      user_name: '蚂蚁',
      age: 24
    }
    return (
      <HomeWrap>
        <HomeHeader>
          <img className="home-header-logo" src={logo} alt="logo" />
          <h2 className="home-header-title">Welcome to React</h2>
        </HomeHeader>
        <HomeIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </HomeIntro>
        <Rate character="6" />
        <div>
          姓名：
          {userInfo.user_name}
        </div>
        <div>
          年纪
          {userInfo.age}
        </div>
        <button onClick={this.props.globalStore.changeTest.bind(this, newDat)}>
          点击我改变
        </button>
        <Link to="/login">前往登录页面</Link>
      </HomeWrap>
    )
  }
}

export default withRouter(Home)
