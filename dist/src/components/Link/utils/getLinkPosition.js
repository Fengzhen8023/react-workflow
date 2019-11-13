"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkPosition = function (node, portId) {
    var port = node.ports[portId];
    var nodeWidth = (!!node && !!node.size) ? node.size.width : 0;
    var nodeHeight = (!!node && !!node.size) ? node.size.height : 0;
    return {
        x: node.position.x + (port.position ? port.position.x : 0),
        y: node.position.y + (port.position ? port.position.y : 0),
        portType: port.type,
        nodeWidth: nodeWidth,
        nodeHeight: nodeHeight
    };
};
//# sourceMappingURL=getLinkPosition.js.map