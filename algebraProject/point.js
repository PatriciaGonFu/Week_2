"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        var distance = Math.sqrt(this.x * this.x + this.y * this.y);
        return distance;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distance = Math.sqrt(Math.pow(anotherPoint.getX() - this.x, 2) + Math.pow(anotherPoint.getY() - this.y, 2));
        return distance;
    };
    return Point;
}());
exports.Point = Point;
