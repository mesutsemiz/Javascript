// function hello() {
//     console.log("hello World");

// }

// hello()

// let student = {};
// student = {name : 'mesut'}
// student.name ='John';
// console.log(`Hello ${student.name} entry point`);

// function sayHi2(student){

//     student.name = 'Mark'

//     console.log(`Hello ${student.name} inside function`);
//     console.log(`Hello! ${student.name} from outside`);
// }
// sayHi2(student)

// function ab(color) {
//     if(color !=="blue"|| color !=="green"){
//         color = "red";
//     }
//     return color;
// }

// ab(color);

// function square(sayi) {
//     return sayi*sayi;

// }
// var x = square(5)
// x = square(4)
// console.log(x);


//  SUM FUNCTİON


// function summm(a, b) {
//   let sum = a + b;
//   return sum;
// }

// console.log(summm(12, 65));

// function sayHi(name = "esma" ){
//   console.log(` hi ${name}`);
//   name = "esra"
//   console.log(` hi ${name}`);
// }
// //  sayHi("mesut")
// //  sayHi("yasin")
// //  sayHi("harun")
// let name = "hüsnaaaaa";
// sayHi(name);
// console.log("outside function", name);


// function ornek(isim, soyisim){
//     for(var bslangıc=0; bslangıc<arguments.length; bslangıc++){
//         console.log(arguments[bslangıc])
//     }

// }

// ornek("ahmet", "mahmut ", "yaş", "32", "turkiye");
 



// function sum(a,b, ...args) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//    sum += arguments[i] 
//   }
//   return(sum)
// }

// console.log()


// TERNARY  OPERATORS

// var result ;

// function ternary(num1,num2) {

//     result = num1 ? num1/num2 : "Zero division error" ;

//     console.log(result);

// }
// ternary(50,5)

// ARGUMENTS


// function sum() {
//     let topla = 0;
//     for (let i = 0; i < arguments.length; i++) {

//         topla += arguments[i];



//     }

//     console.log(topla);
// }

// sum(20, 30, 45, 65,14,25,43,75)


// function sum2(a,b, ...args) {
//     console.log(args);
//     console.log(arguments);
//     return a+b;
    
// }
// console.log(sum2(42,54,65,42,52,65));


// ASSİGN A FUNCTİON T VARİABLE

// const sayHi =function greeting() {
//     return "Hello everyone.."
    
// }
// console.log(sayHi());


// const factor = function  multiple(number) {
//   if (number ===1) return 0
//   return number*multiple(number-1)
  
// }
// console.log(factor(6));