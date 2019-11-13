"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapValues(o, func) {
    var res = {};
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            res[key] = func(o[key]);
        }
    }
    return res;
}
exports.default = mapValues;
//# sourceMappingURL=mapValues.js.map