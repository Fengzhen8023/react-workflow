import * as React from 'react'
import { IConfig, PortsGroupDefault } from '../../'

export interface IPortsDefaultProps {
  config: IConfig
  children: Array<React.ReactElement<any>>
}

export const PortsDefault = ({ children, config }: IPortsDefaultProps) => {
  return (
    <div>
      <PortsGroupDefault config={config} side="top">
        {children.filter((child) => ['top'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="bottom">
        {children.filter((child) => ['bottom'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="right">
        {children.filter((child) =>  ['right'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="left">
        {children.filter((child) =>  ['left'].includes(child.props.port.type))}
      </PortsGroupDefault>
    </div>
  )
}
