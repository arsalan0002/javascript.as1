1st task
var eng = +prompt("Enter your eng Marks");
var math = +prompt("Enter your math Marks");
var urdu = +prompt("Enter your urdu Marks");
var isl = +prompt("Enter your isl Marks");
var sci = +prompt("Enter your sci Marks");
var totalMarks = eng + math + urdu + isl + sci;
var per = totalMarks/500 * 100;
console.log(per);

if(per >=80) {
    console.log("A-1");
}
else if(per >=70 && per <80) {
    console.log("A");
}
else if(per >=60 && per <70) {
    console.log("B");
}
else if(per >=50 && per <60) {
    console.log("C");
}
else if(per >=40 && per <50) {
    console.log("D");
}
else if(per >=33 && per <40) {
    console.log("E");
}
else{
    console.log("fail")
}

prompt

var spec = prompt("Your species?", "human");
console.log(spec);

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
console.log(spec);

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats);

var cats = +prompt("How many cats?");
var totalcats = cats + 1;
console.log(totalcats);

var city = prompt("Where does the Pope live?");
if (city == "karachi") {
   alert("Correct!");
}

var correctAnswer = "karachi";
if (x == correctAnswer) {
alert("Correct!");
}

var correctAnswer = "100";
// var x = prompt();
var x = 100;
var score = prompt();
if (x == correctAnswer) {
alert("Correct!");
}

var TicketNumber = +prompt("Enter your ticket number");
if (TicketNumber !== 487208) {
    console.log("Better luck next time.");
 }

var age = prompt("Entert Numbert");
if(age>10) {
    console.log("You are allowed on this ride");
}

var age = prompt("Entert Numbert");
if(age<10) {
    console.log("This Ride Only For You");
}

var age = prompt("Entert Numbert");
if(age>=10) {
    console.log("You are allowed on this ride");
}

var age = prompt("Entert Numbert");
if(age>=10) {
    console.log("This Ride Only For You");
}

var x = prompt("Where does the Pope live?");
if (x === "pakistan") { 
    alert("Correct!");
}

var x = prompt("Where does the Pope live?");
 if (x === "pakistan") { 
     alert("Correct!"); 
     }
      if (x !== "pakistan") {
        alert("Wrong answer");
    }

var x = prompt("Where does the Pope live?");

if (x === "Pakistan"){ 
    alert("Correct!");  
}
else {
    alert("Wrong answer"); 

}

var correctAnswer = "Karachi";

if (x === correctAnswer) {
    window.alert("Correct!");
}
else if (x === "khi") { 
        window.alert("Incorrect but close");
}
    else { 
        alert("Incorrect");
}

var weight = prompt("Weight");
var time = prompt("time");

if (weight > 300 && time < 6) {
     alert("Come to our tryout!");
}
else { 
    alert("Come to our cookout!");
}

var weight = prompt("Weight");
var time = prompt("time");
var age = prompt("age");
var gender = prompt("gender");

if (weight > 300 && time < 6 && age > 17 && gender === "male") { 
    alert("Come to our tryout!");
}
else { 
    alert("Come to our cookout!");
}

var avg = prompt("avg");
var SAT = prompt("SAT");
var GPA = prompt("GPA");
var sport = prompt("sports");

if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!"); 
} 
 else { 
    alert("Have you looked into appliance repair?");
}

var res = prompt("res");
var age = prompt("age");
if (age > 65 || age < 21 && res === "PK") {
    window.alert("welcome")
}
else {
    window.alert("ERROR")
}
 
var x =prompt("value of x");
var y =prompt("value of y");
var c =prompt("value of c");
var d =prompt("value of d");
if ((x === y || a === b) && c === d) {
    g = h;
} 
 else { e = f;
}

var x =prompt("value of x");
var y =prompt("value of y");
var c =prompt("value of c");
var d =prompt("value of d");
var e =prompt("value of e");

if (c === d) {
    if (x === y) {
         g = h;
        } 
    else if (a === b) {
        g = h;
    }
    else { 
        e = f;
    }
}
else { 
    e = f;
}