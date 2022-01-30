// function tersten_yaz(word) {
//     return word.split("").reverse().join("");
// }

// console.log(tersten_yaz("never stop"));


// let list = ["ahmet", "mehmet","samet"]


// console.log(Math.random(list.length));


// const cars =["BMW", "Mercedes", "Volvo"];

// cars[3] = "toyota";
// cars[7] = "honda";
// console.log(cars);

// let x = cars[3];

// console.log(x);

// const cars = ["audi", "opel", "fiat"];
// const cars2 = ["bmw", "ferrari"]

// const cars3 = cars.concat(cars2,"mercedes",2001);

// console.log(cars);
// console.log(cars2);
// console.log(cars3);


// const points = [40,23,54,65,85,75]
// console.log(points.sort(function(a,b){return a-b}));


// var names = ["ahmet", mahmut, "hüseyin"]


// const car = ["opel", "audi", "hondo","mazda"];
// car.push("toyota","civic")
// console.log(car);
// car.pop();
// console.log(car);
// car.shift();
// console.log(car);
// car.unshift("mercedes");
// console.log(car);

// var names = ["amer", "nahnut", "yasin", "hüseyin","adip", "nedip","gülten"]
// // names.splice(2,3, "edi","büdü", "küdü","tükü")

// // console.log(names);

// var newlist = names.slice(2,4);
// console.log(newlist);
// names.reverse();
// console.log(names);

// var colors = ["blue", "green", "yellow", "pink","green", "grey","blue",];

// console.log(colors.indexOf("green",5));
// console.log(colors.lastIndexOf("green",-4));


// ARRAYLERDE DURUM

// function student(numbers) {
//     console.log(numbers);
//     numbers = [1,2,7,5,9]
//     // numbers.push(9)
//     console.log(numbers);    
// }

// const list = [2,4,6,8]
// student(list)
// console.log(list);

const arr = [0,1,2,3,4,5,6,7,8,9]
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// console.log(x);
// console.log(y);
// console.log(z);

// const [x,y,z] = arr;

// console.log(x,y,z);
// console.log(y);
// console.log(z);

// const [k,l,m, ...mesut] = arr;
// console.log(k,l,m);
// console.log(`Mesut ${mesut}`);
// console.log(typeof arr);
// console.log(typeof k);
// console.log(mesut, Array.isArray(mesut));
// console.log(arr);
// console.log(mesut instanceof Array);


// let [firstName, surname] = "John Smith".split(' ');
// alert(firstName); // John
// alert(surname);  // Smith

// let arr = ["mesut", "semiz"]

// let [fname, sname] = arr;
// alert[fname]; //
// alert(sname); //

// we have an array with the name and surname
// var arr = ["John", "Smith"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// var [firstName, surname] = arr;

// alert(firstName); // John
// alert(surname);  // Smith

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar","zaman", "Consul", "of the Roman Republic"];

alert( firstName ); // Consul