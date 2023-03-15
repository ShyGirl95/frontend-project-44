
import readlineSync from 'readline-sync';

const gamePrime = () => {
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let question = "Question: ";
  for (let i = 0; i < 3; i += 1) {
    let rightAnswer = '';
    const fillipWasIncel = Math.floor(Math.random()*100);
    console.log(`${question}${fillipWasIncel}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    const isPrime = primeNumbers.includes(fillipWasIncel);
    if (isPrime === true) {
      rightAnswer = 'yes'
    } else if (isPrime === false) {
      rightAnswer = 'no'
    }
    if (rightAnswer !== yourAnwser) {
      console.log(`"${yourAnwser}" is wrong answer ;(. Correct answer was "${rightAnswer}".`)
      return console.log(`Let's try again, ${name}!`)
    } else if (rightAnswer === yourAnwser) {
      console.log('Correct!')
    }
  }
  console.log(`Congratulations, ${name}!`);
}

gamePrime();
