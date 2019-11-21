"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 30px;\n"], ["\n  padding: 30px;\n"])));
exports.NodeInnerDefault = function (_a) {
    var node = _a.node;
    return (React.createElement(Outer, null,
        React.createElement("p", null,
            " ",
            (!!node.properties && !!node.properties.name) && "" + node.properties.name,
            " "),
        React.createElement("p", null,
            " ",
            (!!node.properties && !!node.properties.Id) && "" + node.properties.Id,
            " ")));
};
var templateObject_1;
//# sourceMappingURL=NodeInner.default.js.map