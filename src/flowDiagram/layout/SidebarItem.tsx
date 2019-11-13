import * as React from 'react'
import styled from 'styled-components'
import { INode, REACT_FLOW_CHART } from '../'

const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
  margin: 10px auto;
  color: white;

  &.start {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: rgb(148, 80, 81);
    line-height: 100px;
    padding: 0;
    text-align: center;
  }

  &.end {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: rgb(110, 97, 107);
    line-height: 100px;
    padding: 0;
    text-align: center;
  }

  &.process-queue {
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 10px;
    background: rgb(217,207,138);
    padding: 0;
  }

  &.process-point {
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgb(155, 127, 105);
    padding: 0;
  }

`

export interface ISidebarItemProps {
  type: string,
  ports?: INode['ports'],
  properties?: any,
}

const defaultPorts = {
  port1: {
    id: 'port1',
    type: 'top',
  },
  port2: {
    id: 'port2',
    type: 'right',
  },
  port3: {
    id: 'port3',
    type: 'bottom',
  },
  port4: {
    id: 'port4',
    type: 'left',
  }
}

export const SidebarItem = ({ type, ports = defaultPorts, properties }: ISidebarItemProps) => {
  return (
    <Outer
      className={type}
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
      {type}
    </Outer>
  )
}
