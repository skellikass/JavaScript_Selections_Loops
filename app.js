console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let number = 1; number <=100; number++) {
    if (number % 2 != 0) {
        console.log(number);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let numb = 1; numb <= 100; numb++) {
    if (numb % 3 === 0 && numb % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    else if (numb % 3 === 0) {
        console.log("FIZZ");
    }
    else if (numb % 5 === 0) {
        console.log("BUZZ");
    }

}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let num = 1;
while (num <=100) {
    if (num % 2 != 0) {
        console.log(num);
    }
    num++;
}
let numbers = 1;
do {
    if (numbers % 3 === 0 && numbers % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    else if (numbers % 3 === 0) {
        console.log("FIZZ");
    }
    else if (numbers % 5 === 0) {
        console.log("BUZZ");
    }
       numbers++;
} while (numbers <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 
let a = 0;    // define 'a' outside of the for loop so we can separate the 2nd if statement
for (; a <= n; a++) {    // don't need anything before 1st ';' b/c we defined 'a' above
    if (a === value) {
        console.log("Found value!");
        break;
    }
}
if (a != value) {
    console.log("Did not find value");
} // this if statement outside of the for loop so we only see "Did not find value" once

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(`fizzDivisor: ${fizzDivisor}`);
console.log(`buzzDivisor: ${buzzDivisor}`);
console.log(`n: ${n}`);
console.log(`start: ${start}`);
for (let i = start; i <= n; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log(`${i} FIZZBUZZ`);
    }
    else if (i % fizzDivisor === 0) {
        console.log(`${i} FIZZ`);
    }
    else if (i % buzzDivisor === 0) {
        console.log(`${i} BUZZ`);
    }
}