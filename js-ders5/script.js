/*// FOR Loops

// let i= 0, sum = 0;

// while (i<6) {
//     sum = sum +i;
//     console.log(i);
//     i++;
// }

// console.log(`total is : ${sum}`);*/

// let i = 6 , sum = 0;

// do {
//     sum +=i;     
// } while(i<5);
// console.log(sum) ;

// for (let i=0;i<8 ; i++) {
//     console.log("i",i);
// }

// var counter = 0;
// for (let i = 1; i <=50;i++) {
//     i % 10 === 0 ? counter +=i : null;
// }

// console.log(counter);

// let brand = "clarusway"

// for ( i =1 ; i<=brand.length;i++){
//     console.log(i,brand[i]);
// }
// let bests = ["Clarusway", "Google", "Amazon", "Tesla"]

// for(let i = 0; i <bests.length ; i++){
//     console.log(i+1, " : ", bests[i]);
// }

// let i = 0 ;
//  while(i<10){
//     if(i===6) {
//         break;
        
//     }
//     console.log(i);
//     i++;
//  }

//  let var = 6;

//  for( var i=1;)

for (let i = 1; i<= 100; i++ ) {
	if(i%3 === 0 && i%5 === 0) {
	    console.log(` ${i} is FizzBuzz`)
	} else if (i%3 === 0) {
	    console.log(`${i} is Fizz`)
	} else if (i%5 === 0) {
	    console.log(`${i} is Buzz`) 
	} else {
	    console.log(`${i} is another number`)
	}
    }



    // 1. WHILE LOOPS
/*
let i = 0,
  sum = 0;
while (i < 6) {
  sum += i;
  console.log(i);
  i++;
}
console.log(`Total is : ${sum}`);
*/
// 2. DO WHILE
/*
let i = 3,
  sum = 0;
do {
  sum += i;
  i++;
} while (i < 5);
console.log(sum);
*/
// 3. For Loops
/*
let i = 4;
for (; i < 8; ) {
  console.log("i", i);
  i++;
}
*/
/*
let counter = 0;
for (i = 0; i <= 50; i++) {
  // console.log("i", i);
  i % 10 === 0 ? (counter += i) : null;
}
console.log(counter);
*/
/*
let brand = "Clarusway";
// console.log(brand.length);
for (let i = 0; i < brand.length; i++) {
  console.log(i, brand[i], brand.length - i, brand[brand.length - i - 1]);
}
*/
/*
let brand = "Clarusway";
// console.log(brand[8]);
for (let i = 0, j = brand.length; i < brand.length; i++, j--) {
  console.log(i + 1, brand[i], j, brand[j - 1]);
}
*/
/*
let bests = ["Clarusway", "Google", "Amazon", "Tesla"];
let len = bests.length;
for (let i = 0; i < len; i++) {
  document.write("<h1>", i + 1, " : ", bests[i], "</h1>");
}
*/
/*
let i = 0;
while (i < 10) {
  if (!(i % 3 === 0)) {
    console.log(i);
    // break;
  }
  i++;
}
*/
/*
let i = 0;
while (i < 10) {
  if (i === 0) {
    console.log(i);
  }
  i++;
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
*/
/*
let i = 0;
for (i = 0; i < 7; i++) {
  if (i === 2 || i === 4) {
    continue;
  }
  console.log(i);
}
*/
/*
let text = "Clarusway";
let newText = "";
for (i = 0; i < text.length; i++) {
  console.log(text[text.length - (i + 1)]);
  newText = newText + text[text.length - (i + 1)];
}
console.log(newText);
document.write(newText);
*/
/*
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    document.write(`${i} * ${j} = ${i * j}`, "<br/>");
  }
}
*/
/*
const number = [13, 34, 24, 67, 23, 90];
let result = 0;
for (let i = 0; i < number.length; i++) {
  result += number[i];
}
console.log(result);
*/
/*
// let x = 5;
const x = prompt("Enter a number");
result = 1;
for (i = 1; i <= x; i++) {
  result = result * i;
}
console.log(result);
document.write(result);
*/

function greet(name){
  console.log("hello world " + name);
}

greet("mesut")