import { Rate } from 'antd'
import * as React from 'react'
import { Home, HomeHeader, HomeIntro } from './style'
import logo from '@images/logo.svg'
// import './style.scss'
class App extends React.Component {
  public render() {
    return (
      <Home>
        <HomeHeader>
          <img className="home-header-logo" src={logo} alt="logo" />
          <h2 className="home-header-title">Welcome to React</h2>
        </HomeHeader>

        <HomeIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </HomeIntro>
        <Rate character="6" />
      </Home>
    )
  }
}

export default App
