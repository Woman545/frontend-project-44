"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _random = _interopRequireDefault(require("../utils/random.js"));

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'What number is missing in the progression?';

var generateRound = function generateRound() {
  var start = (0, _random["default"])(1, 10);
  var step = (0, _random["default"])(2, 5);
  var length = 10;
  var progression = [];

  for (var i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  var hiddenIndex = (0, _random["default"])(0, length - 1);
  var correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  var question = progression.join(' ');
  return [question, correctAnswer];
};

var _default = function _default() {
  return (0, _index["default"])(description, generateRound);
};

exports["default"] = _default;