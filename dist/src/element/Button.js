"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var CustomButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 32px;\n    line-height: 1.5;\n\n    &.primary {\n        background-color: #1890ff;\n        border: 1px solid transparent;\n        color: #fff;\n    }\n\n    &.cancel {\n        background-color: #fff;\n        border: 1px solid #1890ff;\n        color: #1890ff;\n    }\n\n    display: inline-block;\n    padding: 0 15px;\n    margin-left: 1rem;\n    outline: none;\n    border-radius: 4px;\n    font-weight: 400;\n    font-size: 14px;\n    touch-action: manipulation;\n    cursor: pointer;\n    position: relative;\n    white-space: nowrap;\n    text-align: center;\n    box-sizing: border-box;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045)\n"], ["\n    height: 32px;\n    line-height: 1.5;\n\n    &.primary {\n        background-color: #1890ff;\n        border: 1px solid transparent;\n        color: #fff;\n    }\n\n    &.cancel {\n        background-color: #fff;\n        border: 1px solid #1890ff;\n        color: #1890ff;\n    }\n\n    display: inline-block;\n    padding: 0 15px;\n    margin-left: 1rem;\n    outline: none;\n    border-radius: 4px;\n    font-weight: 400;\n    font-size: 14px;\n    touch-action: manipulation;\n    cursor: pointer;\n    position: relative;\n    white-space: nowrap;\n    text-align: center;\n    box-sizing: border-box;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045)\n"])));
exports.Button = function (_a) {
    var _b = _a.children, children = _b === void 0 ? "button" : _b, _c = _a.type, type = _c === void 0 ? "primary" : _c, onClick = _a.onClick;
    return (React.createElement(CustomButton, { onClick: onClick, className: type }, children));
};
var templateObject_1;
//# sourceMappingURL=Button.js.map