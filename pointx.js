"use strict";
exports.__esModule = true;
var PointX = /** @class */ (function () {
    function PointX(x, y) {
        this.x = x;
        this.y = y;
    }
    PointX.prototype.draw = function () {
        console.log('X : ' + this.x + ', Y:' + this.y);
    };
    return PointX;
}());
exports.PointX = PointX;
