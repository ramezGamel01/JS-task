// Create a function to calculate Average to a group of numbers (at least 10 numbers)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateAverage(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log("The average is:", calculateAverage(numbers));

//Write a function that takes the base and height of a triangle and return its area

function area(base, height) {
  return (base * height) / 2;
}

console.log(area(10, 20));

//Create a function that takes the age in years and returns the age in days and print it on console

function ageDays(years) {
  return years * 365;
}

console.log(ageDays(22));

//Create a function takes two numbers and return thier sum

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(4, 6));

//Create a function that takes an array containing only numbers and return the first element

let number = [1, 2, 3, 4, 5, 6];

function arrayNumber() {
  return number[0];
}

console.log(arrayNumber());

//Create a function show your name in HTML document

function myName() {
  let name = "Ramez Gamel";
  document.getElementById("name").innerHTML = "my name is : " + name;
}

myName();

//Write a function that takes an integer hours and converts it to second .

function calcSec(hours) {
  return hours * 3600;
}

console.log(calcSec(3));

//Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.

function sum() {
  let num1 = 100;
  let num2 = 200;
  let num3 = 50;
  let num4 = 10;
  let total = num1 + num2 + num3 + num4;

  if (total > 350) {
    return (document.getElementById("task").innerHTML = true);
  } else {
    return (document.getElementById("task").innerHTML = false);
  }
}

sum();

//Create a function that takes a number and if it equals 0 it return true if not it return false

function check(number) {
  if (number == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(check(0));

//Task 10

let num_1 = 25;
let num_2 = 10;
function division() {
  return num_1 % num_2;
}

console.log(division());

//Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.

function compare(num1, num2) {
  if (num1 > num2) {
    console.log("num1 is the greater number");
  } else if (num2 > num1) {
    console.log("num2 is the greater number");
  } else console.log("They are equal");
}

compare(17, 15);

//Check if input variable is a number or not

function numOrNot(num) {
  if (typeof num == "number") {
    console.log("it's a number");
  } else {
    console.log("it's not a number");
  }
}

numOrNot("12");

//Write a JavaScript function to get the current date

let currentDate = new Date();

function currDate() {
  return currentDate;
}

console.log("Current Date is : ", currDate());
