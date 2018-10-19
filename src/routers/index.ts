import Home from '../containers/views/Home'
import Login from 'src/containers/views/Login'

export const routers = [
  {
    path: '/',
    component: Home,
    name: '首页',
    exact: true
  },
  {
    path: '/login',
    component: Login,
    name: '登录'
  }
]
