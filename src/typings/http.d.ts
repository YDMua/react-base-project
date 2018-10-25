declare namespace Http {
  interface IConstructorOpts {
    baseUrl: string
    proKey: string
    format?: string
    timeout?: number
    headers?: object
    [props: string]: any
  }
  interface IMethods {
    get?(url: string, data: object, apiOpts?: any): Promise<IResponse>
    post?(url: string, data: object, apiOpts?: any): Promise<IResponse>
  }

  interface IResponse {
    [props: string]: any
  }
}
