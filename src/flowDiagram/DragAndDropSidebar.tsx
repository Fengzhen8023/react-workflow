import * as React from 'react'
import { FlowChartWithState } from './FlowChartWithState'
import { Content, Page, Sidebar, SidebarItem } from './layout'
import { chartSimple } from './exampleChartState'


const DragAndDropSidebar = () => {
  const [workFlowValue, setWorkFlowValue] = React.useState({});
  
  const getWorkFlowChartValue = (newWorkFlowValue) => {
    setWorkFlowValue(newWorkFlowValue)
    console.log("---workFlowValue---: ", workFlowValue)
  }

  return (
    <Page>
    <Content>
      <FlowChartWithState initialValue={chartSimple} getWorkFlowChartValue={getWorkFlowChartValue} isAllowAddLinkLabel={ false } />
    </Content>
    <Sidebar>
      <div style={ {margin: "10px", padding: "10px", background: "rgba(0,0,0,0.05)"} }>
        Drag and drop these items onto the canvas.
      </div>
      <SidebarItem type="start" />
      <SidebarItem type="process-queue" />
      <SidebarItem type="process-point" />
      <SidebarItem type="end" />
    </Sidebar>
  </Page>
  )
}


export default DragAndDropSidebar;