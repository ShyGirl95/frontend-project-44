import readlineSync from 'readline-sync'; 

const gameNOD = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let question = "Question: ";
  for (let i = 0; i < 3; i += 1) {
    let a = Math.floor(Math.random()*100);
    let b = Math.floor(Math.random()*100);
    let rightAnswer = (NOD(a, b));
    console.log(`${question}${a} ${b}`)
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

function NOD (x, y) {
	if (y > x) {
    return NOD(y, x);
  }
	if (!y) {
    return x;
  }
	return NOD(y, x % y);
}
export default gameNOD;