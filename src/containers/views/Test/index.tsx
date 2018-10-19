import * as React from 'react'
import {IProps, IState} from './type'
import './style.scss'; 
class Test extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // 数据挂载之后 可以操作数据和dom 
  }

  componentWillUnmount() {
    // 数据挂载之前 可以操作数据 不可以操作dom
  }

  render() {
    return (
      <div className="test-page">
        Test
      </div>
    )
  }
}
export default Test
