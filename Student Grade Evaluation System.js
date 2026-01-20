alert("Welcome to Student Grade Evaluation System 📊");

var studentName = prompt ("Please Enter your Name : ");
var score = Number( prompt("Please Enter Your Score : "));

if(score < 0 || score > 100){
    alert("Invalid Score ❌. Score must be between 0 and 100.");
}
else if (score >= 90){
    alert("Hello " + studentName + ", Your Score is "+
        score + " , Grade: A ✅");
}
else if (score >=80){
        alert("Hello" + studentName + ", Your score is "+ score + " , Grade : B ");

}
else if (score >=70){
    alert("Hello " + studentName + ", Your score is " + score + ", Grade : C ✅");

}
else if (score >=60){
    alert("Hello " + studentName + ", Your score is " + score + ", Grade : D ✅");
}
else if (score < 60){
    alert("Hello " + studentName + ", Your score is " + score + ", Grade : F ❌");   
}
else{
    alert("An unexpected error occurred.");
}