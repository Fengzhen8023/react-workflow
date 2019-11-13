"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateArrowPath = function (startPos, endPos) {
    // console.log("----startPos: ", startPos)
    // console.log("----endPos: ", endPos)
    if (!endPos.portType) {
        return "";
    }
    if (endPos.portType === "top") {
        return "M " + endPos.x + " " + endPos.y + " L " + (endPos.x - 10) + " " + (endPos.y - 20) + " L " + (endPos.x + 10) + " " + (endPos.y - 20) + " Z";
    }
    if (endPos.portType === "right") {
        return "M " + endPos.x + " " + endPos.y + " L " + (endPos.x + 20) + " " + (endPos.y - 10) + " L " + (endPos.x + 20) + " " + (endPos.y + 10) + " Z";
    }
    if (endPos.portType === "bottom") {
        return "M " + endPos.x + " " + endPos.y + " L " + (endPos.x - 10) + " " + (endPos.y + 20) + " L " + (endPos.x + 10) + " " + (endPos.y + 20) + " Z";
    }
    if (endPos.portType === "left") {
        return "M " + endPos.x + " " + endPos.y + " L " + (endPos.x - 20) + " " + (endPos.y - 10) + " L " + (endPos.x - 20) + " " + (endPos.y + 10) + " Z";
    }
    return "";
};
exports.default = generateArrowPath;
//# sourceMappingURL=generateArrowPath.js.map