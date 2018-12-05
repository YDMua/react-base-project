import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
// import { configure } from 'mobx'
import App from './containers/shared/App'
import registerServiceWorker from './registerServiceWorker'
import Intl from '@shared/Intl'

interface newModule extends NodeModule {
  [key: string]: any
}
declare const module: newModule

// 开启mobx严格模式
// configure({ enforceActions: true })
import * as store from './store'

const MOUNT_NODE = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <Provider {...store}>
      <Intl>
        <Component />
      </Intl>
    </Provider>,
    MOUNT_NODE
  )
}
render(App)
if (module.hot) {
  // 热更新React Components
  // module.hot.accept不支持动态的依赖
  // 必须是编译时定义的常量
  module.hot.accept(['containers/shared/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(require('containers/shared/App').default)
  })
}

registerServiceWorker()
