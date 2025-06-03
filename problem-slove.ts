// Problem Solving:

// 1.Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Nadiya", age: 25, gender: "female" },
  { name: "Rehad", age: 30, gender: "male" },
  { name: "Sarmin", age: 22, gender: "female" },
  { name: "Saiful", age: 28, gender: "male" },
];

const getFemaleNames = (people) => {
  const result = people
    .filter((person) => person.gender === "female")
    .map((person) => person.name);

  return result;
};

console.log(getFemaleNames(people));

// 2.Task: Object Manipulation
// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Alchemist", author: "Saiful", year: 2000 },
  { title: "Football Lover", author: "Rehad", year: 2010 },
  { title: "The Hobbit", author: "Hasan", year: 2020 },
];

const getBookTitles = (books) => books.map((book) => book.title);

console.log(getBookTitles(books));

// 3.Task: Function Composition
// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (x) => x * x;
const double = (x) => x * 2;
const add5 = (x) => x + 5;

const composedFunction = (x) => add5(double(square(x)));

console.log(composedFunction(3));

// 4.Task: Sorting Objects
// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2019 },
];

const sortByYear = (cars) => cars.sort((a, b) => a.year - b.year);

console.log(sortByYear(cars));

// 5.Task: Find and Modify
// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people2 = [
  { name: "Saiful", age: 25 },
  { name: "Hasan", age: 30 },
  { name: "Rehad", age: 22 },
];

const modifyAge = (array, targetName, newAge) => {
  const person = array.find((p) => p.name === targetName);
  if (person) {
    person.age = newAge;
  }
  return array;
};

console.log(modifyAge(people2, "Hasan", 35));

// 6.Task: Array Reduction
// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6];

const sumEvenNumbers = (number) =>
  number.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log(sumEvenNumbers(numbers));

// 7. Task: Leap Year Checker
// -Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

// 8. Task: Unique Values
// -Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers2 = [1, 2, 2, 3, 4, 4, 5];

const getUniqueValues = (number) => [...new Set(number)];

console.log(getUniqueValues(numbers2));

// 09.Task: Advanced Sorting
// -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: "Sarmin", grades: [90, 80, 85] },
  { name: "Nadiya", grades: [70, 75, 80] },
  { name: "Rehad", grades: [95, 85, 100] },
];

const sortByAverageGrade = (arr) =>
  arr.sort((a, b) => {
    const avgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
    const avgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
    return avgB - avgA;
  });

console.log(sortByAverageGrade(students));

// 10. Task: Functional Programming - Reduce
// -Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 5 },
  { quantity: 1, price: 20 },
];

const getTotalValue = (arr) =>
  arr.reduce((total, item) => total + item.quantity * item.price, 0);

console.log(getTotalValue(items));

// Output
/*

1.[ 'Nadiya', 'Sarmin' ]
2.[ 'The Alchemist', 'Football Lover', 'The Hobbit' ]
3.23
4.[
  { make: 'Honda', model: 'Civic', year: 2018 },
  { make: 'Ford', model: 'Focus', year: 2019 },
  { make: 'Toyota', model: 'Corolla', year: 2020 }
]
5.[
  { name: 'Saiful', age: 25 },
  { name: 'Hasan', age: 35 },
  { name: 'Rehad', age: 22 }
]
6.12
7.true
7.false
8.[ 1, 2, 3, 4, 5 ]
9.[
  { name: 'Rehad', grades: [ 95, 85, 100 ] },
  { name: 'Sarmin', grades: [ 90, 80, 85 ] },
  { name: 'Nadiya', grades: [ 70, 75, 80 ] }
]
10.55

*/
