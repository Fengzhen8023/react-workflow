"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var __1 = require("../../");
var generateArrowPath_1 = require("./utils/generateArrowPath");
var utils_1 = require("../../utils");
var Label = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 120px;\n"], ["\n  position: absolute;\n  width: 120px;\n"])));
var LabelContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 5px 10px;\n  background: cornflowerblue;\n  color: white;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  cursor: pointer;\n"], ["\n  padding: 5px 10px;\n  background: cornflowerblue;\n  color: white;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  cursor: pointer;\n"])));
exports.LinkDefault = function (_a) {
    var config = _a.config, link = _a.link, startPos = _a.startPos, endPos = _a.endPos, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLabelDoubleClick = _a.onLabelDoubleClick, onLinkClick = _a.onLinkClick, isHovered = _a.isHovered, isSelected = _a.isSelected, isAllowAddLinkLabel = _a.isAllowAddLinkLabel;
    var points = __1.generateLinkPath(startPos, endPos);
    var arrow = generateArrowPath_1.default(startPos, endPos);
    var _b = utils_1.generateLabelPosition(startPos, endPos), centerX = _b.centerX, centerY = _b.centerY;
    // console.log("arrow: ", arrow)
    if (isAllowAddLinkLabel) {
        return (React.createElement(React.Fragment, null,
            React.createElement("svg", { style: { overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 } },
                React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: "cornflowerblue" }),
                React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "3", fill: "none" }),
                React.createElement("path", { d: arrow, stroke: "cornflowerblue", strokeWidth: "3", fill: "cornflowerblue" }),
                React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: (isHovered || isSelected) ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ config: config, linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ config: config, linkId: link.id }); }, onDoubleClick: function () { return onLabelDoubleClick({ linkId: link.id }); }, onClick: function (e) {
                        onLinkClick({ config: config, linkId: link.id });
                        e.stopPropagation();
                    } }),
                React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: "cornflowerblue" })),
            React.createElement(Label, { style: { left: centerX, top: centerY }, onDoubleClick: function () { onLabelDoubleClick({ linkId: link.id }); } }, link.properties && link.properties.label && (React.createElement(LabelContent, null, link.properties && link.properties.label)))));
    }
    else {
        return (React.createElement("svg", { style: { overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 } },
            React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: "cornflowerblue" }),
            React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "3", fill: "none" }),
            React.createElement("path", { d: arrow, stroke: "cornflowerblue", strokeWidth: "3", fill: "cornflowerblue" }),
            React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: (isHovered || isSelected) ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ config: config, linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ config: config, linkId: link.id }); }, onDoubleClick: function () { return onLabelDoubleClick({ linkId: link.id }); }, onClick: function (e) {
                    onLinkClick({ config: config, linkId: link.id });
                    e.stopPropagation();
                } }),
            React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: "cornflowerblue" })));
    }
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Link.default.js.map