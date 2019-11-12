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
var _1 = require("./");
var actions_1 = require("./container/actions");
var styled_components_1 = require("styled-components");
var mapValues_1 = require("./container/utils/mapValues");
var ModelBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background: rgba(0,0,0,0.8);\n  z-index: 99;\n\n  &.hide {\n    display: none;\n  }\n"], ["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background: rgba(0,0,0,0.8);\n  z-index: 99;\n\n  &.hide {\n    display: none;\n  }\n"])));
var ModelContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 50%;\n  background: #fff;\n  margin: 10% auto;\n  border-radius: 10px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  width: 50%;\n  background: #fff;\n  margin: 10% auto;\n  border-radius: 10px;\n  overflow: hidden;\n"])));
var Button = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100px;\n  height: 30px;\n  text-align: center;\n  line-height: 27px;\n  border: 2px solid rgb(148,80,81);\n  float: right;\n  margin-right: 40px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  background: #fff;\n  cursor: pointer;\n"], ["\n  width: 100px;\n  height: 30px;\n  text-align: center;\n  line-height: 27px;\n  border: 2px solid rgb(148,80,81);\n  float: right;\n  margin-right: 40px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  background: #fff;\n  cursor: pointer;\n"])));
var HideModel = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background: rgb(148,80,81);\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  color: white;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background: rgb(148,80,81);\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  color: white;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n"])));
var InputBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n  \n  & label {\n    width: 20%;\n  }\n\n  & input {\n    width: 50%;\n    height: 30px\n  }\n"], ["\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n  \n  & label {\n    width: 20%;\n  }\n\n  & input {\n    width: 50%;\n    height: 30px\n  }\n"])));
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
                isModelShow: true,
                modelOption: "editNode",
                showModelName: "newNodeModel",
                clickNodeId: nodeId,
                nodeName: clickNodeProperties.name,
                nodeDescription: clickNodeProperties.description
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
        }, function (func) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.setState(func.apply(void 0, args));
            };
        });
        _this.hideModel = function () {
            _this.setState({
                isModelShow: false,
                nodeName: "",
                nodeDescription: ""
            });
        };
        _this.handleNameInput = function (e) {
            _this.setState({
                nodeName: e.currentTarget.value
            });
        };
        _this.handleDescriptionInput = function (e) {
            _this.setState({
                nodeDescription: e.currentTarget.value
            });
        };
        _this.handleLinkDescriptionInput = function (e) {
            _this.setState({
                linkLabel: e.currentTarget.value
            });
        };
        _this.setNodeInfo = function () {
            var _nodes = _this.state.nodes;
            var _nodeId = _this.state.modelOption === "addNode" ? _this.state.newNodeId : _this.state.clickNodeId;
            _nodes[_nodeId].properties = {
                name: _this.state.nodeName,
                description: _this.state.nodeDescription
            };
            _this.setState({
                nodes: _nodes,
                isModelShow: false
            });
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
        _this.renderAddNewNodeModel = function () {
            return (React.createElement(ModelBox, { className: _this.state.isModelShow ? "" : "hide" },
                React.createElement(ModelContent, null,
                    React.createElement(HideModel, { onClick: _this.hideModel }, "X"),
                    React.createElement("div", { className: "InputBox" },
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Name:"),
                            React.createElement("input", { onChange: _this.handleNameInput, value: _this.state.nodeName, type: "text" })),
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Description:"),
                            React.createElement("input", { onChange: _this.handleDescriptionInput, value: _this.state.nodeDescription, type: "text" }))),
                    React.createElement(Button, { onClick: _this.setNodeInfo }, "Confirm"))));
        };
        _this.renderAddNewLinkModel = function () {
            return (React.createElement(ModelBox, { className: _this.state.isModelShow ? "" : "hide" },
                React.createElement(ModelContent, null,
                    React.createElement(HideModel, { onClick: _this.hideModel }, "X"),
                    React.createElement("div", { className: "InputBox" },
                        React.createElement(InputBox, null,
                            React.createElement("label", null, "Description:"),
                            React.createElement("input", { onChange: _this.handleLinkDescriptionInput, value: _this.state.linkLabel, type: "text" }))),
                    React.createElement(Button, { onClick: _this.setLinkInfo }, "Confirm"))));
        };
        _this.state = __assign(__assign({}, props.initialValue), { preNodes: Object.keys(props.initialValue.nodes), preLinks: Object.keys(props.initialValue.links), isModelShow: false, showModelName: "", nodeName: "", nodeDescription: "", linkLabel: "", newNodeId: "", clickNodeId: "", newLinkId: "", clickLinkId: "", modelOption: "addNode" });
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
        console.log("flow data: ", JSON.stringify(flowData));
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
            console.log("Add Node");
            var preNodes_1 = this.state.preNodes;
            var currentNodes = Object.keys(this.state.nodes);
            var newNode = currentNodes.filter(function (node) { return !preNodes_1.includes(node); });
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
            this.setState(function (preState) { return ({
                preNodes: Object.keys(preState.nodes)
            }); });
        }
    };
    FlowChartWithState.prototype.render = function () {
        var _a = this.props, Components = _a.Components, config = _a.config;
        console.log("this state: ", this.state);
        return (React.createElement(React.Fragment, null,
            this.state.showModelName === "newNodeModel" ? this.renderAddNewNodeModel() : this.renderAddNewLinkModel(),
            React.createElement(_1.FlowChart, { chart: this.state, callbacks: this.stateActions, Components: Components, config: config })));
    };
    return FlowChartWithState;
}(React.Component));
exports.FlowChartWithState = FlowChartWithState;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=FlowChartWithState.js.map