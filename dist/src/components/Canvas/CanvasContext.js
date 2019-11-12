"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// NB: always import CanvasContext directly from this file to prevent circular module imports
// see https://github.com/facebook/react/issues/13969#issuecomment-433253469
var CanvasContext = React.createContext({ offsetX: 0, offsetY: 0 });
exports.default = CanvasContext;
//# sourceMappingURL=CanvasContext.js.map