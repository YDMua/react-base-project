import { WrappedFormUtils } from 'antd/lib/form/Form'
import { RouteComponentProps } from 'react-router'

interface ISelfProp {
  form: WrappedFormUtils
  globalStore: IGlobalStore.GlobalStore
}

export type IProps = ISelfProp & RouteComponentProps<any>
