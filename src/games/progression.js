import getRandomNumber from '../utils/random.js';
import runEngine from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 5);
  const length = 10;

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runEngine(description, generateRound);