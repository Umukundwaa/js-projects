alert("Welcome to Menu Driven Application 🎉");
alert("Continue to Login Gate");

var userName = "admin";
var password = "1234";
var balance = 10000;
var status = "";
var amount;
var inputUserName = prompt("Please Enter YOur Username : ");
var inputPassword = prompt("Please Enter Your Password : ");

if (inputUserName === userName && inputPassword === password) {
    alert("Login Successful ✅");
 while (true) {
    var options = prompt(" Menu Options:\n " +
        " 1. View Profile\n" +
        " 2. Update Balance\n " +
        " 3. Spend Money \n" +
        " 4. Check Account Status \n" +
        " 5. Exit"
    )
    if (options === "1") {
        if (balance >= 1000 ) {
            status = "Premium";
        }
        else {
            status = "Low balance";
        }
        alert("User Profile 👤\n" +
            "Username: " + userName + "\n" +
            "Account Status: " + status + "\n" +
            "Balance: $ " + balance 
        );
    }

    else if (options === "2") {
        
        var newAmount = Number(prompt("Please Enter Amount you want to add to your balance: "));

        if (newAmount <= 0) {
            alert("Invalid Amount ❌, Please Enter a value greater than 0.");
        }
        else {
              balance += newAmount;
              alert("Balance Updated Successfully ✅. New Balance: $ " + balance);
        }
    }
    else if (options === "3"){
        amount = Number(prompt("Please Enter Amount you want to spend: "));
        if (amount <= 0) {
            alert("Invalid Amount ❌, Please Enter a value greater than 0."); 
        }
        else if (amount > balance){
            alert("Insufficient Balance ❌, You cannot spend more than your balance.");
        }
        else {
            balance -=amount;
            alert("Transaction Successful ✅. Remaining Balance: $ " + balance);
        }
}
    else if (options === "4"){
        if (balance >= 1000 ) {
            alert("Account Status: Premium 🏅");
         status = "Premium";

        }
        else {
            alert ("Account Status: Low balance ⚠️");
            status = "Low balance";
        }
    }
    else if (options === "5"){
        alert("Thank you for using our services. Goodbye 👋");
    
        break;
    }
}   
}
else {
    alert("Invalid Credentials ❌, Please Try Again!");
}