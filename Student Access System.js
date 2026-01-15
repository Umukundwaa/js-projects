alert("Hello welcome to Student Access System");
var studentName = prompt("Please enter your name: ");
var studentAge = Number(prompt(" Please enter you age :"));
var studentStatus = prompt(" please enter your registration status (Yes/No): ").toLowerCase();

if (studentAge >= 18) {
    if (studentStatus == 'yes') {
        console.log("Access granted. Welcome " + studentName + "! ");
    }
    else {
        console.log("Access denied. Please register first to access the system.");
    }
} else {
    console.log("Access denied. You must be at least 18 years old.");
}