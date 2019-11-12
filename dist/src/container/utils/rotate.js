"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// center = rotation center
// current = current position
// x, y = rotated positions
// angle = angle of rotation
exports.rotate = function (center, current, angle) {
    var radians = (Math.PI / 180) * angle;
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    var x = (cos * (current.x - center.x)) + (sin * (current.y - center.y)) + center.x;
    var y = (cos * (current.y - center.y)) - (sin * (current.x - center.x)) + center.y;
    return { x: x, y: y };
};
//# sourceMappingURL=rotate.js.map