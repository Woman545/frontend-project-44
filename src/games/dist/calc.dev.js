'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _random = _interopRequireDefault(require('../utils/random.js'))
var _index = _interopRequireDefault(require('../index.js'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var description = 'What is the result of the expression?'
var operators = ['+', '-', '*']

var calculate = function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2

    case '-':
      return num1 - num2

    case '*':
      return num1 * num2

    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

var generateRound = function generateRound() {
  var num1 = (0, _random.default)(1, 30)
  var num2 = (0, _random.default)(1, 30)
  var operator = operators[(0, _random.default)(0, operators.length - 1)]
  var question = `${num1} ${operator} ${num2}`
  var correctAnswer = String(calculate(num1, num2, operator))
  return [question, correctAnswer]
}

var _default = function _default() {
  return (0, _index.default)(description, generateRound)
}

exports.default = _default  