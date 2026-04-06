
import runEngine from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRoundData = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10); // Длина от 5 до 10 чисел
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..'; // Скрываем число
  const question = progression.join(' '); // Превращаем массив в строку через пробел

  return [question, correctAnswer];
};

export default () => runEngine(description, getRoundData);

