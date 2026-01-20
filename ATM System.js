alert("Welcome to ATM System 💳");

var correctPin = "1234";
var balance = 1000;

var userPin = prompt("Please enter your PIN : ");


if (userPin !== correctPin) {
    alert("Invalid PIN❌, Please Try again! ");
}
else{
    alert("Welcome to your account✅");
    
    var options = prompt("Choose an option:\n" + 
        "1. Check Balance\n" + 
        "2. Withdraw Money\n" +
        "3. Exit"
    );
if (options === "1") {
    alert("Your current balance is: $" + balance);
}
else if (options === "2") {
    var withdrawAmount = Number(prompt("Enter withdrawal amount: "));

    if (withdrawAmount > balance) {
        alert("Insufficient funds❌");
    }
    else if(withdrawAmount <=0){
        alert("Invalid amount❌");
    }
    else{
        balance = balance-withdrawAmount;
        alert("Withdrawal successful ✅ Remaining balance: $" +balance);
    }
     
}
else if (options === "3") {
        alert("Thank you for using our ATM. Goodbye 👋");
    }

    else {
        alert("Invalid option ❌");
    }
}

