import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from './FlowChartWithState'
import { IPortDefaultProps } from './components'
import { Content, Page, Sidebar, SidebarItem } from './layout'
import { chartSimple } from './exampleChartState'
import { INodeDefaultProps, LinkDefault  } from './'
import { generateLabelPosition } from './utils'

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`
const Label = styled.div`
  position: absolute;
  width: 120px;
`

const LabelContent = styled.div`
  padding: 5px 10px;
  background: cornflowerblue;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
`

interface Port {
  id: string,
  type: string,
  position?: any
}

const Message = styled.div`
margin: 10px;
padding: 10px;
background: rgba(0,0,0,0.05);
`

const PortDefaultOuter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: cornflowerblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: cornflowerblue;
  }
  & svg {
    width: 15px;
    height: 15px;
  }
`

const ProcessQueue = styled.div`
  width: 200px;
  height: 120px;
  position: absolute;
  padding: 30px;
  background: rgb(217, 207, 138);
  color: white;
  border-radius: 10px;
  & div {
    padding: 0px;
    margin: 0px;
  }
`

const ProcessPoint = styled.div`
  width: 200px;
  height: 120px;
  position: absolute;
  padding: 30px;
  background: rgb(155, 127, 105);
  color: white;
  & div {
    padding: 0px;
    margin: 0px;
  }
`

const StartPoint = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(148, 80, 81);
  color: white;
  border-radius: 50%;
`

const EndPoint = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(110, 97, 107);
  color: white;
  border-radius: 50%;
`


const NodeCustom = React.forwardRef(({ node, children, ...otherProps }: INodeDefaultProps, ref: React.Ref<HTMLDivElement>) => {
  switch (node.type) {
    case "start":
      return (
        <StartPoint ref={ref} {...otherProps}>
          {children}
        </StartPoint>
      )
    case "end":
      return (
        <EndPoint ref={ref} {...otherProps}>
          {children}
        </EndPoint>
      )
    case "process-queue":
      return (
        <ProcessQueue ref={ref} {...otherProps}>
          {children}
        </ProcessQueue>
      )
    case "process-point":
      return (
        <ProcessPoint ref={ref} {...otherProps}>
          {children}
        </ProcessPoint>
      )
  }
})

const PortCustom = (props: IPortDefaultProps) => {
  return <PortDefaultOuter />
}

const LinkCustom = (props) => {
  console.log("----props---- ", props)
  const { startPos, endPos, link, onLabelDoubleClick } = props
  const { centerX, centerY } = generateLabelPosition(startPos, endPos)
  return (
    <>
      <LinkDefault {...props} />
      <Label style={{ left: centerX, top: centerY }} onDoubleClick={ () => { onLabelDoubleClick({linkId: link.id}) } }>
         { props.link.properties && props.link.properties.label && (
           <LabelContent>{props.link.properties && props.link.properties.label}</LabelContent>
         )}
      </Label>
    </>
  )
}

function validateLink({ linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart }): boolean {

  if (fromNodeId === toNodeId) {
    return false
  }

  return true;
}

const startItemStyle = `
  {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: red;
    line-height: 100px;
    padding: 0;
    text-align: center;
  }
`

const startPoint = {
  port1: {
    id: 'port1',
    type: 'left',
  },
  port2: {
    id: 'port2',
    type: 'right',
  },
  port3: {
    id: 'port3',
    type: 'top',
  },
  port4: {
    id: 'port4',
    type: 'bottom',
  },
  port5: {
    id: 'port5',
    type: 'left',
  },
  port6: {
    id: 'port6',
    type: 'right',
  },
  port7: {
    id: 'port7',
    type: 'top',
  },
  port8: {
    id: 'port8',
    type: 'bottom',
  }
};

const processQueuePoint = {
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
};

const processPoint = {
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
};

const endPoint = {
  port1: {
    id: 'port1',
    type: 'left',
  },
  port2: {
    id: 'port2',
    type: 'right',
  },
  port3: {
    id: 'port3',
    type: 'top',
  },
  port4: {
    id: 'port4',
    type: 'bottom',
  },
}

const nodeRoleOptions = [
  {
    rGuid: "001",
    rName: "001-001"
  },
  {
    rGuid: "002",
    rName: "001-002"
  }
]

const DragAndDropSidebar = () => (
  <Page>
    <Content>
      <FlowChartWithState
        isAllowAddLinkLabel = {true}
        initialValue={chartSimple}
        nodeRoleOptions={nodeRoleOptions}
        Components={{
          Port: PortCustom,
          Node: NodeCustom,
          Link: LinkCustom
        }}
        config={{ readonly: false }} 
      />
    </Content>
    <Sidebar>
      <Message>
        Drag and drop these items onto the canvas.
      </Message>
      <SidebarItem type="start" ports={startPoint} itemStyle={startItemStyle} />
      <SidebarItem type="process-queue" ports={processQueuePoint} />
      <SidebarItem type="process-point"  ports={processPoint} />
      <SidebarItem type="end" ports={ endPoint } />
    </Sidebar>
  </Page>
)

export default DragAndDropSidebar;