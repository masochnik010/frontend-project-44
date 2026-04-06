import runEngine from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const getRoundData = () => {
  const randomnumer = Math.floor((Math.random() * 100) + 1)
  const provgames1 = isEven(randomnumer) ? 'yes' : 'no'
  return [String(randomnumer), provgames1]
}

export default () => runEngine(description, getRoundData);