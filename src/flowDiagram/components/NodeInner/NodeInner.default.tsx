import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 30px;
`

export const NodeInnerDefault = ({ node }: INodeInnerDefaultProps) => {
  return (
    <Outer>
      <p> {(!!node.properties && !!node.properties.name) && `${node.properties.name}`} </p>
      <p> {(!!node.properties && !!node.properties.description) && `${node.properties.description}`} </p>
    </Outer>
  )
}
