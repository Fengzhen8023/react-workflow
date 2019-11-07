import * as React from 'react'
import { FlowChart, IChart, IConfig, IFlowChartComponents, INodeInnerDefaultProps } from './'
import { 
  onDragNode, onDragCanvas, onLinkStart, onLinkMove, onLinkComplete, 
  onLinkCancel, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, 
  onCanvasClick, onDeleteKey, onNodeClick,
  onNodeSizeChange, onPortPositionChange, onCanvasDrop 
} from './container/actions'
import styled from 'styled-components'
import mapValues from './container/utils/mapValues'
import { IOnNodeDoubleClick } from './'

const ModelBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,0.8);
  z-index: 99;

  &.hide {
    display: none;
  }
`

const ModelContent = styled.div`
  position: relative;
  width: 50%;
  background: #fff;
  margin: 10% auto;
  border-radius: 10px;
  overflow: hidden;
`

const Button =styled.div`
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 27px;
  border: 2px solid rgb(148,80,81);
  float: right;
  margin-right: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
`

const HideModel = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  background: rgb(148,80,81);
  text-align: center;
  line-height: 20px;
  float: right;
  color: white;
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 5px;
  cursor: pointer;
`

const InputBox = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  
  & label {
    width: 20%;
  }

  & input {
    width: 50%;
    height: 30px
  }
`


export interface IFlowChartWithStateProps {
  initialValue: IChart
  Components?: IFlowChartComponents
  config?: IConfig
}

/**
 * Flow Chart With State
 */
class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  constructor (props: IFlowChartWithStateProps) {
    super(props)
    this.state = {
      ...props.initialValue,
      preNodes: Object.keys(props.initialValue.nodes),
      preLinks: Object.keys(props.initialValue.links),
      isModelShow: false,
      showModelName: "",
      nodeName: "",
      nodeDescription: "",
      linkLabel: "",
      newNodeId: "",
      newLinkId: "",
      clickNodeId: "",
      modelOption: "addNode"
    }
  }

  public state: IChart

  onNodeDoubleClick: IOnNodeDoubleClick = ({ nodeId }) => {
    let clickNodeProperties = this.state.nodes[nodeId].properties
    clickNodeProperties = !!clickNodeProperties ? clickNodeProperties : {}

    this.setState({
      isModelShow: true,
      modelOption: "editNode",
      showModelName: "newNodeModel",
      clickNodeId: nodeId,
      nodeName: clickNodeProperties.name,
      nodeDescription: clickNodeProperties.description
    })
  }

  private stateActions = mapValues({
    onDragNode, onDragCanvas, onLinkStart, onLinkMove, onLinkComplete, 
    onLinkCancel, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, 
    onCanvasClick, onDeleteKey, onNodeClick,
    onNodeSizeChange, onPortPositionChange, onCanvasDrop,
    onNodeDoubleClick: this.onNodeDoubleClick
  }, (func: any) =>
      (...args: any) => this.setState(func(...args)))

  hideModel = () => {
    this.setState({
      isModelShow: false,
      nodeName: "",
      nodeDescription: ""
    });
  }

  handleNameInput = (e) => {
    this.setState({
      nodeName: e.currentTarget.value
    });
  }

  handleDescriptionInput = (e) => {
    this.setState({
      nodeDescription: e.currentTarget.value
    });
  }

  handleLinkDescriptionInput = (e) => {
    this.setState({
      linkLabel: e.currentTarget.value
    });
  }

  setNodeInfo = () => {
    let _nodes = this.state.nodes;
    let _nodeId = this.state.modelOption === "addNode" ? this.state.newNodeId : this.state.clickNodeId
    _nodes[_nodeId].properties = {
      name: this.state.nodeName,
      description: this.state.nodeDescription
    }
    this.setState({
      nodes: _nodes,
      isModelShow: false
    });
  }

  setLinkInfo = () => {
    let _links = this.state.links;
    
    _links[this.state.newLinkId].properties = {
      label: this.state.linkLabel
    }

    this.setState({
      links: _links,
      isModelShow: false
    });
  }

  renderAddNewNodeModel = () => {
    return (
      <ModelBox className={this.state.isModelShow ? "" : "hide"}>
        <ModelContent>
          <HideModel onClick={this.hideModel}>X</HideModel>
          <div className="InputBox">
            <InputBox>
              <label>Name:</label>
              <input onChange={this.handleNameInput} value={this.state.nodeName} type="text" />
            </InputBox>
            <InputBox>
              <label>Description:</label>
              <input onChange={this.handleDescriptionInput} value={this.state.nodeDescription} type="text" />
            </InputBox>
          </div>
          <Button onClick={this.setNodeInfo}>Confirm</Button>
        </ModelContent>
      </ModelBox>
    )
  }

  renderAddNewLinkModel = () => {
    return (
      <ModelBox className={this.state.isModelShow ? "" : "hide"}>
        <ModelContent>
          <HideModel onClick={this.hideModel}>X</HideModel>
          <div className="InputBox">
            <InputBox>
              <label>Description:</label>
              <input onChange={this.handleLinkDescriptionInput} value={this.state.linkLabel} type="text" />
            </InputBox>
          </div>
          <Button onClick={this.setLinkInfo}>Confirm</Button>
        </ModelContent>
      </ModelBox>
    )
  }

  componentDidUpdate() {
    //get work flow data
    let flowData = this.state
    delete flowData.offset.node
    for(var key of Object.keys(flowData.nodes)) {
      let node = flowData.nodes[key]
    
      if(node.position && node.position.node) {
        delete node.position.node
      }
    }
    console.log("flow data: ", JSON.stringify(flowData))


    // when user add new link, he shold add the label of this link
    let addedLinkNumber = 0
    for(var linkKey in this.state.links) {
      if (!!this.state.links[linkKey].to && !!this.state.links[linkKey].to.nodeId) {
        addedLinkNumber += 1
      }
    }

    if(addedLinkNumber > this.state.preLinks.length) {
      let _preLinks = this.state.preLinks
      let _currentLinks = Object.keys(this.state.links)
      let _newLink = _currentLinks.filter(link => !_preLinks.includes(link))

      this.setState({
        isModelShow: true,
        showModelName: "newLinkModel",
        newLinkId: _newLink[0]
      });
    }

    if(addedLinkNumber != this.state.preLinks.length) {
      this.setState((preState) => ({
          preLinks: Object.keys(preState.links)
      }))
    }

    if (Object.keys(this.state.nodes).length > this.state.preNodes.length) {
      console.log("Add Node");
      let preNodes = this.state.preNodes;
      let currentNodes = Object.keys(this.state.nodes);
      let newNode = currentNodes.filter(node => !preNodes.includes(node))

      this.setState({
        isModelShow: true,
        showModelName: "newNodeModel",
        modelOption: "addNode",
        newNodeId: newNode[0],
        nodeName: "",
        nodeDescription: ""
      });
    }
    if (Object.keys(this.state.nodes).length != this.state.preNodes.length) {
      this.setState((preState) => ({
        preNodes: Object.keys(preState.nodes)
      }))
    }
  }

  public render () {
    const { Components, config } = this.props
    console.log("this state: ", this.state)

    return (
      <React.Fragment>
        {/* { this.state.showModelName === "newNodeModel" ? this.renderAddNewNodeModel() : this.renderAddNewLinkModel()} */}
        { this.state.showModelName === "newNodeModel" && this.renderAddNewNodeModel() }
        <FlowChart
          chart={this.state}
          callbacks={this.stateActions}
          Components={ Components }
          config={config}
        />
      </React.Fragment>
    )
  }
}

export default FlowChartWithState