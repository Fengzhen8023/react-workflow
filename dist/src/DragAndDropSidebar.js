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
var FlowChartWithState_1 = require("./FlowChartWithState");
var layout_1 = require("./layout");
var exampleChartState_1 = require("./exampleChartState");
var _1 = require("./");
var utils_1 = require("./utils");
var Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  width: 100%;\n"], ["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  width: 100%;\n"])));
var Label = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 120px;\n"], ["\n  position: absolute;\n  width: 120px;\n"])));
var LabelContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 5px 10px;\n  background: cornflowerblue;\n  color: white;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  cursor: pointer;\n"], ["\n  padding: 5px 10px;\n  background: cornflowerblue;\n  color: white;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  cursor: pointer;\n"])));
var Message = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nmargin: 10px;\npadding: 10px;\nbackground: rgba(0,0,0,0.05);\n"], ["\nmargin: 10px;\npadding: 10px;\nbackground: rgba(0,0,0,0.05);\n"])));
var PortDefaultOuter = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background: cornflowerblue;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  &:hover {\n    background: cornflowerblue;\n  }\n\n  & svg {\n    width: 15px;\n    height: 15px;\n  }\n"], ["\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background: cornflowerblue;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  &:hover {\n    background: cornflowerblue;\n  }\n\n  & svg {\n    width: 15px;\n    height: 15px;\n  }\n"])));
var ProcessQueue = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(217, 207, 138);\n  color: white;\n  border-radius: 10px;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n"], ["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(217, 207, 138);\n  color: white;\n  border-radius: 10px;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n"])));
var ProcessPoint = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(155, 127, 105);\n  color: white;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n"], ["\n  width: 200px;\n  height: 120px;\n  position: absolute;\n  padding: 30px;\n  background: rgb(155, 127, 105);\n  color: white;\n  & div {\n    padding: 0px;\n    margin: 0px;\n  }\n"])));
var StartPoint = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(148, 80, 81);\n  color: white;\n  border-radius: 50%;\n"], ["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(148, 80, 81);\n  color: white;\n  border-radius: 50%;\n"])));
var EndPoint = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(110, 97, 107);\n  color: white;\n  border-radius: 50%;\n"], ["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgb(110, 97, 107);\n  color: white;\n  border-radius: 50%;\n"])));
var NodeCustom = React.forwardRef(function (_a, ref) {
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
});
var PortCustom = function (props) {
    return React.createElement(PortDefaultOuter, null);
};
var LinkCustom = function (props) {
    console.log("----props---- ", props);
    var startPos = props.startPos, endPos = props.endPos, link = props.link, onLabelDoubleClick = props.onLabelDoubleClick;
    var _a = utils_1.generateLabelPosition(startPos, endPos), centerX = _a.centerX, centerY = _a.centerY;
    return (React.createElement(React.Fragment, null,
        React.createElement(_1.LinkDefault, __assign({}, props)),
        React.createElement(Label, { style: { left: centerX, top: centerY }, onDoubleClick: function () { onLabelDoubleClick({ linkId: link.id }); } }, props.link.properties && props.link.properties.label && (React.createElement(LabelContent, null, props.link.properties && props.link.properties.label)))));
};
function validateLink(_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, fromPortId = _a.fromPortId, toNodeId = _a.toNodeId, toPortId = _a.toPortId, chart = _a.chart;
    return true;
}
var startPoint = {
    port1: {
        id: 'port1',
        type: 'left',
    },
    port2: {
        id: 'port2',
        type: 'right',
    },
    port3: {
        id: 'port3',
        type: 'top',
    },
    port4: {
        id: 'port4',
        type: 'bottom',
    },
};
var processQueuePoint = {
    port1: {
        id: 'port1',
        type: 'top',
    },
    port2: {
        id: 'port2',
        type: 'right',
    },
    port3: {
        id: 'port3',
        type: 'bottom',
    },
    port4: {
        id: 'port4',
        type: 'left',
    }
};
var processPoint = {
    port1: {
        id: 'port1',
        type: 'top',
    },
    port2: {
        id: 'port2',
        type: 'right',
    },
    port3: {
        id: 'port3',
        type: 'bottom',
    },
    port4: {
        id: 'port4',
        type: 'left',
    }
};
var endPoint = {
    port1: {
        id: 'port1',
        type: 'left',
    },
    port2: {
        id: 'port2',
        type: 'right',
    },
    port3: {
        id: 'port3',
        type: 'top',
    },
    port4: {
        id: 'port4',
        type: 'bottom',
    },
};
exports.DragAndDropSidebar = function () { return (React.createElement(layout_1.Page, null,
    React.createElement(layout_1.Content, null,
        React.createElement(FlowChartWithState_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple, Components: {
                Port: PortCustom,
                Node: NodeCustom,
                Link: LinkCustom
            }, config: { validateLink: validateLink } })),
    React.createElement(layout_1.Sidebar, null,
        React.createElement(Message, null, "Drag and drop these items onto the canvas."),
        React.createElement(layout_1.SidebarItem, { className: "start", type: "start", ports: startPoint }),
        React.createElement(layout_1.SidebarItem, { type: "process-queue", ports: processQueuePoint }),
        React.createElement(layout_1.SidebarItem, { type: "process-point", ports: processPoint }),
        React.createElement(layout_1.SidebarItem, { type: "end", ports: endPoint })))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=DragAndDropSidebar.js.map