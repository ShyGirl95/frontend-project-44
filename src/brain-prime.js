import readlineSync from 'readline-sync';
import randomNumber from './random.js';

const gamePrime = () => {
  const roundsToWin = 3;
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
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
    const isPrime = primeNumbers.includes(potentialPrimeNumber);
    if (isPrime === true) {
      rightAnswer = 'yes';
    } else if (isPrime === false) {
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
