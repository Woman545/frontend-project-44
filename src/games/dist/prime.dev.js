"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _random = _interopRequireDefault(require("../utils/random.js"));

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isPrime = function isPrime(num) {
  if (num < 2) return false;

  for (var i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

var generateRound = function generateRound() {
  var number = (0, _random["default"])(1, 100);
  var question = number.toString();
  var correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

var _default = function _default() {
  var description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return (0, _index["default"])(description, generateRound);
};

exports["default"] = _default;