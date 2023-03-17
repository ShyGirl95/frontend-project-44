import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(min + Math.random() * (max - min));

const progressive = () => {
  let randomStartNumber = random(1, 99);
  const randomDiff = random(1, 10);
  const result = [];
  for (let x = 0; x < 10; x += 1) {
    result.push(randomStartNumber);
    randomStartNumber += randomDiff;
  }
  const rightAnwser = result[randomDiff];
  const rightAnwserIndex = result.indexOf(rightAnwser);
  result[rightAnwserIndex] = '..';
  return [rightAnwser, result.join(' ')];
};

const gameProgress = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  const question = 'Question: ';
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, result] = progressive();
    console.log(`${question}${result}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (yourAnwser === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnwser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default gameProgress;
