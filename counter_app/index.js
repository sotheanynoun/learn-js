// document.getElementById("count-el").innerText = 5;
// let count = 0;
// console.log(count);

// let myAge = 22;
// console.log(myAge);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

/*
?? DOM : Document Object Model
!! (how you use JavaScript to modify a website)

?? What is String
!! 

?? Strings Vs. Numbers

*/

// initialize the count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// grab the save-el paragraph and store it in a variabel calle saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

// 1. create a function, save(), which logs out the count when it's called
function save() {
  // 2. Create a variable that contains both the count and dash separator, i.e., "12 - "
  let countStr = count + " - ";

  // 3. Render the variable in the saveEl using innerText
  saveEl.innerText += countStr;

  countEl.textContent = 0;
  //after click save it set count to 0 again
  count = 0;
}

let username = "per";
// 2. Create a variable, message, that stores the string" "You have three new notifications"
let message = "You have three new notifications";
console.log(message + ", " + username + "!");

// create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

/* 
* Challenges
TODO1:  create two variable, name and greeting. Th name variable should store your name, and the greeting should store e.g., "Hi, my name is "

TODO2: create a third variable, myGreeting, that concatenates the two strings
! Log myGreeting to the console
*/
let name = "Sotheany";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;
console.log(myGreeting);

/*
 *CHALLENGE: Render Welcome Message

 - Grab the welcome-el paragraph and store it in a variable called welcomeEl
 - Create two variable (name & greeting) that contains your name and the greeting we want to render on the page
 - Render the welcome message using welcomeEl.innerText
 */
let welcomeEl = document.getElementById("welcome-el");

let myName = "Sotheany";
let greeting1 = "Welcome back ";

welcomeEl.innerText = greeting1 + myName;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count+1
welcomeEl.innerText += "👋";

/* 
- When the user clicks the purchase button, render out "Something went wrong, please try again" in the paragraph that has the id="error"
*/
let errorEl = document.getElementById("error");
function purchase() {
  errorEl.textContent = "Something went wrong, please try again";
}

/* 
  TODO: Calculator Challenge
  1. Create four functions: add(), subtract(), divide(), multiply()
  2. Call the correct function when the user clicks on one of the buttons 
  3. Perform the given calculation using num1 and num2
  4. Render the result of the calculation in the paragraph with id="sum-el"

 !! E.g. if the user clicks on the "Plus" button, you should render "Sum: 10" (since 8+2=10) inside the paragraph with id="sum-el"
*/

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result = document.getElementById("sum-el");
function add() {
  let sum = num1 + num2;
  result.textContent = "Sum: " + sum;
}

function subtract() {
  let subtract = num1 - num2;
  result.textContent = "Subtract: " + subtract;
}
function divide() {
  let divide = num1 / num2;
  result.textContent = "Divide: " + divide;
}
function multiply() {
  let multiple = num1 * num2;
  result.textContent = "Multiply: " + multiple;
}
