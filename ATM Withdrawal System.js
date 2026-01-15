alert("Hello! Welcome to ATM Withdrawal System 💳");

var userName = prompt("Please enter your name:");
var balance = Number(prompt("Please enter your account balance:"));
var withdrawal = Number(prompt("Please enter your withdrawal amount:"));

if (withdrawal <= 0) {
    alert("Invalid amount. Please enter a value greater than 0.");
} else if (withdrawal > balance) {
    alert("Insufficient funds. You cannot withdraw more than your balance.");
} else {
    var remaining = balance - withdrawal;
    alert(
        "Hello " + userName +
        ", your transaction was successful.\n" +
        "Remaining balance: $" + remaining
    );
}
