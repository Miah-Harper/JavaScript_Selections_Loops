
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i ++){
if(i % 2!=0){
    console.log(i);
   
}

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log("not divisible by 3 or 5");
    }
}

console.log("EXERCISE 3:\n==========\n");

let i = 1;

do{
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 === 0){
        console.log("fizz");
    }
    else if ( i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log("not divisble by 3 or 5");
    }

    i++
} while(i <= 100);

let b = 1;

while(b <= 100){
    if(b % 2 !=0){
        console.log(`${b} is odd`);
    }
    b++
}

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;

for(let i = 0; i <= n; i++){
    if(i === value){
        console.log("found value!");
        found = true;
        break;
    }
    if(!found){
        console.log("could not find value");
    }
    
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(let i = start; i < end; i++){
    if( i % fizzDivisor === 0 && i % buzzDivisor === 0){
        console.log("fizzbuzz");
    }
    else if(i % fizzDivisor === 0){
        console.log("fizz");
    }
    else if(i % buzzDivisor === 0){
        console.log("buzz");
    }
    else{
        console.log("not divisible");
    }
}