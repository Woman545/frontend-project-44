'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const _default = getRandomNumber;
exports.default = _default;