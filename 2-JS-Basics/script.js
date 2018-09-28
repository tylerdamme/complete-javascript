// var name = 'John';
// console.log(name);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// Lecture: Variables 2

// var name = 'John';
// var age = 26;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job); //undefined

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// age = 'thirty six';
// job = 'driver';

// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');
// console.log(lastName);

// alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

/******************************/
/* basic operators */

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older than John");
// var x;
// console.log(typeof x);

/****************************************/
// operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Mulitple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

/******************************** coding challenge 1 ***********************************/

// BMI = mass / height^2 = mass / (height * height), mass in kh and height in meter

// var massMark = 70;
// var heightMark = 1.69;
// var massJohn = 79;
// var heightJohn = 1.81;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// if / else statements

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var massMark = 70;
var heightMark = 1.69;
var massJohn = 79;
var heightJohn = 1.81;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
