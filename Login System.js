alert("Hello! Welcome to Login System.");
var inputUsername = prompt("Please enter your username: ").trim().toLowerCase();
var inputPassword = prompt("Please enter your password: ");

if (inputUsername !== "admin" || inputPassword !== '1234') {
    alert("Invalid username or password , Please try again");
}
else{
    alert("Welcome Admin, Login successful.");
}
