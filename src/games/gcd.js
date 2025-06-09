import getRandomNumber from '../utils/random.js'
import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => {
  let x = a
  let y = b

  while (y !== 0) {
    [x, y] = [y, x % y]
  }
  return x
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `Question: ${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))
  return [question, correctAnswer]
}

export default () => runGame(description, generateRound)
