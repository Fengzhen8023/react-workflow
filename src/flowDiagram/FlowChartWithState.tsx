import * as React from 'react'
import styled from 'styled-components'
import mapValues from './container/utils/mapValues'
import { FlowChart, IChart, IConfig, IFlowChartComponents, IOnNodeDoubleClick, IOnLabelDoubleClick } from './'
import { 
  onDragNode, onDragCanvas, onLinkStart, onLinkMove, onLinkComplete, 
  onLinkCancel, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, 
  onCanvasClick, onDeleteKey, onNodeClick,
  onNodeSizeChange, onPortPositionChange, onCanvasDrop 
} from './container/actions'
import 'antd/dist/antd.css'
import { Select, Input, Icon, Button, message } from 'antd'

const ModelBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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

const ButtonBox =styled.div`
  width: 100px;
  height: 30px;
  text-align: center;
  float: right;
  margin-right: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`

const HideModel = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  text-align: center;
  line-height: 20px;
  float: right;
  color: white;
  position: absolute;
  right: 10px;
  top: 5px;
  border-radius: 5px;
  cursor: pointer;

  & i {
    color: #40a9ff;
    font-size: 20px;
  }
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
    height: 30px;
    padding-left: 0.5rem;
  }

  & .ant-select {
    width: 50%;
  }
`

export interface IFlowChartWithStateProps {
  initialValue: IChart
  Components?: IFlowChartComponents
  config?: IConfig
  getWorkFlowChartValue?: (workFlowValue: any) => void
  isAllowAddLinkLabel?: boolean
  nodeRoleOptions: any[]
}

/**
 * Flow Chart With State
 */
export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  constructor (props: IFlowChartWithStateProps) {
    super(props)
    this.state = {
      ...props.initialValue,
      preNodes: Object.keys(props.initialValue.nodes),
      preLinks: Object.keys(props.initialValue.links),
      isModelShow: false,
      showModelName: "",
      nodeName: "",
      nodeId: "",
      nodeRoleOption: "",
      linkLabel: "",
      newNodeId: "",
      clickNodeId: "",
      newLinkId: "",
      clickLinkId: "",
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
      nodeId: clickNodeProperties.Id,
      nodeRoleOption: !!clickNodeProperties.nodeRole ? clickNodeProperties.nodeRole : ""
    })
  }

  onLabelDoubleClick: IOnLabelDoubleClick = ({linkId}) => {
    this.setState((preState) => {
      let preLabel = !!preState.links[linkId].properties && !!preState.links[linkId].properties.label ? preState.links[linkId].properties.label: ""
      return {
        isModelShow: true,
        showModelName: "newLinkModel",
        linkLabel: preLabel,
        modelOption: "editLabel",
        clickLinkId: linkId
      }
    })
  }

  private stateActions = mapValues({
    onDragNode, onDragCanvas, onLinkStart, onLinkMove, onLinkComplete, 
    onLinkCancel, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, 
    onCanvasClick, onDeleteKey, onNodeClick,
    onNodeSizeChange, onPortPositionChange, onCanvasDrop,
    onNodeDoubleClick: this.onNodeDoubleClick,
    onLabelDoubleClick: this.onLabelDoubleClick
  }, (func: any) => (...args: any) => this.setState(func(...args)))

  hideModel = () => {
    this.setState({
      isModelShow: false,
      nodeName: "",
      nodeId: "",
      linkLabel: ""
    });
  }

  handleNameInput = (e: any) => {
    this.setState({
      nodeName: e.currentTarget.value
    });
  }

  handleDescriptionInput = (e: any) => {
    this.setState({
      nodeId: e.currentTarget.value
    });
  }

  handleLinkDescriptionInput = (e: any) => {
    this.setState({
      linkLabel: e.currentTarget.value
    });
  }

  setNodeInfo = (): boolean => {
    if (this.state.nodeName === "") {
      this.warningMessage("Please input the node name!")
      return false
    }
    let _nodes = this.state.nodes;
    let _nodeId = this.state.modelOption === "addNode" ? this.state.newNodeId : this.state.clickNodeId
    _nodes[_nodeId].properties = {
      name: this.state.nodeName,
      Id: this.state.nodeId,
      nodeRole: this.state.nodeRoleOption
    }
    this.setState({
      nodes: _nodes,
      isModelShow: false
    });
    return true
  }

  setLinkInfo = () => {
    let _links = this.state.links;
    if (this.state.modelOption === "editLabel") {
      _links[this.state.clickLinkId].properties = {
        label: this.state.linkLabel
      }
    } else if (this.state.modelOption === "addLabel") {
      _links[this.state.newLinkId].properties = {
        label: this.state.linkLabel
      }
    }

    this.setState({
      links: _links,
      isModelShow: false,
      linkLabel: ""
    });
  }

  handleNodeRoleChange = (value: string): void => {
    // console.log(value)
    this.setState({
      nodeRoleOption: value
    })
  }

  renderAddNewNodeModel = () => {
    const { nodeRoleOptions = [] } = this.props
    // console.log("nodeRoleOptions: ", nodeRoleOptions)
    const { Option } = Select;
    return (
      <ModelBox className={this.state.isModelShow ? "" : "hide"}>
        <ModelContent>
          <HideModel onClick={this.hideModel}>
            <Icon type="close-circle" />
          </HideModel>
          <div className="InputBox">
            <InputBox>
              <label>Name:</label>
              <Input onChange={this.handleNameInput} value={this.state.nodeName} type="text" />
            </InputBox>
            <InputBox>
              <label>Id:</label>
              <Input onChange={this.handleDescriptionInput} value={this.state.nodeId} type="text" />
            </InputBox>
            <InputBox>
                <label>Role:</label>
                <Select value={!!this.state.nodeRoleOption ? this.state.nodeRoleOption : nodeRoleOptions[0].rGuid} onChange={this.handleNodeRoleChange}>
                  {
                    nodeRoleOptions.map(role => (<Option key={role.rGuid} value={!!role ? role.rGuid : ""}>{!!role ? role.rName : ""}</Option>))
                  }
                </Select>
            </InputBox>
          </div>
          <ButtonBox>
            <Button type="primary" onClick={this.setNodeInfo}>Confirm</Button>
          </ButtonBox>
        </ModelContent>
      </ModelBox>
    )
  }

  renderAddNewLinkModel = () => {
    if (this.props.isAllowAddLinkLabel !== true) {
      return false
    }
    return (
      <ModelBox className={this.state.isModelShow ? "" : "hide"}>
        <ModelContent>
          <HideModel onClick={this.hideModel}>
            <Icon type="close-circle" />
          </HideModel>
          <div className="InputBox">
            <InputBox>
              <label>Name:</label>
              <Input onChange={this.handleLinkDescriptionInput} value={this.state.linkLabel} type="text" />
            </InputBox>
          </div>
          <ButtonBox>
            <Button type="primary" onClick={this.setLinkInfo}>Confirm</Button>
          </ButtonBox>
        </ModelContent>
      </ModelBox>
    )
  }

  warningMessage = (content: string): void => {
    message.warning(content);
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
    // console.log("flow data: ", JSON.stringify(flowData))
    if (!!this.props.getWorkFlowChartValue) {
      this.props.getWorkFlowChartValue(flowData)
    }

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
        modelOption: "addLabel",
        newLinkId: _newLink[0]
      });
    }

    if(addedLinkNumber != this.state.preLinks.length) {
      this.setState((preState) => ({
          preLinks: Object.keys(preState.links)
      }))
    }

    if (Object.keys(this.state.nodes).length > this.state.preNodes.length) {
      // console.log("Add Node");
      let preNodes = this.state.preNodes;
      let currentNodes = Object.keys(this.state.nodes);
      let newNode = currentNodes.filter(node => !preNodes.includes(node))

      this.setState({
        isModelShow: true,
        showModelName: "newNodeModel",
        modelOption: "addNode",
        newNodeId: newNode[0],
        nodeName: "",
        nodeId: ""
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
    // console.log("this state: ", this.state)

    return (
      <React.Fragment>
        { this.state.showModelName === "newNodeModel" ? this.renderAddNewNodeModel() : ""}
        { this.state.showModelName === "newLinkModel" ? this.renderAddNewLinkModel() : ""}
        <FlowChart
          chart={this.state}
          callbacks={this.stateActions}
          Components={ Components }
          config={config}
          isAllowAddLinkLabel={!!this.props.isAllowAddLinkLabel}
        />
      </React.Fragment>
    )
  }
}