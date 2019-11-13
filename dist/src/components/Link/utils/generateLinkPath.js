"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLinkPath = function (startPos, endPos) {
    console.log("start point: ", startPos);
    console.log("end point: ", endPos);
    if (!endPos.portType) {
        return curvePath(startPos, endPos);
    }
    else {
        return foldPath(startPos, endPos);
    }
};
function curvePath(startPos, endPos) {
    var width = Math.abs(startPos.x - endPos.x);
    var height = Math.abs(startPos.y - endPos.y);
    var leftToRight = startPos.x < endPos.x;
    var topToBottom = startPos.y < endPos.y;
    var isHorizontal = width > height;
    var start;
    var end;
    if (isHorizontal) {
        start = leftToRight ? startPos : endPos;
        end = leftToRight ? endPos : startPos;
    }
    else {
        start = topToBottom ? startPos : endPos;
        end = topToBottom ? endPos : startPos;
    }
    var curve = isHorizontal ? width / 3 : height / 3;
    var curveX = isHorizontal ? curve : 0;
    var curveY = isHorizontal ? 0 : curve;
    return "M" + start.x + "," + start.y + " C " + (start.x + curveX) + "," + (start.y + curveY) + " " + (end.x - curveX) + "," + (end.y - curveY) + " " + end.x + "," + end.y;
}
function foldPath(startPos, endPos) {
    var linkPath = "";
    var startNodeWidth = !!startPos.nodeWidth ? startPos.nodeWidth : 0;
    var startNodeHeight = !!startPos.nodeHeight ? startPos.nodeHeight : 0;
    if (startPos.portType === "top" && endPos.portType === "top") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y - 30) + "\n    ";
        if (startPos.x > endPos.x && startPos.y > endPos.y) {
            linkPath += "L " + startPos.x + " " + (endPos.y - 30);
        }
        if (startPos.x > endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + endPos.x + " " + (startPos.y - 30);
        }
        if (startPos.x < endPos.x && startPos.y > endPos.y) {
            linkPath += "L " + startPos.x + " " + (endPos.y - 30);
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + endPos.x + " " + (startPos.y - 30);
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y - 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "top" && endPos.portType === "right") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y - 30) + "\n    ";
        if (startPos.x >= endPos.x + 30 && startPos.y >= endPos.y + 30) {
            linkPath += "L " + startPos.x + " " + endPos.y;
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y + 30) {
            linkPath += "L " + (endPos.x + 30) + " " + (startPos.y - 30);
        }
        if (startPos.x < endPos.x + 30 && startPos.y >= endPos.y) {
            linkPath += "L " + (endPos.x + 30) + " " + (startPos.y - 30);
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + (endPos.x + 30) + " " + (startPos.y - 30);
        }
        linkPath += "\n      L " + (endPos.x + 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "top" && endPos.portType === "bottom") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y - 30) + "\n    ";
        if (startPos.x >= endPos.x && startPos.y >= endPos.y + 60) {
            linkPath += "L " + startPos.x + " " + (endPos.y + 30);
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y + 60) {
            linkPath += "\n        L " + (startPos.x - startNodeWidth) + " " + (startPos.y - 30) + "\n        L " + (startPos.x - startNodeWidth) + " " + (endPos.y + 30) + "\n      ";
        }
        if (startPos.x < endPos.x && startPos.y >= endPos.y + 60) {
            linkPath += "L " + endPos.x + " " + (startPos.y - 30);
        }
        if (startPos.x < endPos.x && startPos.y <= endPos.y + 60) {
            linkPath += "\n        L " + (startPos.x + startNodeWidth) + " " + (startPos.y - 30) + "\n        L " + (startPos.x + startNodeWidth) + " " + (endPos.y + 30) + "\n      ";
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y + 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "top" && endPos.portType === "left") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y - 30) + "\n    ";
        if (startPos.x >= endPos.x - 30 && startPos.y >= endPos.y) {
            linkPath += "L " + (endPos.x - 30) + " " + (startPos.y - 30);
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + (endPos.x - 30) + " " + (startPos.y - 30);
        }
        if (startPos.x < endPos.x - 30 && startPos.y >= endPos.y + 30) {
            linkPath += "L " + startPos.x + " " + endPos.y;
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y + 30) {
            linkPath += "L " + (endPos.x - 30) + " " + (startPos.y - 30);
        }
        linkPath += "\n      L " + (endPos.x - 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "right" && endPos.portType === "top") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x + 30) + " " + startPos.y + "\n    ";
        if (startPos.x >= endPos.x && startPos.y > endPos.y) {
            linkPath += "L " + (startPos.x + 30) + " " + (endPos.y - 30);
        }
        if (startPos.x >= endPos.x - 30 && startPos.y <= endPos.y) {
            linkPath += "L " + (startPos.x + 30) + " " + (endPos.y - 30);
        }
        if (startPos.x < endPos.x && startPos.y >= endPos.y - 30) {
            linkPath += "L " + (startPos.x + 30) + " " + (endPos.y - 30);
        }
        if (startPos.x < endPos.x - 30 && startPos.y < endPos.y - 30) {
            linkPath += "L " + endPos.x + " " + startPos.y;
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y - 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "right" && endPos.portType === "right") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x > endPos.x ? startPos.x + 30 : endPos.x + 30) + " " + startPos.y + "\n      L " + (startPos.x > endPos.x ? startPos.x + 30 : endPos.x + 30) + " " + endPos.y + "\n      L " + (startPos.x > endPos.x ? startPos.x + 30 : endPos.x + 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n      ";
        return linkPath;
    }
    if (startPos.portType === "right" && endPos.portType === "bottom") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x + 30) + " " + startPos.y + "\n      L " + (startPos.x + 30) + " " + (endPos.y + 30) + "\n      L " + endPos.x + " " + (endPos.y + 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "right" && endPos.portType === "left") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x + 30) + " " + startPos.y + "\n    ";
        if (startPos.x >= endPos.x - 60 && startPos.y > endPos.y) {
            linkPath += "\n        L " + (startPos.x + 30) + " " + (startPos.y - startNodeHeight) + "        \n        L " + (endPos.x - 30) + " " + (startPos.y - startNodeHeight) + "        \n      ";
        }
        if (startPos.x >= endPos.x - 60 && startPos.y < endPos.y) {
            linkPath += "\n        L " + (startPos.x + 30) + " " + (startPos.y + startNodeHeight) + "        \n        L " + (endPos.x - 30) + " " + (startPos.y + startNodeHeight) + "        \n      ";
        }
        if (startPos.x < endPos.x - 60 && startPos.y >= endPos.y - 30) {
            linkPath += "L " + (startPos.x + 30) + " " + endPos.y;
        }
        if (startPos.x < endPos.x - 60 && startPos.y < endPos.y - 30) {
            linkPath += "L " + (startPos.x + 30) + " " + endPos.y;
        }
        linkPath += "\n      L " + (endPos.x - 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "bottom" && endPos.portType === "top") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y + 30) + "\n    ";
        if (startPos.x >= endPos.x - 60 && startPos.y >= endPos.y - 60) {
            linkPath += "\n        L " + (startPos.x - startNodeWidth) + " " + (startPos.y + 30) + "\n        L " + (startPos.x - startNodeWidth) + " " + (endPos.y - 30) + "\n      ";
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y - 60) {
            linkPath += "L " + startPos.x + " " + (endPos.y - 30);
        }
        if (startPos.x < endPos.x - 60 && startPos.y >= endPos.y - 60) {
            linkPath += "\n        L " + (startPos.x + startNodeWidth) + " " + (startPos.y + 30) + "\n        L " + (startPos.x + startNodeWidth) + " " + (endPos.y - 30) + "\n      ";
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y - 60) {
            linkPath += "L " + startPos.x + " " + (endPos.y - 30);
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y - 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "bottom" && endPos.portType === "right") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y + 30) + "\n      L " + (endPos.x + 30) + " " + (startPos.y + 30) + "\n      L " + (endPos.x + 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "bottom" && endPos.portType === "bottom") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y + 30) + "\n    ";
        if (startPos.x >= endPos.x - 60 && startPos.y >= endPos.y) {
            linkPath += "L " + endPos.x + " " + (startPos.y + 30);
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + startPos.x + " " + (endPos.y + 30);
        }
        if (startPos.x < endPos.x - 60 && startPos.y >= endPos.y) {
            linkPath += "L " + endPos.x + " " + (startPos.y + 30);
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + startPos.x + " " + (endPos.y + 30);
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y + 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "bottom" && endPos.portType === "left") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + startPos.x + " " + (startPos.y + 30) + "\n      L " + (endPos.x - 30) + " " + (startPos.y + 30) + "\n      L " + (endPos.x - 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "left" && endPos.portType === "top") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x - 30) + " " + startPos.y + "\n    ";
        if (startPos.x >= endPos.x - 60 && startPos.y >= endPos.y - 30) {
            linkPath += "L " + (startPos.x - 30) + " " + (endPos.y - 30);
        }
        if (startPos.x >= endPos.x + 30 && startPos.y < endPos.y - 30) {
            linkPath += "L " + endPos.x + " " + startPos.y;
        }
        if (startPos.x < endPos.x - 60 && startPos.y >= endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + (endPos.y - 30);
        }
        if (startPos.x < endPos.x + 30 && startPos.y < endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + (endPos.y - 30);
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y - 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "left" && endPos.portType === "right") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x - 30) + " " + startPos.y + "\n    ";
        if (startPos.x >= endPos.x + 60 && startPos.y >= endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + endPos.y;
        }
        if (startPos.x >= endPos.x + 60 && startPos.y < endPos.y) {
            linkPath += "L " + (endPos.x + 30) + " " + startPos.y;
        }
        if (startPos.x < endPos.x + 60 && startPos.y >= endPos.y) {
            linkPath += "\n        L " + (startPos.x - 30) + " " + (startPos.y - startNodeHeight) + "\n        L " + (endPos.x + 30) + " " + (startPos.y - startNodeHeight) + "\n      ";
        }
        if (startPos.x < endPos.x + 60 && startPos.y < endPos.y) {
            linkPath += "\n        L " + (startPos.x - 30) + " " + (startPos.y - startNodeHeight) + "\n        L " + (endPos.x + 30) + " " + (startPos.y - startNodeHeight) + "\n      ";
        }
        linkPath += "\n      L " + (endPos.x + 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "left" && endPos.portType === "bottom") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x - 30) + " " + startPos.y + "\n    ";
        if (startPos.x >= endPos.x + 30 && startPos.y >= endPos.y + 30) {
            linkPath += "L " + endPos.x + " " + startPos.y;
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y + 30) {
            linkPath += "L " + (startPos.x - 30) + " " + (endPos.y + 30);
        }
        if (startPos.x < endPos.x + 30 && startPos.y >= endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + (endPos.y + 30);
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + (endPos.y + 30);
        }
        linkPath += "\n      L " + endPos.x + " " + (endPos.y + 30) + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    if (startPos.portType === "left" && endPos.portType === "left") {
        linkPath += "\n      M " + startPos.x + " " + startPos.y + "\n      L " + (startPos.x - 30) + " " + startPos.y + "\n    ";
        if (startPos.x >= endPos.x && startPos.y >= endPos.y + 30) {
            linkPath += "L " + (endPos.x - 30) + " " + startPos.y;
        }
        if (startPos.x >= endPos.x && startPos.y < endPos.y + 30) {
            linkPath += "L " + (endPos.x - 30) + " " + startPos.y;
        }
        if (startPos.x < endPos.x && startPos.y >= endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + endPos.y;
        }
        if (startPos.x < endPos.x && startPos.y < endPos.y) {
            linkPath += "L " + (startPos.x - 30) + " " + endPos.y;
        }
        linkPath += "\n      L " + (endPos.x - 30) + " " + endPos.y + "\n      L " + endPos.x + " " + endPos.y + "\n    ";
        return linkPath;
    }
    return linkPath;
}
//# sourceMappingURL=generateLinkPath.js.map