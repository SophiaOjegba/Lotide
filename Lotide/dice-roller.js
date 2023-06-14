//Number of dice to roll
const numberOfDice = process.argv[2];

// function to create random numbers
const diceRoller = (number) => {
  return Math.floor(Math.random() * 6) + 1;
}

//Result from rolling dice
const result = [];

// Roll dice for a number of time
for (let i = 0; i < numberOfDice; i++){
  result.push(diceRoller());
}

//print the outcome
console.log(`Rolled ${numberOfDice} dice: ${result.join(', ')}`);