"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var mapValues_1 = require("./container/utils/mapValues");
var _1 = require("./");
var actions_1 = require("./container/actions");
var element_1 = require("./element");
var ModelBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0,0,0,0.8);\n  z-index: 99;\n\n  &.hide {\n    display: none;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0,0,0,0.8);\n  z-index: 99;\n\n  &.hide {\n    display: none;\n  }\n"])));
var ModelContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 50%;\n  background: #fff;\n  margin: 10% auto;\n  border-radius: 10px;\n  padding: 0.5rem;\n"], ["\n  position: relative;\n  width: 50%;\n  background: #fff;\n  margin: 10% auto;\n  border-radius: 10px;\n  padding: 0.5rem;\n"])));
var ButtonBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100px;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-right: 1rem;\n  text-align: center;\n  margin-right: 40px;\n  margin-bottom: 20px;\n  cursor: pointer;\n"], ["\n  width: 100px;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-right: 1rem;\n  text-align: center;\n  margin-right: 40px;\n  margin-bottom: 20px;\n  cursor: pointer;\n"])));
var InputBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n  padding: 0 1rem;\n  \n  & label {\n    width: 20%;\n  }\n\n  & input {\n    width: 100%;\n    height: 30px;\n    padding-left: 0.5rem;\n  }\n"], ["\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n  padding: 0 1rem;\n  \n  & label {\n    width: 20%;\n  }\n\n  & input {\n    width: 100%;\n    height: 30px;\n    padding-left: 0.5rem;\n  }\n"])));
var timer = null;
/**
 * Flow Chart With State
 */
var FlowChartWithState = /** @class */ (function (_super) {
    __extends(FlowChartWithState, _super);
    function FlowChartWithState(props) {
        var _this = _super.call(this, props) || this;
        _this.onNodeDoubleClick = function (_a) {
            var nodeId = _a.nodeId;
            var clickNodeProperties = _this.state.nodes[nodeId].properties;
            clickNodeProperties = !!clickNodeProperties ? clickNodeProperties : {};
            _this.setState({
                modelOption: "editNode",
                showModelName: "newNodeModel",
                clickNodeId: nodeId,
                nodeName: clickNodeProperties.name,
                nodeId: clickNodeProperties.Id,
                nodeRoleOption: !!clickNodeProperties.nodeRole ? clickNodeProperties.nodeRole : ""
            }, function () {
                _this.setState({
                    isModelShow: true
                });
            });
        };
        _this.onLabelDoubleClick = function (_a) {
            var linkId = _a.linkId;
            _this.setState(function (preState) {
                var preLabel = !!preState.links[linkId].properties && !!preState.links[linkId].properties.label ? preState.links[linkId].properties.label : "";
                return {
                    isModelShow: true,
                    showModelName: "newLinkModel",
                    linkLabel: preLabel,
                    modelOption: "editLabel",
                    clickLinkId: linkId
                };
            });
        };
        _this.stateActions = mapValues_1.default({
            onDragNode: actions_1.onDragNode, onDragCanvas: actions_1.onDragCanvas, onLinkStart: actions_1.onLinkStart, onLinkMove: actions_1.onLinkMove, onLinkComplete: actions_1.onLinkComplete,
            onLinkCancel: actions_1.onLinkCancel, onLinkMouseEnter: actions_1.onLinkMouseEnter, onLinkMouseLeave: actions_1.onLinkMouseLeave, onLinkClick: actions_1.onLinkClick,
            onCanvasClick: actions_1.onCanvasClick, onDeleteKey: actions_1.onDeleteKey, onNodeClick: actions_1.onNodeClick,
            onNodeSizeChange: actions_1.onNodeSizeChange, onPortPositionChange: actions_1.onPortPositionChange, onCanvasDrop: actions_1.onCanvasDrop,
            onNodeDoubleClick: _this.onNodeDoubleClick,
            onLabelDoubleClick: _this.onLabelDoubleClick
        }, function (func) { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.setState(func.apply(void 0, args));
        }; });
        _this.hideModel = function () {
            _this.setState({
                isModelShow: false,
                nodeName: "",
                nodeId: "",
                linkLabel: ""
            });
        };
        _this.handleCancelEditNode = function () {
            if (_this.state.modelOption === "addNode") {
                var _newNodeId_1 = _this.state.newNodeId;
                var _nodes_1 = {};
                var _preNodes_1 = [];
                Object.keys(_this.state.nodes).forEach(function (nodeId) {
                    if (nodeId !== _newNodeId_1) {
                        _nodes_1[nodeId] = _this.state.nodes[nodeId];
                    }
                });
                _this.state.preNodes.forEach(function (preNodeId) {
                    if (preNodeId !== _newNodeId_1) {
                        _preNodes_1.push(preNodeId);
                    }
                });
                _this.setState({
                    newNodeId: "",
                    nodes: _nodes_1,
                    preNodes: _preNodes_1
                });
            }
            _this.hideModel();
        };
        _this.handleNameInput = function (e) {
            _this.setState({
                nodeName: e.currentTarget.value
            });
        };
        _this.handleDescriptionInput = function (e) {
            _this.setState({
                nodeId: e.currentTarget.value
            });
        };
        _this.handleLinkDescriptionInput = function (e) {
            _this.setState({
                linkLabel: e.currentTarget.value
            });
        };
        _this.setNodeInfo = function () {
            // console.log("nodeName: ", this.state.nodeName)
            if (_this.state.nodeName.trim() === "") {
                _this.warningMessage("Please input the node name!");
                return false;
            }
            var _nodes = _this.state.nodes;
            var _nodeId = _this.state.modelOption === "addNode" ? _this.state.newNodeId : _this.state.clickNodeId;
            _nodes[_nodeId].properties = {
                name: _this.state.nodeName,
                Id: _this.state.nodeId,
                nodeRole: _this.state.nodeRoleOption
            };
            _this.setState({
                nodes: _nodes,
                isModelShow: false
            });
            return true;
        };
        _this.setLinkInfo = function () {
            var _links = _this.state.links;
            if (_this.state.modelOption === "editLabel") {
                _links[_this.state.clickLinkId].properties = {
                    label: _this.state.linkLabel
                };
            }
            else if (_this.state.modelOption === "addLabel") {
                _links[_this.state.newLinkId].properties = {
                    label: _this.state.linkLabel
                };
            }
            _this.setState({
                links: _links,
                isModelShow: false,
                linkLabel: ""
            });
        };
        _this.handleNodeRoleChange = function (value) {
            // console.log(value)
            _this.setState({
                nodeRoleOption: value
            });
        };
        _this.renderAddNewNodeModel = function () {
            var _a = _this.props.nodeRoleOptions, nodeRoleOptions = _a === void 0 ? [] : _a;
            // console.log("nodeRoleOptions: ", nodeRoleOptions)
            return (React.createElement(ModelBox, { className: _this.state.isModelShow ? "" : "hide" },
                React.createElement(ModelContent, null,
                    React.createElement("div", { className: "InputBox" },
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Name:"),
                            React.createElement(element_1.Input, { onChange: _this.handleNameInput, value: _this.state.nodeName, type: "text" })),
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Id:"),
                            React.createElement(element_1.Input, { onChange: _this.handleDescriptionInput, value: _this.state.nodeId, type: "text" })),
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Role:"),
                            React.createElement(element_1.Select, { optionList: nodeRoleOptions, value: !!_this.state.nodeRoleOption ? _this.state.nodeRoleOption : nodeRoleOptions[0].rGuid, onChange: _this.handleNodeRoleChange }))),
                    React.createElement(ButtonBox, null,
                        React.createElement(element_1.Button, { onClick: _this.setNodeInfo, type: "primary" }, "Confirm"),
                        React.createElement(element_1.Button, { onClick: _this.handleCancelEditNode, type: "cancel" }, "Cancel")))));
        };
        _this.renderAddNewLinkModel = function () {
            if (_this.props.isAllowAddLinkLabel !== true) {
                return false;
            }
            return (React.createElement(ModelBox, { className: _this.state.isModelShow ? "" : "hide" },
                React.createElement(ModelContent, null,
                    React.createElement("div", { className: "InputBox" },
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Name:"),
                            React.createElement(element_1.Input, { onChange: _this.handleLinkDescriptionInput, value: _this.state.linkLabel, type: "text" }))),
                    React.createElement(ButtonBox, null,
                        React.createElement(element_1.Button, { onClick: _this.setLinkInfo, type: "primary" }, "Confirm"),
                        React.createElement(element_1.Button, { onClick: _this.hideModel, type: "cancel" }, "Cancel")))));
        };
        _this.warningMessage = function (content) {
            _this.setState(function (preState) { return ({
                alertMessageInfo: content,
                alertMessageStatus: "show",
            }); });
            clearTimeout(timer);
            timer = setTimeout(function () {
                _this.setState({
                    alertMessageStatus: "hide"
                });
            }, 2000);
        };
        _this.renderAlertMessage = function () {
            return (React.createElement(element_1.Message, { errorInfo: _this.state.alertMessageInfo, alertMessageStatus: _this.state.alertMessageStatus }));
        };
        _this.state = __assign(__assign({}, props.initialValue), { preNodes: Object.keys(props.initialValue.nodes), preLinks: Object.keys(props.initialValue.links), isModelShow: false, showModelName: "", nodeName: "", nodeId: "", nodeRoleOption: "", linkLabel: "", newNodeId: "", clickNodeId: "", newLinkId: "", clickLinkId: "", modelOption: "addNode", alertMessageInfo: "", alertMessageStatus: "init" });
        return _this;
    }
    FlowChartWithState.prototype.componentDidUpdate = function () {
        //get work flow data
        var flowData = this.state;
        delete flowData.offset.node;
        for (var _i = 0, _a = Object.keys(flowData.nodes); _i < _a.length; _i++) {
            var key = _a[_i];
            var node = flowData.nodes[key];
            if (node.position && node.position.node) {
                delete node.position.node;
            }
        }
        // console.log("flow data: ", JSON.stringify(flowData))
        if (!!this.props.getWorkFlowChartValue) {
            this.props.getWorkFlowChartValue(flowData);
        }
        // when user add new link, he shold add the label of this link
        var addedLinkNumber = 0;
        for (var linkKey in this.state.links) {
            if (!!this.state.links[linkKey].to && !!this.state.links[linkKey].to.nodeId) {
                addedLinkNumber += 1;
            }
        }
        if (addedLinkNumber > this.state.preLinks.length) {
            var _preLinks_1 = this.state.preLinks;
            var _currentLinks = Object.keys(this.state.links);
            var _newLink = _currentLinks.filter(function (link) { return !_preLinks_1.includes(link); });
            this.setState({
                isModelShow: true,
                showModelName: "newLinkModel",
                modelOption: "addLabel",
                newLinkId: _newLink[0]
            });
        }
        if (addedLinkNumber != this.state.preLinks.length) {
            this.setState(function (preState) { return ({
                preLinks: Object.keys(preState.links)
            }); });
        }
        if (Object.keys(this.state.nodes).length > this.state.preNodes.length) {
            // console.log("Add Node");
            var preNodes_1 = this.state.preNodes;
            var currentNodes = Object.keys(this.state.nodes);
            var newNode = currentNodes.filter(function (node) { return !preNodes_1.includes(node); });
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
            this.setState(function (preState) { return ({
                preNodes: Object.keys(preState.nodes)
            }); });
        }
    };
    FlowChartWithState.prototype.render = function () {
        var _a = this.props, Components = _a.Components, config = _a.config;
        // console.log("this state: ", this.state)
        return (React.createElement(React.Fragment, null,
            this.state.showModelName === "newNodeModel" ? this.renderAddNewNodeModel() : "",
            this.state.showModelName === "newLinkModel" ? this.renderAddNewLinkModel() : "",
            this.renderAlertMessage(),
            React.createElement(_1.FlowChart, { chart: this.state, callbacks: this.stateActions, Components: Components, config: config, isAllowAddLinkLabel: !!this.props.isAllowAddLinkLabel })));
    };
    return FlowChartWithState;
}(React.Component));
exports.FlowChartWithState = FlowChartWithState;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=FlowChartWithState.js.map