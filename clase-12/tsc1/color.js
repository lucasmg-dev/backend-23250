"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colorr = /** @class */ (function () {
    function Colorr() {
    }
    Colorr.prototype.generate = function (max, min) {
        var red = this._random(max, min);
        var green = this._random(max, min);
        var blue = this._random(max, min);
        console.log(red + ", " + green + ", " + blue);
    };
    Colorr.prototype._random = function (max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Colorr;
}());
exports.default = Colorr;
var color = new Colorr();
color.generate(255, 0);
