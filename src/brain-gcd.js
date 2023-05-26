import readlineSync from 'readline-sync';
import randomNumber from './random.js';

function nod(x, y) {
  if (y > x) {
    return nod(y, x);
  }
  if (!y) {
    return x;
  }
  return nod(y, x % y);
}

const gameNOD = () => {
  const roundsToWin = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const question = 'Question: ';
  for (let i = 0; i < roundsToWin; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    const rightAnswer = (nod(a, b));
    console.log(`${question}${a} ${b}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (String(rightAnswer) !== yourAnwser) {
      i = 3;
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

export default gameNOD;
