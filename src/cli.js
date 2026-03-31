import readlineSync from "readline-sync";

export const greetUser = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".');
  let rechenie = true;
  while (rechenie === true) {
    console.log("Question: 15");
    const namber1 = readlineSync.question("Your answer: ");
    if (namber1 === "no") {
      console.log(`Correct!`);
    } else {
      console.log(`'${namber1}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      rechenie = false;
      break;
    }

    console.log("Question: 6");
    const namber2 = readlineSync.question("Your answer: ");
    if (namber2 === "yes") {
      console.log(`Correct!`);
    } else {
      console.log(`'${namber2}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      rechenie = false;
      break;
    }

    console.log("Question: 7");
    const namber3 = readlineSync.question("Your answer: ");
    if (namber3 === "no") {
      console.log(`Correct!`);
    } else {
      console.log(`'${namber3}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      rechenie = false;
      break;
    }
    console.log(`Congratulations, ${name}`)
    break
  }
};
