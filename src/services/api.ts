import Http from '@util/http'
import config from '../env/dev'

export const initHttp = new Http({
  baseUrl: config.baseUrl,
  proKey: config.proKey,
  prefix: config.prefix
})

// const { get, post } = initHttp.http

// export const getUserInfo = (data: object) =>
//   get('xxxx', data, { shouldAddToken: false })

// export const login = (data: object) =>
//   post('xxxx', data, { shouldAddToken: false })
