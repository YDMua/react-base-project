import Axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import md5 from 'blueimp-md5'
import qs from 'qs'
import { message } from 'antd'
const methods = ['get', 'post', 'put', 'delete']

export default class Http {
  opts: Http.IConstructorOpts
  http: Http.IMethods = {}
  instance: AxiosInstance

  constructor(props: Http.IConstructorOpts) {
    this.opts = {
      timeout: 100000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      format: 'array',
      ...props
    }
    this.instance = Axios.create({
      baseURL: this.opts.baseUrl,
      headers: this.opts.headers,
      timeout: this.opts.timeout
    })
    this.init()
  }
  init() {
    methods.forEach(method => {
      this.http[method] = async (
        apiName: string,
        data: object,
        apiOpts: any
      ) => {
        const $apiOpts = {
          shouldAddToken: true,
          shouldShowUniyErrorTips: true,
          ...apiOpts
        }
        try {
          const res = await this.instance({
            method,
            url: `${this.opts.prefix}${apiName}`,
            params:
              method === 'get'
                ? this.makeQueryParams(data, $apiOpts.shouldAddToken)
                : this.makeQueryParams({}, $apiOpts.shouldAddToken),
            data: qs.stringify(data)
          })
          const response = res.data
          if (response.code !== -1) {
            return Promise.resolve(response.response)
          } else {
            message.error(response)
            return Promise.reject(response)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      }
    })
  }
  makeQueryParams(data, shouldAddToken: boolean) {
    const ts = parseInt(`${Date.now() / 1000}`, 10)

    return {
      ts,
      key: this.opts.proKey,
      sign: md5(`${ts}`),
      format: this.opts.format,
      token: shouldAddToken ? Cookies.get('token') : '',
      staff_id: shouldAddToken ? Cookies.get('userId') : '',
      ...data
    }
  }
}
