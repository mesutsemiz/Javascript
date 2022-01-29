function greet(name){
  console.log("hello world " + name);
}

greet("mesut")


//concat()

var s1 = "good";
var s2 = "boy";
var s3 = s1.concat(s2)
console.log(s3);


//charAt()
var x = "congrast"
console.log(x.charAt(2))
console.log(x.charAt(4))

//includes()
var y = "never stop learning, because life never stop teaching"
var z =y.includes("stop")
var m =y.includes("beaat'ful")
console.log(z);
console.log(m);

//indexOf() and lastIIndexOf() 
var s = "Hello John, welcome to world.";
var n = s.indexOf("welcome");

console.log (n);

var s = "Hello John, welcome to wolrd.";
var n = s.indexOf("e", 5);

console.log (n);

var s = "Hello John, welcome to world. How are you John?";
var n = s.lastIndexOf("John");

console.log (n);

var s = "Hello John, welcome to world.";
var n = s.indexOf("e", 5);

console.log (n);

//replace();
var str = "Hello ,Jhon welcome to Clarusway john";
var rep = str.replace(/JOHN/i, "Edward") //regex 

console.log (rep);

var s = "Hello John, welcome to Clarusway.";
var rep = s.replace("Clarusway", "Course")

console.log (rep);

//search()
var s = "Hello John, welcome to Clarusway.";

console.log (s.search("Clarusway"));

//slice()
var s = "Hello John, welcome to Clarusway.";

console.log (s.slice(0, 5));
console.log (s.slice(6, 10));
console.log (s.slice(12));
console.log (s.slice(12, -10));

var s = "Hello John, welcome to Clarusway.";
var rest = s.slice(12);
console.log(rest)

//split()

var s = "Hello John, welcome to Clarusway."

var arr = s.split(" ");

console.log (arr);

//substr()
var s = "Hello John, welcome to Clarusway."

console.log (s.substr(23, 9));


// substring()
var s = "Welcome to Clarusway."

console.log (s.substring(5, 10));

//toLowerCase()
 var s ="WELCOM TO OUR WORLD AND AMAZİNG world"
 console.log(s.toLocaleLowerCase());

 //toUpperCase()
 var s ="you are msmerizing"
 console.log(s.toUpperCase());

 //trim()
 var s = "                 Welcome to Clarusway                 "

console.log (s. trim());

