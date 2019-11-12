"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var React = require("react");
var ReactDOM = require("react-dom");
var uuid_1 = require("uuid");
var CanvasContext_1 = require("../Canvas/CanvasContext");
var Port_default_1 = require("./Port.default");
/** Construct the composed path by traversing parentElements */
var composedPath = function (el) {
    var path = [];
    while (el) {
        path.push(el);
        el = el.parentElement;
    }
    return path;
};
var PortWrapper = /** @class */ (function (_super) {
    __extends(PortWrapper, _super);
    function PortWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeRef = React.createRef();
        _this.onMouseDown = function (startEvent) {
            var _a = _this.props, offset = _a.offset, node = _a.node, port = _a.port, onLinkStart = _a.onLinkStart, onLinkCancel = _a.onLinkCancel, onLinkComplete = _a.onLinkComplete, onLinkMove = _a.onLinkMove, config = _a.config;
            var linkId = uuid_1.v4();
            var fromNodeId = node.id;
            var fromPortId = port.id;
            // Create the move handler
            // This will update the position as the mouse moves
            var mouseMoveHandler = function (e) {
                var _a = _this.context, offsetX = _a.offsetX, offsetY = _a.offsetY;
                onLinkMove({
                    config: config,
                    linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId,
                    toPosition: {
                        x: e.clientX - offsetX - offset.x,
                        y: e.clientY - offsetY - offset.y,
                    },
                });
            };
            // Create and bind the mouse up handler
            // This is used to check if the link is complete or cancelled
            var mouseUpHandler = function (e) {
                // We traverse up the event path until we find an element with 'data-port-id' and data-node-id'
                // e.toElement cannot be used because it may be a child element of the port
                var path = composedPath(e.target);
                var portEl = path.find(function (el) {
                    var toPortId = el.getAttribute && el.getAttribute('data-port-id');
                    var toNodeId = el.getAttribute && el.getAttribute('data-node-id');
                    return !!(toPortId && toNodeId);
                });
                // If both node-id and port-id are defined as data attributes, we are mouse-upping
                // on another port. Run the success handler
                if (portEl) {
                    var toPortId = portEl.getAttribute('data-port-id');
                    var toNodeId = portEl.getAttribute('data-node-id');
                    onLinkComplete({ config: config, linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId, toNodeId: toNodeId, toPortId: toPortId });
                }
                else {
                    onLinkCancel({ config: config, linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
                }
                // Remove the listeners if the link is complete or canceled
                window.removeEventListener('mouseup', mouseUpHandler, false);
                window.removeEventListener('mousemove', mouseMoveHandler, false);
            };
            // Add listeners
            window.addEventListener('mouseup', mouseUpHandler, false);
            window.addEventListener('mousemove', mouseMoveHandler, false);
            // Notify state of link start
            onLinkStart({ config: config, linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
            // Prevent default and stop propagation to prevent text selection
            startEvent.preventDefault();
            startEvent.stopPropagation();
        };
        return _this;
    }
    PortWrapper.prototype.componentDidUpdate = function (prevProps) {
        // Update port position after a re-render if node.size has changed
        if (!lodash_1.isEqual(this.props.node.size, prevProps.node.size)) {
            var el = ReactDOM.findDOMNode(this.nodeRef.current);
            if (el) {
                // Ports component should be positions absolute
                // Factor this in so we get position relative to the node
                var nodesEl = el.parentElement
                    ? el.parentElement
                    : { offsetLeft: 0, offsetTop: 0 };
                // update port position after node size has been determined
                this.props.onPortPositionChange({ config: this.props.config, node: this.props.node, port: this.props.port, el: el, nodesEl: nodesEl });
            }
        }
    };
    PortWrapper.prototype.render = function () {
        var _a = this.props, selected = _a.selected, selectedLink = _a.selectedLink, hovered = _a.hovered, hoveredLink = _a.hoveredLink, style = _a.style, port = _a.port, node = _a.node, _b = _a.Component, Component = _b === void 0 ? Port_default_1.PortDefault : _b, config = _a.config;
        return (React.createElement("div", { className: "Allen", "data-port-id": port.id, "data-node-id": node.id, onMouseDown: this.onMouseDown, ref: this.nodeRef, style: style },
            React.createElement(Component, { config: config, port: port, isSelected: !!selected && selected.type === 'port' && selected.id === port.id, isHovered: !!hovered && hovered.type === 'port' && hovered.id === port.id, isLinkSelected: selectedLink
                    ? ((selectedLink.from.portId === port.id && selectedLink.from.nodeId === node.id) ||
                        (selectedLink.to.portId === port.id && selectedLink.to.nodeId === node.id))
                    : false, isLinkHovered: hoveredLink
                    ? ((hoveredLink.from.portId === port.id && hoveredLink.from.nodeId === node.id) ||
                        (hoveredLink.to.portId === port.id && hoveredLink.to.nodeId === node.id))
                    : false })));
    };
    PortWrapper.contextType = CanvasContext_1.default;
    return PortWrapper;
}(React.Component));
exports.PortWrapper = PortWrapper;
//# sourceMappingURL=Port.wrapper.js.map