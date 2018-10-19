import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routers } from '../../../routers/'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          {routers.map(item => (
            <Route
              exact={item.exact}
              path={item.path}
              component={item.component}
            />
          ))}
        </Switch>
      </Router>
    )
  }
}

export default App
