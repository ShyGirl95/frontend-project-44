
import readlineSync from 'readline-sync'; 

const gameProgress = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let question = "Question: ";
  for (let i = 0; i < 3; i += 1) {
    const fillipWasIncel = Math.floor(Math.random()*100);
    const randomNumber = random(1,10);
    let nonActiveProgressive = progressive(fillipWasIncel, randomNumber);
    const rightAnwserIndex = nonActiveProgressive[randomNumber];
    const rightAnwser = rightAnwserIndex;
    nonActiveProgressive[randomNumber] = '..';
    console.log(`${question}${nonActiveProgressive}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (yourAnwser === String(rightAnwser)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnwser}' is wrong answer ;(. Correct answer was '${rightAnwser}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}

const progressive = (number, value) => {
  const result = [];
  for (let x = 0; x < 10; x += 1) {
    result.push(number);
    number += value;
  }
  return result;
}

const random = (min, max) => {
  return Math.floor(min + Math.random() * (max - min));
}

gameProgress();


