"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _random = _interopRequireDefault(require("../utils/random.js"));

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'Find the greatest common divisor of given numbers.';

var getGcd = function getGcd(a, b) {
  var x = a;
  var y = b;

  while (y !== 0) {
    var _ref = [y, x % y];
    x = _ref[0];
    y = _ref[1];
  }

  return x;
};

var generateRound = function generateRound() {
  var num1 = (0, _random["default"])(1, 100);
  var num2 = (0, _random["default"])(1, 100);
  var question = "Question: ".concat(num1, " ").concat(num2);
  var correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

var _default = function _default() {
  return (0, _index["default"])(description, generateRound);
};

exports["default"] = _default;