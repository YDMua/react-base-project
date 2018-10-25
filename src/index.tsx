import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
// import { configure } from 'mobx'
import App from './containers/shared/App'
import registerServiceWorker from './registerServiceWorker'

// 开启mobx严格模式
// configure({ enforceActions: true })
import * as store from './store'

const MOUNT_NODE = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <Provider {...store}>
      <Component />
    </Provider>,
    MOUNT_NODE
  )
}
render(App)

registerServiceWorker()
