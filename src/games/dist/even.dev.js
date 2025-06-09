"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync.js"));

var _cli = _interopRequireDefault(require("../cli.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isEven = function isEven(number) {
  return number % 2 === 0;
};

var _default = function _default() {
  console.log("Welcome to the Brain Games!");
  var userName = (0, _cli["default"])();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  var correctAnswers = 0;

  while (correctAnswers < 3) {
    var number = Math.floor(Math.random() * 100);
    console.log("Question: ".concat(number));

    var answer = _readlineSync["default"].question("Your answer: ");

    var correctAnswer = isEven(number) ? "yes" : "no";

    if (answer !== 'yes' && answer !== "no") {
      console.log("'".concat(answer, "' is wrong answer ;(. Correct answer was '").concat(correctAnswer, "'."));
      console.log("Let's try again, ".concat(userName, "!"));
      return;
    }

    if (answer === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log("'".concat(answer, "' is wrong answer ;(. Correct answer was '").concat(correctAnswer, "'."));
      console.log("Let's try again, ".concat(userName, "!"));
      return;
    }
  }

  console.log("Congratulations, ".concat(userName, "!"));
};

exports["default"] = _default;