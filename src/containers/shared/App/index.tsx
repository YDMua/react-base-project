import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routers } from '@/routers/'
import NotFound from '@views/NotFound'
import { IProps } from './type'

class App extends React.Component<IProps> {
  componentWillMount() {}
  public render() {
    return (
      <Router>
        <Switch>
          {routers.map((item, index) => (
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              component={item.component}
            />
          ))}
          <Route to="/404" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
