"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var Link_default_1 = require("./Link.default");
var utils_2 = require("./utils");
exports.LinkWrapper = React.memo(function (_a) {
    var config = _a.config, _b = _a.Component, Component = _b === void 0 ? Link_default_1.LinkDefault : _b, link = _a.link, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, onLabelDoubleClick = _a.onLabelDoubleClick, isSelected = _a.isSelected, isHovered = _a.isHovered, fromNode = _a.fromNode, toNode = _a.toNode;
    var startPos = utils_2.getLinkPosition(fromNode, link.from.portId);
    var endPos = toNode && link.to.portId
        ? utils_2.getLinkPosition(toNode, link.to.portId)
        : link.to.position;
    // Don't render the link yet if there is no end pos
    // This will occur if the link was just created
    if (!endPos) {
        return null;
    }
    return (React.createElement(Component, { config: config, link: link, startPos: startPos, endPos: endPos, onLinkMouseEnter: config.readonly ? utils_1.noop : onLinkMouseEnter, onLinkMouseLeave: config.readonly ? utils_1.noop : onLinkMouseLeave, onLabelDoubleClick: onLabelDoubleClick, onLinkClick: config.readonly ? utils_1.noop : onLinkClick, isSelected: isSelected, isHovered: isHovered }));
});
//# sourceMappingURL=Link.wrapper.js.map