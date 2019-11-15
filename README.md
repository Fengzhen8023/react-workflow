## 安装

```shell
npm install xxx
```

## react-work-flow 简介

首先非常感谢 **[MrBlenny](https://github.com/MrBlenny)** ， 因为这款插件是在 **[react-flow-chart](<https://github.com/MrBlenny/react-flow-chart>)** 的基础之上完成的。

在介绍这款插件之前，我们首先通过下面的GIF图片来看一下，这款插件可以用来做什么：

![](.\guideImage\002.gif)

如上图所示，这是一款React插件，主要用来帮助用户快速搭建一个 **工作流（work-flow）** 的图形界面。

插件的主要基本功能有：

1. 推拽添加节点，并添加节点的名字和描述信息
2. 拖拽添加连线，连接两个节点。并选择性地添加连线地说明文字
3. 双击节点，修改节点的名字和描述信息
4. 双击连线，修改连线的描述信息
5. 点击节点或连线，按下 **Back** 键删除节点或连线

插件的高级功能有：

1. 自定义样式，开发人员可以自定义修改节点、连线的样式
2. 更多高级功能正在开发中

该插件的功能非常灵活，很多功能都可以自行进行控制，具体的做法我们马上就会讲到。

## 插件的使用

#### 1. 搭建最基本的页面

成功安装插件之后，我们先将基本的页面搭建起来，代码实例如下：

```React
import * as React from 'react'
import { FlowChartWithState, Content, Page, Sidebar, SidebarItem } from 'react-work-flow'

// 初始化一个空画板
const chartSimple = {
    offset: {
        x: 0,
        y: 0
    },
    nodes: {
    },
    links: {
    },
    selected: {},
    hovered: {}
}

const DragAndDropSidebar = () => {
    return (
        <Page>
            <Content>
                <FlowChartWithState initialValue={chartSimple} />
            </Content>
            <Sidebar>
                <div style={{ margin: "10px", padding: "10px", background: "rgba(0,0,0,0.05)" }}>
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
```

页面搭建完成之后，将该页面放进自己的项目中，打开网页，我们就可以看到一个空白的work-flow操作界面：

![](.\guideImage\blank.png)

#### 2. 获取work-flow的JSON数据

当我们当我们成功创建一个work-flow之后，肯定是想要把它的相关数据保存到数据库中的，以方便后期我们使用这条数据重新渲染work-flow。

这是一个JSON格式的数据，获取数据的示例代码如下：

```react
// 无关代码已经省略

const DragAndDropSidebar = () => {
    let workFlowValue = {}

    let getWorkFlowChartValue = (newWorkFlowValue) => {
        workFlowValue = newWorkFlowValue
        console.log("work-flow 的JSON数据： ", workFlowValue)
    }

    return (
        <Page>
            <Content>
                <FlowChartWithState 
                    initialValue={chartSimple} 
                    getWorkFlowChartValue={getWorkFlowChartValue} />
            </Content>
        </Page>
    )
}
```

#### 3. 是否允许给连线添加说明文字

在添加一条新的连线或者双击连线时，默认情况下是不能添加说明的，如果想要开启这个功能，直接进行传参，开启功能：

```react
// 无关代码已经省略

const DragAndDropSidebar = () => {
    return (
        <Page>
            <Content>
                <FlowChartWithState 
                    initialValue={chartSimple} 
                    isAllowAddLinkLabel={true} />
            </Content>
        </Page>
    )
}
```

#### 4. 自定义样式，修改节点的样式

自定义样式的时候，建议大家使用 **[styled-components](<https://www.npmjs.com/package/styled-components>)** 插件进行快速定义样式，首先执行以下代码安装该插件：

```shell
npm i styled-components
```

然后参考如下代码进行自定义修改节点的样式：

```react
// 无关代码已经省略

import styled from 'styled-components'

// 自定义 start 节点的样式
const StartPoint = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(148, 80, 81);
    color: red;
    border-radius: 50%;
`

// 自定义 proces-queue 节点的样式
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

// 自定义 process-point 节点的样式
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

// 自定义 end 节点的样式
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

const NodeCustom = React.forwardRef(({ node, children, ...otherProps }, ref) => {
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
    return (
        <StartPoint ref={ref} {...otherProps}>
            {children}
        </StartPoint>
    )
})

const chartSimple = {
    offset: {
        x: 0,
        y: 0
    },
    nodes: {
    },
    links: {
    },
    selected: {},
    hovered: {}
}

const DragAndDropSidebar = () => {
    return (
        <Page>
            <Content>
                <FlowChartWithState 
                    initialValue={chartSimple} 
                    Components={{
                        Node: NodeCustom
                    }} />
            </Content>
        </Page>
    )
}
```

需要注意的是：到目前为止，本插件中只有四种类型的节点：start、process-queue、process-point、end。

目前暂不支持增添其他类型的节点，但是在后续版本中，可能会有这个功能。

#### 5. 自定义样式，修改连线的样式

修改连线样式的方法和修改节点的样式大同小异，参考代码如下：

```react
// 代码待完善
```



#### 6. 自定义样式，修改节点上的端点

修改端点样式的方法和修改节点的样式大同小异，参考代码如下：

```react
import styled from 'styled-components'

const PortCustomOuter = styled.div`
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

const PortCustom = (props) => {
  return <PortCustomOuter />
}


const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
  },
  links: {
  },
  selected: {},
  hovered: {}
}


const DragAndDropSidebar = () => {
  return (
    <Page>
      <Content>
        <FlowChartWithState 
          initialValue={chartSimple} 
          Components={{
            Port: PortCustom
          }}
          />
      </Content>
    </Page>
  )
}

export default DragAndDropSidebar;
```



## 未完待续...



















