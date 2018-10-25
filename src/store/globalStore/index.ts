import { observable, action } from 'mobx'

export class GlobalStore {
  @observable
  userInfo: {
    user_name: string
    age: number
  } = {
    user_name: '',
    age: 18
  }

  @action
  changeTest = data => {
    console.log('进来了', data)
    this.userInfo = data
  }
}

export default new GlobalStore()
