import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let question = "Question: ";
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    let rightAnswer = '';
    let randomNumber = Math.floor(Math.random()*100)
    let evenBoolean = randomNumber % 2 === 0;
    console.log(question + randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    if (evenBoolean === true) {
      rightAnswer = 'yes'
    } else if (evenBoolean === false) {
      rightAnswer = 'no'
    }
    if (rightAnswer !== userAnswer) {
      i = 3;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`)
      return console.log(`Let's try again, ${name}!`)
    } else if (rightAnswer === userAnswer) {
      console.log('Correct!')
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export default gameEven