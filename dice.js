const crypto = require("crypto");

console.log("Dice Generator Started");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

for (let i = 1; i <= 5; i++) {
    console.log(`Roll ${i}: Dice Rolled: ${rollDice()}`);
}