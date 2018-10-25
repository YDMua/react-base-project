import { RouteComponentProps } from 'react-router'

interface ISelfProp {
  globalStore: IGlobalStore.GlobalStore
}

export type IProps = ISelfProp & RouteComponentProps<any>

export interface IState {}
