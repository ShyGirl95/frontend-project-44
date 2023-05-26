import readlineSync from 'readline-sync';
import randomNumber from './random.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const gamePrime = () => {
  const roundsToWin = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const question = 'Question: ';
  for (let i = 0; i < roundsToWin; i += 1) {
    let rightAnswer = '';
    const potentialPrimeNumber = randomNumber();
    console.log(`${question}${potentialPrimeNumber}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (isPrime(potentialPrimeNumber)) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    if (rightAnswer !== yourAnwser) {
      console.log(`"${yourAnwser}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return console.log(`Let's try again, ${name}!`);
    } if (rightAnswer === yourAnwser) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
  // return is required for eslint
  return 0;
};
export default gamePrime;
