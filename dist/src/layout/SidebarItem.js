"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var __1 = require("../");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n  margin: 10px auto;\n  color: white;\n\n  ", "\n\n"], ["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n  margin: 10px auto;\n  color: white;\n\n  ",
    "\n\n"])), function (props) {
    var className = props.className, itemStyle = props.itemStyle;
    switch (className) {
        case "start":
            if (!!itemStyle) {
                return "\n            &.start " + itemStyle + "  \n          ";
            }
            return "\n          &.start {\n            width: 100px;\n            height: 100px;\n            border-radius: 50px;\n            background: rgb(148, 80, 81);\n            line-height: 100px;\n            padding: 0;\n            text-align: center;\n          }\n        ";
        case "process-queue":
            if (!!itemStyle) {
                return "&.process-queue " + itemStyle + "  ";
            }
            return "\n          &.process-queue {\n            width: 120px;\n            height: 60px;\n            line-height: 60px;\n            text-align: center;\n            border-radius: 10px;\n            background: rgb(217,207,138);\n            padding: 0;\n          }\n        ";
        case "process-point":
            if (!!itemStyle) {
                return "&.process-point " + itemStyle;
            }
            return "\n          &.process-point {\n            width: 120px;\n            height: 60px;\n            line-height: 60px;\n            text-align: center;\n            background: rgb(155, 127, 105);\n            padding: 0;\n          }\n        ";
        case "end":
            if (!!itemStyle) {
                return "&.end " + itemStyle;
            }
            return "\n          &.end {\n            width: 100px;\n            height: 100px;\n            border-radius: 50px;\n            background: rgb(110, 97, 107);\n            line-height: 100px;\n            padding: 0;\n            text-align: center;\n          }\n        ";
        default:
            return "";
    }
});
var defaultPorts = {
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
exports.SidebarItem = function (_a) {
    var type = _a.type, _b = _a.ports, ports = _b === void 0 ? defaultPorts : _b, properties = _a.properties, _c = _a.itemStyle, itemStyle = _c === void 0 ? "" : _c;
    return (React.createElement(Outer, { className: type, draggable: true, itemStyle: itemStyle, onDragStart: function (event) {
            event.dataTransfer.setData(__1.REACT_FLOW_CHART, JSON.stringify({ type: type, ports: ports, properties: properties }));
        } }, type));
};
var templateObject_1;
//# sourceMappingURL=SidebarItem.js.map