import { Rate } from 'antd'
import * as React from 'react'
import './style.scss'

import logo from '../../../logo.svg'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Rate character="6" />
      </div>
    )
  }
}

export default App
