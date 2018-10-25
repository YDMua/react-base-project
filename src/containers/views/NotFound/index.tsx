import * as React from 'react'
import { IProps } from './type'
import './style.scss'
class Notfound extends React.Component<IProps> {
  componentDidMount() {
    // 数据挂载之后 可以操作数据和dom
  }

  componentWillUnmount() {
    // 数据挂载之前 可以操作数据 不可以操作dom
  }

  render() {
    return <div className="notfound-page">NotFound</div>
  }
}
export default Notfound
