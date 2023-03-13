import readlineSync from 'readline-sync'; 

const gameCalc = () => {
  const arr = ["+","-","*"];
  const numbers = [1,2,3];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const question = "Question: ";
  for (let i = 0; i < 3; i += 1) {
    let a = Math.floor(Math.random()*100);
    let b = Math.floor(Math.random()*100);
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let rightAnswer = (operation(a, b, randomNumber));
    console.log(`${question}${a} ${arr[randomNumber]} ${b}`);
    const yourAnwser = readlineSync.question('Your anwser: ');
    if (String(rightAnswer) !== yourAnwser) {
      i = 3;
      console.log(`'${yourAnwser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    } else if (String(rightAnswer) === yourAnwser) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const operation = (x, y, number) => {
  let result = 0;
  if (number === 0) {
    result = x + y;
  } else if (number === 1) {
    result = x - y;
  } else if (number === 2) {
    result = x * y;
  }
  return result;
};


gameCalc()