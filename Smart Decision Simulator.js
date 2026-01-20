alert("Welcome to Student Life Simulator 🎉");

var studentName = prompt("Please enter your name: ");

var energy = 100;
var money = 5000;
var stress = 0;
var status = "";
function Study() {
    if (energy > 20){

        energy -= 20;
        stress += 15;
        alert("You studied hard! 📚\n Energy: " + energy + "\n Stress: " + stress + "\n Money: $" + money);
    }
    else{
        alert("You are too tired to study! Please rest. 🛀");
    }
}
    function PartTimeJob() {

    if (energy > 30){

       energy -= 30;
       money += 1500;
       stress += 20;
        alert("You worked a part-time job! 💼\n Energy: " + energy + "\n Stress: " + stress + "\n Money: $" + money);
    }
    else{
        alert("You are too tired to work! Please rest. 🛀");
    }

    }
    function Rest() {
        energy +=25;
        stress -=20;
        if (energy > 100) {
            energy = 100;
        }
        if (stress < 0) {
            stress = 0;
        }
        alert("You took a rest! 🛀\n Energy: " + energy + "\n Stress: " + stress + "\n Money: $" + money);
    }
    function CheckStatus() {
        if (energy >= 70 && stress < 50) {
            alert("You are in great shape! Keep it up! 💪");
            status = "healthy 💚";
        }
        else if (stress >= 70){
            alert("You are very stressed! Consider resting more. 🧘");
            status = "stressed 😰";
        }
        else {
            alert(" you are doing okay, balance your study and rest! ⚖️");
            status = "balanced 🙂";
        }
        alert("-----Student Status------ 📊 \n " + 
            "Name : " + studentName +"\n" +
            "Energy : " + energy + "\n" +
            "Stress : " + stress + "\n" +
            "Money : $" + money +"\n" +
            "------------------------\n \n " + 
            "Status Summary 📈" + "\n"
            +  status


            
        );
    }
    function Exit() {
        alert("Thank you for playing Student Life Simulator! Goodbye 👋");
    }

while (true){

    var options = prompt(" Choose an activity:\n1. Study 📚\n " + 
        "2. Part-time Job 💼\n " + 
        "3. Rest 🛀\n " + 
        "4. Check Status 📊\n " +
         "5. Exit 🚪"
    );
    if (options === "1") {
        Study();
    }
    else if (options === "2") {
        PartTimeJob();
    }
    else if (options === "3") {
        Rest();
    }
    else if (options === "4") {
        CheckStatus();
    }
    else if (options === "5") {
        Exit();
        break;
    }
    else {  
        alert("Invalid option ❌, Please choose a valid activity.");
    }
    

}