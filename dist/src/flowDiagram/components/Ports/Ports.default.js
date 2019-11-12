"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
exports.PortsDefault = function (_a) {
    var children = _a.children, config = _a.config;
    return (React.createElement("div", null,
        React.createElement(__1.PortsGroupDefault, { config: config, side: "top" }, children.filter(function (child) { return ['top'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { config: config, side: "bottom" }, children.filter(function (child) { return ['bottom'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { config: config, side: "right" }, children.filter(function (child) { return ['right'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { config: config, side: "left" }, children.filter(function (child) { return ['left'].includes(child.props.port.type); }))));
};
//# sourceMappingURL=Ports.default.js.map