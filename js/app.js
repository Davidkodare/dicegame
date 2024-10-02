
let wins = 0;
let losses = 0;
let draws = 0;

document.getElementById('rollButton').addEventListener('click', rollDice);
console.log("Let's start!!!");

function rollDice() {
  const playerRoll = Math.floor(Math.random() * 6) + 1;
  const aiRoll = Math.floor(Math.random() * 6) + 1;

  document.getElementById('playerResult').textContent = `Result: ${playerRoll}`;
  document.getElementById('aiResult').textContent = `Result: ${aiRoll}`;

  let resultText;
  if (playerRoll > aiRoll) {
    resultText = 'Du vinner!!';
    wins++;
  } else if (aiRoll > playerRoll) {
    resultText = 'AI vinner!!';
    losses++;
  } else {
    resultText = 'Det blev oavgjort!';
    draws++;
  }

  document.getElementById('gameResult').textContent = resultText;
  document.getElementById('stats').textContent = `Vinster: ${wins} | Förluster: ${losses} | Oavgjort: ${draws}`;
}

