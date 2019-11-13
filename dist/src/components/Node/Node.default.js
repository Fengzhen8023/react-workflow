"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var StartPoint = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(148, 80, 81);\n  color: white;\n  border-radius: 50%;\n  ", "\n"], ["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(148, 80, 81);\n  color: white;\n  border-radius: 50%;\n  ",
    "\n"])), function (props) { return props.isSelected && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "], ["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "]))); });
var EndPoint = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(110, 97, 107);\n  color: white;\n  border-radius: 50%;\n  ", "\n"], ["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(110, 97, 107);\n  color: white;\n  border-radius: 50%;\n  ",
    "\n"])), function (props) { return props.isSelected && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "], ["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "]))); });
var ProcessQueue = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(217, 207, 138);\n  color: white;\n  border-radius: 10px;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n  ", "\n"], ["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(217, 207, 138);\n  color: white;\n  border-radius: 10px;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n  ",
    "\n"])), function (props) { return props.isSelected && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "], ["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "]))); });
var ProcessPoint = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(155, 127, 105);\n  color: white;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n  ", "\n"], ["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(155, 127, 105);\n  color: white;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n  ",
    "\n"])), function (props) { return props.isSelected && styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "], ["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "]))); });
exports.NodeDefault = React.forwardRef(function (_a, ref) {
    var node = _a.node, children = _a.children, otherProps = __rest(_a, ["node", "children"]);
    switch (node.type) {
        case "start":
            return (React.createElement(StartPoint, __assign({ ref: ref }, otherProps), children));
        case "end":
            return (React.createElement(EndPoint, __assign({ ref: ref }, otherProps), children));
        case "process-queue":
            return (React.createElement(ProcessQueue, __assign({ ref: ref }, otherProps), children));
        case "process-point":
            return (React.createElement(ProcessPoint, __assign({ ref: ref }, otherProps), children));
    }
    return (React.createElement(StartPoint, __assign({ ref: ref }, otherProps), children));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Node.default.js.map