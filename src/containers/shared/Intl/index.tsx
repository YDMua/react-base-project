import React, { Component } from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import { IProps } from './type'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'

addLocaleData([...zh, ...en])
import { observer, inject } from 'mobx-react'

const langMap = {
  zh: zhCN,
  en: enUS
}

@inject('globalStore')
@observer
class Intl extends Component<IProps> {
  render() {
    const { globalStore, children } = this.props
    console.log('language', globalStore.language)
    return (
      <IntlProvider
        locale={globalStore.language}
        messages={langMap[globalStore.language]}
      >
        {children}
      </IntlProvider>
    )
  }
}
export default Intl
