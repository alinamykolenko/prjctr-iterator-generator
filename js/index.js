"use strict";

// ---task1-iterator-------------------------------
const range = {
  from: 1,
  to: 100,
};

range[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current <= last) {
        return {
          value: current++,
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let i of range) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// ---task1-generator-------------------------------

const range2 = {
  from: 1,
  to: 100,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};
const numbers = [...range2];
for (let num of numbers) {
  if (num % 15 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
}

// ---task2-generator-------------------------------

function* generateRandomNumbers(max, quantity) {
  for (let i = 0; i < quantity; i++) {
    yield Math.floor(Math.random() * max) + 1;
  }
}

const generator = generateRandomNumbers(25, 6);

for (const number of generator) {
  console.log(number);
}
