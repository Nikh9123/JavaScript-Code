/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/
// const a = Number(prompt())
// const b = Number(prompt())
let a = 25;
let b = 5;
const add = (a, b) => {
  //Add function here
  return (a + b) + 1
}

function sub() {
  //Subtract function here
  return (a - b)
}

function div() {
  //Divide function here
  return (a / b)
}

const mul = (a, b) =>
  //Multiply function here
  a * b

// hja
console.log('hello from the SUM exercise')
console.log(add(a, b))
/*
  TODO: create a function that console logs the result of any of the above operations.
*/