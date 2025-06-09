"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports["default"] = void 0

var _readlineSync = _interopRequireDefault(require("readline-sync"))

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj } }

var greetUser = function greetUser() {
  console.log("Welcome to the Brain Games!")

  var userName = _readlineSync["default"].question("May I have your name? ")

  console.log("Hello, ".concat(userName, "!"))
  return userName
}

var _default = greetUser
exports["default"] = _default