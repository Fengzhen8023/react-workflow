"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var CustomInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 30px;\n  padding-left: 0.5rem;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n  font-size: 14px;\n\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n    border: 1px solid #10a9ff;\n  }\n"], ["\n  width: 100%;\n  height: 30px;\n  padding-left: 0.5rem;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n  font-size: 14px;\n\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n    border: 1px solid #10a9ff;\n  }\n"])));
exports.Input = function (_a) {
    var value = _a.value, type = _a.type, onChange = _a.onChange;
    return (React.createElement(CustomInput, { value: value, type: type, onChange: onChange }));
};
var templateObject_1;
//# sourceMappingURL=Input.js.map