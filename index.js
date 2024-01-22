let person = {
  name: "John",
  age: 30,
};

let selection = "name";
// console.log(person.name);
// console.log(person["name"]);

let date = new Date().getDay();
// console.log(date);

let day = "";
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Error";
    break;
}

//console.log(day, "switch");

let sale = true;
let isNiceWeather = true;
// if (day !== "Sunday" || (!sale && isNiceWeather)) {
//   console.log("Sunday sale");
// } else {
//   console.log("No sale");
// }

//||  (or) operator
//&&  (and) operator

// if (date === 0) {
//   console.log("Sunday");
//   return;
// } else if (date === 1) {
//   console.log("Monday");
//   return;
// } else if (date === 2) {
//   console.log("Tuesday");
//   return;
// } else if (date === 3) {
//   console.log("Wednesday");
//   return;
// } else if (date === 4) {
//   console.log("Thursday");
//   return;
// } else if (date === 5) {
//   console.log("Friday");
//   return;
// } else if (date === 6) {
//   console.log("Saturday");
//   return;
// } else {
//   console.log("Error");
//   return;
// }

// let x = 0;
// if (x === 0) {
//   console.log("x is zero");
// } else {
//   console.log("x is not zero");
// }

// ternary operator
// let zeroCheck = x === 0 ? "x is zero" : "x is not zero";
//console.log(zeroCheck);

//array
let numbers = [100, 2, 30, 4, 30, 3];
let persons = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Jack",
    age: 40,
  },
];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i] * 2;
  sum = sum + number;
}

console.log(sum);

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 3) {
    console.log("found 3");
  } else {
    console.log("not found");
  }
}
let colors = ["red", "green", "blue", "yellow"];
colors.pop(); // remove from the end
colors.push("purple"); // add to the end
colors.shift(); // remove from the beginning
colors.unshift("orange"); // add to the beginning

let differenceColors = colors.slice(0, 1);

let sortedColors = colors.sort();
let reversedColors = colors.reverse();
console.log(reversedColors);
