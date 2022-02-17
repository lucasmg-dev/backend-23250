"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, [{
    key: "generate",
    value: function generate() {
      var red = random();
      var green = random();
      var blue = random();
      console.log("".concat(red, ", ").concat(green, ", ").concat(blue));
    }
  }, {
    key: "_random",
    value: function _random() {
      var max = 256;
      var min = 0;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }]);

  return Color;
}();

var color = new Color();
color.generate();
