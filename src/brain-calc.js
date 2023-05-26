import readlineSync from 'readline-sync';
import randomNumber from './random.js';

const operation = (x, y, number) => {
  if (number === 0) {
    return x + y;
  }
  if (number === 1) {
    return x - y;
  }
  return x * y;
};

const gameCalc = () => {
  const roundsToWin = 3;
  const symbols = ['+', '-', '*'];
  const numbers = [0, 1, 2];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const question = 'Question: ';
  for (let i = 0; i < roundsToWin; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    const randomSymbol = numbers[Math.floor(Math.random() * numbers.length)];
    const rightAnswer = (operation(a, b, randomSymbol));
    console.log(`${question}${a} ${symbols[randomSymbol]} ${b}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (String(rightAnswer) !== yourAnwser) {
      console.log(`'${yourAnwser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    } if (String(rightAnswer) === yourAnwser) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
  // return is required for eslint
  return 0;
};

export default gameCalc;
