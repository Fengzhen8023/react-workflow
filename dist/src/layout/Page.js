"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"], ["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"])));
var PageContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"])));
exports.Page = function (_a) {
    var children = _a.children;
    return (React.createElement(PageContent, null,
        children,
        React.createElement(GlobalStyle, null)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Page.js.map