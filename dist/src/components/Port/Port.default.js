"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var PortDefaultOuter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover > div {\n    background: cornflowerblue;\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover > div {\n    background: cornflowerblue;\n  }\n"])));
var PortDefaultInner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background:  ", ";\n  cursor: pointer;\n"], ["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background:  ", ";\n  cursor: pointer;\n"])), function (props) { return props.active ? 'cornflowerblue' : 'grey'; });
exports.PortDefault = function (_a) {
    var isLinkSelected = _a.isLinkSelected, isLinkHovered = _a.isLinkHovered;
    return (React.createElement(PortDefaultOuter, null,
        React.createElement(PortDefaultInner, { active: isLinkSelected || isLinkHovered })));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Port.default.js.map