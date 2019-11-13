"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var rotate_1 = require("./utils/rotate");
/**
 * This file contains actions for updating state after each of the required callbacks
 */
exports.onDragNode = function (_a) {
    var config = _a.config, event = _a.event, data = _a.data, id = _a.id;
    return function (chart) {
        var nodechart = chart.nodes[id];
        if (nodechart) {
            chart.nodes[id] = __assign(__assign({}, nodechart), { position: config && config.snapToGrid ? { x: Math.round(data.x / 20) * 20, y: Math.round(data.y / 20) * 20 } : data });
        }
        return chart;
    };
};
exports.onDragCanvas = function (_a) {
    var config = _a.config, event = _a.event, data = _a.data;
    return function (chart) {
        chart.offset = config && config.snapToGrid ? { x: Math.round(data.x / 20) * 20, y: Math.round(data.y / 20) * 20 } : data;
        return chart;
    };
};
exports.onLinkStart = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, fromPortId = _a.fromPortId;
    return function (chart) {
        chart.links[linkId] = {
            id: linkId,
            from: {
                nodeId: fromNodeId,
                portId: fromPortId,
            },
            to: {},
        };
        return chart;
    };
};
exports.onLinkMove = function (_a) {
    var linkId = _a.linkId, toPosition = _a.toPosition;
    return function (chart) {
        var link = chart.links[linkId];
        link.to.position = toPosition;
        chart.links[linkId] = __assign({}, link);
        return chart;
    };
};
exports.onLinkComplete = function (props) {
    var linkId = props.linkId, fromNodeId = props.fromNodeId, fromPortId = props.fromPortId, toNodeId = props.toNodeId, toPortId = props.toPortId, _a = props.config, config = _a === void 0 ? {} : _a;
    return function (chart) {
        if (!config.readonly && (config.validateLink ? config.validateLink(__assign(__assign({}, props), { chart: chart })) : true) && [fromNodeId, fromPortId].join() !== [toNodeId, toPortId].join()) {
            chart.links[linkId].to = {
                nodeId: toNodeId,
                portId: toPortId,
            };
        }
        else {
            delete chart.links[linkId];
        }
        return chart;
    };
};
exports.onLinkCancel = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        delete chart.links[linkId];
        return chart;
    };
};
exports.onLinkMouseEnter = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        // Set the link to hover
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            if (chart.hovered.type !== 'link' || chart.hovered.id !== linkId) {
                chart.hovered = {
                    type: 'link',
                    id: linkId,
                };
            }
        }
        return chart;
    };
};
exports.onLinkMouseLeave = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {};
        }
        return chart;
    };
};
exports.onLinkClick = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        if (chart.selected.id !== linkId || chart.selected.type !== 'link') {
            chart.selected = {
                type: 'link',
                id: linkId,
            };
        }
        return chart;
    };
};
exports.onCanvasClick = function () { return function (chart) {
    if (chart.selected.id) {
        chart.selected = {};
    }
    return chart;
}; };
exports.onDeleteKey = function () { return function (chart) {
    if (chart.selected.type === 'node' && chart.selected.id) {
        var node_1 = chart.nodes[chart.selected.id];
        // Delete the connected links
        Object.keys(chart.links).forEach(function (linkId) {
            var link = chart.links[linkId];
            if (link.from.nodeId === node_1.id || link.to.nodeId === node_1.id) {
                delete chart.links[link.id];
            }
        });
        // Delete the node
        delete chart.nodes[chart.selected.id];
    }
    else if (chart.selected.type === 'link' && chart.selected.id) {
        delete chart.links[chart.selected.id];
    }
    if (chart.selected) {
        chart.selected = {};
    }
    return chart;
}; };
exports.onNodeClick = function (_a) {
    var nodeId = _a.nodeId;
    return function (chart) {
        if (chart.selected.id !== nodeId || chart.selected.type !== 'node') {
            chart.selected = {
                type: 'node',
                id: nodeId,
            };
        }
        return chart;
    };
};
exports.onNodeDoubleClick = function (_a) {
    var nodeId = _a.nodeId;
    return function (chart) {
        // console.log("----actions.ts on node double click----")
        // if (chart.selected.id !== nodeId || chart.selected.type !== 'node') {
        //   chart.selected = {
        //     type: 'node',
        //     id: nodeId,
        //   }
        // }
        return chart;
    };
};
exports.onNodeSizeChange = function (_a) {
    var nodeId = _a.nodeId, size = _a.size;
    return function (chart) {
        chart.nodes[nodeId] = __assign(__assign({}, chart.nodes[nodeId]), { size: size });
        return chart;
    };
};
exports.onPortPositionChange = function (_a) {
    var nodeToUpdate = _a.node, port = _a.port, el = _a.el, nodesEl = _a.nodesEl;
    return function (chart) {
        if (nodeToUpdate.size) {
            // rotate the port's position based on the node's orientation prop (angle)
            var center = { x: nodeToUpdate.size.width / 2, y: nodeToUpdate.size.height / 2 };
            var current = { x: el.offsetLeft + nodesEl.offsetLeft + el.offsetWidth / 2, y: el.offsetTop + nodesEl.offsetTop + el.offsetHeight / 2 };
            var angle = nodeToUpdate.orientation || 0;
            var position = rotate_1.rotate(center, current, angle);
            var node = chart.nodes[nodeToUpdate.id];
            node.ports[port.id].position = {
                x: position.x,
                y: position.y,
            };
            chart.nodes[nodeToUpdate.id] = __assign({}, node);
        }
        return chart;
    };
};
exports.onCanvasDrop = function (_a) {
    var config = _a.config, data = _a.data, position = _a.position;
    return function (chart) {
        var id = uuid_1.v4();
        chart.nodes[id] = {
            id: id,
            position: config && config.snapToGrid ? { x: Math.round(position.x / 20) * 20, y: Math.round(position.y / 20) * 20 } : position,
            orientation: data.orientation || 0,
            type: data.type,
            ports: data.ports,
            properties: data.properties,
        };
        return chart;
    };
};
//# sourceMappingURL=actions.js.map