Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _readlineSync = _interopRequireDefault(require('readline-sync'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greetUser = function greetUser() {
  console.log('Welcome to the Brain Games!');

  const userName = _readlineSync.default.question('May I have your name? ');

  console.log('Hello, '.concat(userName, '!'));
  return userName;
};

const _default = greetUser;
exports.default = _default;
