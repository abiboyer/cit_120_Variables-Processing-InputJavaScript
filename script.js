var prompter = prompt("What is your total bill?");

var number1=(prompter*.07);
var number2=(prompter+number1);
var number3=(number2*.05);
var answer=prompter+number1+number3
document.body.querySelector("#cool").innerHTML=answer;
document.body.querySelector("#lesscool").innerHTML=prompter;