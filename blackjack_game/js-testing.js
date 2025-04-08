let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// Create a variable called isAlive and assign it to true
// Flip its value to false in the appropriate code block
let isAlive = true;

// Declare a variable called message and assign its value to an empty string
let message = "";
// Reassing the message variable to the string we're logging out

if (sum <= 20) {
  message = "Do you want to draw a new card? 🙋‍♀️";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🎉";
  hasBlackJack = true;
} else if (sum > 21) {
  message = "You're out of the game!🥲";
  isAlive = false;
}
console.log(message);

console.log(hasBlackJack);

let age = 20;
if (age < 21) {
  console.log("You can note enter the club!");
} else {
  console.log("Welcome!");
}

let age1 = 90;
if (age1 < 100) {
  console.log("Not elegible");
} else if (age1 === 100) {
  console.log("Here is your birthday card from the King!");
} else {
  console.log("Not eligible, you have already gotten one.");
}

console.log(4 === 3);
console.log(5 > 2);
console.log(12 > 12);

console.log(3 < 0);
console.log(3 >= 3);
console.log(11 <= 12);
console.log(11 <= 11);
console.log(3 <= 2);

let myInformation = [
  "Student",
  "Front-end developer",
  "Work hard",
  "Honestly",
  "web developer",
  "Programming language",
];

console.log(myInformation.length);
console.log(myInformation);

console.log(myInformation[1]);
console.log(myInformation[4]);

let newInfo = "don't have job";
myInformation.push(newInfo);
console.log(myInformation);

myInformation.pop(myInformation);
console.log(myInformation);

for (let i = 0; i < myInformation.length; i++) {
  console.log(myInformation[i]);
}

let myself = ["sotheany", 16, true];
myself.push("testing api");
console.log(myself);

myself.reverse();
console.log(myself);

let cards = [7, 4];
cards.push(6);
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}

for (let count = 1; count < 10; count++) {
  console.log(count);
}

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

let sentence = ["Hello ", "my ", "name ", "is ", "Sotheany"];
let greetingEl = document.getElementById("greeting-el");

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace);
