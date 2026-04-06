import runEngine from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// Алгоритм Евклида для нахождения НОД
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const getRoundData = () => {
  const num1 = getRandomNumber(1, 100000)
  const num2 = getRandomNumber(1, 100000)

  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))

  return [question, correctAnswer]
}

export default () => runEngine(description, getRoundData)
