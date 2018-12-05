import { observable, action } from 'mobx'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'
export class GlobalStore {
  @observable
  userInfo: {
    user_name: string
    age: number
  } = {
    user_name: '游客',
    age: 0
  }

  @observable
  language: string = 'en'

  @action
  changeUserInfo = data => {
    this.userInfo = data
  }

  @action
  changeLanguage(val: any) {
    this.language = val
  }

  @action
  chooseLocale(val: any) {
    console.log('choose', val)
    const val2 = val || navigator.language.split('_')[0]
    switch (val2) {
      case 'en':
        return enUS
      case 'zh':
        return zhCN
      default:
        return enUS
    }
  }
}

export default new GlobalStore()
