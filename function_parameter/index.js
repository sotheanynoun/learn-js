const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name) {
  //   welcomeEl.textContent = greeting + ", " + name + " 👋";
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}
greetUser("Welcome back", "OSHJEA");
