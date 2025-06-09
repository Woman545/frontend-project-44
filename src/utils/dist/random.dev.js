"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports["default"] = void 0

var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

var _default = getRandomNumber
exports["default"] = _default