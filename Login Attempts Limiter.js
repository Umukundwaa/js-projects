alert("Welcome to Login Attempts Limiter System.");
var correctUsername = "admin";
var correctPassword = "1234";

for (let i = 3; i > 0 ; i--) {

    var inputUsername = prompt("please enter your username: ");
    var inputPassword = prompt("Please enter your password: ");

    if (inputUsername === correctUsername && inputPassword === correctPassword) {
        alert("Welcome Admin, login successful✅");
        break;
    }
    else{
        alert("Invalid username or password ❌. Attempts left: " + i);
    }
  if (i === 1) {
    alert("Account locked. Too many failed attempts.");
  }
}