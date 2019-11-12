"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.PortsGroupDefault = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n\n  ",
    "\n"])), function (props) {
    if (props.side === 'top') {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 100%;\n        left: 0;\n        top: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px !important;\n        }\n      "], ["\n        width: 100%;\n        left: 0;\n        top: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px !important;\n        }\n      "])));
    }
    else if (props.side === 'bottom') {
        return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: 100%;\n        left: 0;\n        bottom: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px !important;\n        }\n      "], ["\n        width: 100%;\n        left: 0;\n        bottom: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px !important;\n        }\n      "])));
    }
    else if (props.side === 'left') {
        return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        height: 100%;\n        top: 0;\n        left: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0 !important;\n        }\n      "], ["\n        height: 100%;\n        top: 0;\n        left: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0 !important;\n        }\n      "])));
    }
    else {
        return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        height: 100%;\n        top: 0;\n        right: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0 !important;\n        }\n      "], ["\n        height: 100%;\n        top: 0;\n        right: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0 !important;\n        }\n      "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=PortsGroup.default.js.map