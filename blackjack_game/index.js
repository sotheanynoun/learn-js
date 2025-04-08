/* 
    1. Create two variables, firstCard and secondCard
    2. Set their values to a random number between 2-11
    3. Create a variable, sum, and set it to the sum of the two cards.
    4. Create a variable called isAlive and assign it to true
    5. Flip its value to false in the appropriate code block
    6. Declare a variable called message and assign its value to an empty string
    7. Reassing the message variable to the string we're logging out
    8. Create a startGame() function. Move the conditional below to inside the body of function.

    9. Store the message-el paragraph in a variable called messageEl

    10. Store the sum paragraph in a variable called sumEl
    11. Render the sum on the page using this format -> "Sum: 14"
    12. Store the cards paragraph in a variable called cardsEl
    13. Render the cards on the page using the format -> "Cards: 10 4"

    14. Create a function newCard() that logs out "Drawing a new card from the deck!"
*/

let cards = []; //array - ordered list of item
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(message);
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");
let player = {
  name: "Per",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// create a function, getRandomCard(), that always return the number 5
// make this function return a random number between 1 and 13
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  //generate two random numbers
  //re-assigns the card and sum variabels so that the game can start

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  //render out firstCard and secondCard
  //   cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  cardsEl.textContent = "Cards: ";
  //Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  //render out All cards we have
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙋‍♀️";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🎉";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!🥲";
    isAlive = false;
  }
  //Display the message in the messageEl using message
  messageEl.textContent = message;
}

function newCard() {
  // console.log("Drawing a new card from the deck!");
  // Create a card variable, and hard code its value to a number (2-11)
  // Add the new card to the sum variable
  // call startGame()

  //only allow the player to get a new card if she IS alive and does not have blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    //push the to array
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

/* 
   * IF-ELSE STATEMENT
- Check if the person is old enough to enter the nightclub (21)
- Log a suitable message to the console in both cases
- If less than 21 -> "You can not enter the club!"
        else      -> "Welcome!"
*/
let age = 22;
if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome!");
}

/* 
    * IF/ELSE---IF/ELSE STATEMENT
- Check if the person is elegible for a birthday card from the King! (100)
- if less than 100     -> "Not elegible"
- else if exactly 100  -> "Here is your birthday card from the King!"
- else                 -> "Not elegible, you have already gotten one"
*/

let age1 = 100;
if (age1 < 100) {
  console.log("Not elegible");
} else if (age1 === 100) {
  console.log("Here is your birthday card from the King!");
} else {
  console.log("Not eligible, you have already gotten one.");
}

/*
 * ARRAY - ordered list of items - composite / complex data type
 */
let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code my project",
  "I've just relaunched my portfolio",
];

console.log(featuredPosts.length);
//create an array that lists your i.e. experience, education, license, skills or similar
// the items of the array should be strings
let myInformation = [
  "Student",
  "Front-end developer",
  "Work hard",
  "Honestly",
  "web developer",
  "Programming language",
];
console.log(myInformation[1]);
console.log(myInformation[3]);

let newInfo = "don't have job";
myInformation.push(newInfo);
console.log(myInformation);

//remove last element in array
myInformation.pop(myInformation);
//create an array that describes yourself. Use the three primitive data types you've learned
// it should contain you name (string), your age (integer), and whether you like pizza (boolean)

let myself = ["sotheany", 16, true];
myself.push("testing api");
console.log(myself);

let sentence = ["Hello", "my", "name", "is", "Sotheany"];
let greetingEl = document.getElementById("greeting-el");
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

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

// write a function that returns the total race time
// call/invoke the function and store the returned value in a new variable
// finally, log the variable out

function getTotalRaceTime() {
  return player1Time + player2Time;
}
let totalRaceTime = getTotalRaceTime();
console.log(totalRaceTime);

/* 
  ? What does Math.random() do?
  -> It generates a random number between 0 and 1 (not inclusive of 1)
*/
// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

/* 
  ? In which range will our randomNumber be now?
  From:0
  To:5.99999
*/

/* 
  ? What does Math.floor() do to positive numbers?
  -> it removes the decimals
*/

let flooredNumber = Math.floor(3.45632);
console.log(flooredNumber);

// let randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);
/* 
  ? Write down all the posible value randomNumber can hold now:
  ->0, 1, 2, 3, 4, 5
*/

// try to modify the expression so that we get a range from 1 to 6

let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

// create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  return random;
}
console.log(rollDice());

// create two boolean variable, likesDocumentaries and likestartups
// use an OR statement (||) to call recommendMovie() if either of those variales are true

let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === false) {
  recommendMovie();
}

/* 
  * Introduction Object
  ! Objects - store data in-depth - composite /complex data type
  !! key-value pairs
*/
let course = {
  title: "Learn Css Grid for free",
  lessons: 16,
  creator: "Per Harald BOrgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};
console.log(course.length);
console.log(course.tags);

/* 
  TODO::
  - Create an object that represents an airbnb castle listing
  - It should contain at least one boolean, one string, one number, and one array
  - Logout at least two of the keys using the dot notation.
*/
let castle = {
  title: "Live like a king in my castle",
  price: 190,
  isSuperHost: true,
  images: ["img/castle1.png", "img/castle2.png"],
};
console.log(castle.price);
console.log(castle.images);

/* 
  * CHALLENGE: 
  - Create a person object that contains three keys: name, age, and country
  - Use yourself as an example to set the values for name, age and country
  - Create a function, logData(), that uses the personobject to create a string in the following format:
  "Per is 35 years old and lives in Norway"
  - Call the logData() function to verify that it works
*/
let person = {
  name: "Sotheany",
  age: 22,
  country: "Cambodia",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}
logData();

/* 
  * CHALLENGE 2:
+ less than 6 years old    -> free
+ 6 to 17 years old        -> child discount
+ 18 to 26 years old       -> student discount
+ 27 to 66 years old       -> full price
+ over 66 years old        -> senior citizen discount

- create a conditional statement (if/else/else if) that logs out the discount the passenger will get vased upon the value of the age variable
*/
let age2 = 22;
if (age2 < 6) {
  console.log("free");
} else if (age2 < 18) {
  console.log("child discount");
} else if (age2 < 27) {
  console.log("student discount");
} else if (age2 < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

/* 
  * CHALLENGE 3:
- Use a for loop to log the following to the console:
The 5 largest countries in the world:
+ China
+ India
+ United State
+ Indonesia
+ Pakistan
*/
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
for (let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
}

/* 
  * CHALLENGE 4:
- You need to help me fixup the largeCountries1 array so that China and Pakistan are added back into their respective place

- Use push() and pop() their counterparts unshift() and shift()

*/
let largeCountries1 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries1.pop();
largeCountries1.push("Pakistan");
largeCountries1.shift();
largeCountries1.unshift("China");
for (let i = 0; i < largeCountries1.length; i++) {
  console.log(largeCountries1[i]);
}

/* 
  * CHALLENGE 5:
- If it is Friday the 13th, logout this spooky face:😱
- Use the logical "AND operator" -> &&
*/
let dayOfMonth = 13;
let weeday = "Friday";
if (dayOfMonth === 13 && weeday === "Friday") {
  console.log("😱");
}

//Create a function that return a random item from array
let hands = ["rock", "paper", "scissor"];
function getHands() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(getHands());

/* 
  - Create a function that puts the apples on to the appleShelf and the oranges onto the orangeShelf. use a for loop, a conditional statement, and the textContent property.
*/

let test = "hellosodj";
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let orangeShelf = document.getElementById("orange-shelf");
let appleShelf = document.getElementById("apple-shelf");

function putFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}
putFruit();
