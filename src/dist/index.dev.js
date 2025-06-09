'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _readlineSync = _interopRequireDefault(require('readline-sync'))

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest() }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance') }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return'] != null) _i['return'](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr }

var roundsCount = 3

var _default = function _default(description, generateRound) {
  console.log('Welcome to the Brain Games!')

  var name = _readlineSync['default'].question('May I have your name? ')

  console.log('Hello, '.concat(name, '!'))
  console.log(description)

  for (var i = 0; i < roundsCount; i += 1) {
    var _generateRound = generateRound(),
        _generateRound2 = _slicedToArray(_generateRound, 2),
        question = _generateRound2[0],
        correctAnswer = _generateRound2[1]

    console.log('Question: '.concat(question))

    var userAnswer = _readlineSync['default'].question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(''.concat(userAnswer, "' is wrong answer ;(. Correct answer was '").concat(correctAnswer, "'."))
      console.log("Let's try again, ".concat(name, "!"))
      return
    }

    console.log('Correct!')
  }

  console.log("Congratulations, ".concat(name, "!"))
}

exports['default'] = _default