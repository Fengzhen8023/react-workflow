"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_draggable_1 = require("react-draggable");
var react_resize_observer_1 = require("react-resize-observer");
var __1 = require("../../");
var utils_1 = require("../../utils");
var Node_default_1 = require("./Node.default");
exports.NodeWrapper = function (_a) {
    var config = _a.config, node = _a.node, onDragNode = _a.onDragNode, onNodeClick = _a.onNodeClick, onNodeDoubleClick = _a.onNodeDoubleClick, isSelected = _a.isSelected, _b = _a.Component, Component = _b === void 0 ? Node_default_1.NodeDefault : _b, onNodeSizeChange = _a.onNodeSizeChange, NodeInner = _a.NodeInner, Ports = _a.Ports, Port = _a.Port, offset = _a.offset, selected = _a.selected, selectedLink = _a.selectedLink, hovered = _a.hovered, hoveredLink = _a.hoveredLink, onPortPositionChange = _a.onPortPositionChange, onLinkStart = _a.onLinkStart, onLinkMove = _a.onLinkMove, onLinkComplete = _a.onLinkComplete, onLinkCancel = _a.onLinkCancel;
    var _c = React.useState({ width: 0, height: 0 }), size = _c[0], setSize = _c[1];
    var compRef = React.useRef(null);
    // TODO: probably should add an observer to track node component size changes
    React.useLayoutEffect(function () {
        var el = ReactDOM.findDOMNode(compRef.current);
        if (el) {
            if (size.width !== el.offsetWidth || size.height !== el.offsetHeight) {
                var newSize = { width: el.offsetWidth, height: el.offsetHeight };
                setSize(newSize);
                onNodeSizeChange({ config: config, nodeId: node.id, size: newSize });
            }
        }
    }, [node, compRef.current, size.width, size.height]);
    var children = (React.createElement(React.Fragment, null,
        React.createElement(react_resize_observer_1.default, { onResize: function (rect) {
                var newSize = { width: rect.width, height: rect.height };
                setSize(newSize);
            } }),
        React.createElement(NodeInner, { node: node, config: config }),
        React.createElement(Ports, { config: config }, Object.keys(node.ports).map(function (portId) { return (React.createElement(__1.PortWrapper, { config: config, key: portId, offset: offset, selected: selected, selectedLink: selectedLink, hoveredLink: hoveredLink, hovered: hovered, node: node, port: node.ports[portId], Component: Port, onPortPositionChange: onPortPositionChange, onLinkStart: config.readonly ? utils_1.noop : onLinkStart, onLinkMove: config.readonly ? utils_1.noop : onLinkMove, onLinkComplete: onLinkComplete, onLinkCancel: onLinkCancel })); }))));
    return (React.createElement(react_draggable_1.default, { bounds: "parent", axis: "both", position: node.position, grid: [1, 1], onStart: function (e) {
            // Stop propagation so the canvas does not move
            e.stopPropagation();
        }, onDrag: function (event, data) { return onDragNode({ config: config, event: event, data: data, id: node.id }); }, disabled: config.readonly },
        React.createElement(Component, { config: config, ref: compRef, children: children, onDoubleClick: function (e) {
                onNodeDoubleClick({ config: config, nodeId: node.id });
                e.stopPropagation();
            }, onClick: function (e) {
                if (!config.readonly) {
                    onNodeClick({ config: config, nodeId: node.id });
                    e.stopPropagation();
                }
            }, isSelected: isSelected, node: node })));
};
//# sourceMappingURL=Node.wrapper.js.map