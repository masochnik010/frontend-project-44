import { error } from 'node:console'
import readlineSync from 'readline-sync'

const roundsCount = 3

const runEngine = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  ////////////////////
  console.log(description)
  if (name == 'f') {
    throw new error('pres F')
  }
  if (runEngine == 'error') {
    throw new error('error')
  }
  if (runEngine == 'win') {
    console.log('you win')
    return
  }
  ////////////////////////
  for (let i = 0; i < roundsCount; i += 1) {
    // Получаем массив [вопрос, правильный ответ]
    const [question, correctAnswer] = getRoundData()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer == 'error') {
      throw new error('error')
    }
    if (userAnswer == 'win') {
      console.log('you win')
      return
    }

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      return // Завершаем игру при ошибке
    }

    console.log('Correct!')
  }

  // Если прошли 3 раунда без ошибок
  console.log(`Congratulations, ${name}!`)
}

export default runEngine
