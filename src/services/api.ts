import Http from '@util/http'
import config from '../env/dev'

export const initHttp = new Http({
  baseUrl: config.baseUrl,
  proKey: config.proKey,
  prefix: config.prefix
})

const { post } = initHttp.http

export const login = (data: object) =>
  post('api/staff/login', data, { shouldAddToken: false })
