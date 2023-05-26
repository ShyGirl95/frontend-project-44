import readlineSync from 'readline-sync';
import randomNumber from './random.js';

const gameEven = () => {
  const roundsToWin = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const question = 'Question: ';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < roundsToWin; i += 1) {
    let rightAnswer = '';
    const randomNum = randomNumber();
    const evenBoolean = randomNum % 2 === 0;
    console.log(question + randomNum);
    const userAnswer = readlineSync.question('Your answer: ');
    if (evenBoolean) {
      rightAnswer = 'yes';
    } else if (!evenBoolean) {
      rightAnswer = 'no';
    }
    if (rightAnswer !== userAnswer) {
      i = 3;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return console.log(`Let's try again, ${name}!`);
    } if (rightAnswer === userAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
  // return is required for eslint
  return 0;
};
export default gameEven;
