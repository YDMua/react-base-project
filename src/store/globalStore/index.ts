import { observable, action } from 'mobx'

export class GlobalStore {
  @observable
  userInfo: {
    user_name: string
    age: number
  } = {
    user_name: '游客',
    age: 0
  }

  @action
  changeUserInfo = data => {
    this.userInfo = data
  }
}

export default new GlobalStore()
