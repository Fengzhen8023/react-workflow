"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapValues(o, func) {
    var res = {};
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            res[key] = func(o[key]);
        }
    }
    console.log("----res---- ", res);
    return res;
}
exports.default = mapValues;
//# sourceMappingURL=mapValues.js.map