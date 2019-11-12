"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var __1 = require("../");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n  margin: 10px auto;\n  color: white;\n\n  &.start {\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    background: rgb(148, 80, 81);\n    line-height: 100px;\n    padding: 0;\n    text-align: center;\n  }\n\n  &.end {\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    background: rgb(110, 97, 107);\n    line-height: 100px;\n    padding: 0;\n    text-align: center;\n  }\n\n  &.process-queue {\n    width: 120px;\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    border-radius: 10px;\n    background: rgb(217,207,138);\n    padding: 0;\n  }\n\n  &.process-point {\n    width: 120px;\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    background: rgb(155, 127, 105);\n    padding: 0;\n  }\n\n"], ["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n  margin: 10px auto;\n  color: white;\n\n  &.start {\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    background: rgb(148, 80, 81);\n    line-height: 100px;\n    padding: 0;\n    text-align: center;\n  }\n\n  &.end {\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    background: rgb(110, 97, 107);\n    line-height: 100px;\n    padding: 0;\n    text-align: center;\n  }\n\n  &.process-queue {\n    width: 120px;\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    border-radius: 10px;\n    background: rgb(217,207,138);\n    padding: 0;\n  }\n\n  &.process-point {\n    width: 120px;\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    background: rgb(155, 127, 105);\n    padding: 0;\n  }\n\n"])));
exports.SidebarItem = function (_a) {
    var type = _a.type, ports = _a.ports, properties = _a.properties;
    return (React.createElement(Outer, { className: type, draggable: true, onDragStart: function (event) {
            event.dataTransfer.setData(__1.REACT_FLOW_CHART, JSON.stringify({ type: type, ports: ports, properties: properties }));
        } }, type));
};
var templateObject_1;
//# sourceMappingURL=SidebarItem.js.map