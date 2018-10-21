import Home from '@views/Home'
import Login from '@views/Login'

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
