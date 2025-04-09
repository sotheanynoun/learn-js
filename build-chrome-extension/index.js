let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const tabBtn = document.getElementById("tab-btn");

// const tabs = [
//   {
//     url: "https://github.com/phallyn-chean/credit_score_machine_learning_project",
//   },
// ];

tabBtn.addEventListener("click", function () {
  //   console.log(tabs[0].url);
  //

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
/* 
    1. Save a key-value pair in localStorage
    2. Refresh the page. Get the value and log it to the console
    3. Clear localStorage

    HINTS:
    - localStorage.setItem(key,value)
    - localStorage.getItem(key)
    - localStorage.clear()
    - PS:: both key and value need to be strings
*/
/* 
 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
 2. Push a new value to the array
myLeads.push("www.lead2.com");
 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads);
 4. Console.log the string using typefof to verify that it's a string
console.log(typeof myLeads); */

/* 
    - Get the leads from the localStorage - PS:: JSON.parse()
    - Store it in a variable, leadsFromLocalStorage
    - logout the variable
*/

/* 
- Check if leadsFromLocalStorage is truthy
- If so, set myLeads to its value and call renderLead()
*/
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
              <li>
                  <a target='_blank' href='${leads[i]}'>
                      ${leads[i]}
                  </a>
              </li>
          `;
  }
  ulEl.innerHTML = listItems;
}

/* 
    1. Store the delete button in a deleteBtn variable
    2. Listen for double clicks on the delete button
    3. When clicked, clear localStorage, myLeads, and  
*/
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = []; //set to empty array
  render(myLeads);
});
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  //save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  //to verify that it work
  //   console.log(localStorage.getItem("myLeads"));
});
