// const person={  // collection of properties
//     name: 'John',
//     surname: 'John',
//     age: 40,
//     languages : ["turhkish"], "english","arab "
//     fullName :function () {                         // !!!!!!!person objesinin içinde bulunan functionlara methood denir
//         return this.name+ " "+this.surname
//     },
//     address: {
//         city:"Balıkesir",
//         district:"Akçay"
//     }
// }

// Object Lştereal

// const person={
//     name: "mesut",
//     surname: "semiz",
//     age: 29,
//     fullName :function(){
//         return this.name +" "+this.surname
//     }
// }
// console.log(person.fullName())

// //add elemnt to objet

// person.job = "Student";
// console.log(person)

// //bracet Notation

// console.log(person["name"])
// console.log(person["fullName"]())
// console.log(person["na"+"me"])

// const person={
//     name: "mesut",
//     surname: "semiz",
//     age: 29,
//     fullName :function(){
//         return this.name +" "+this.surname
//     }
// }

// person.address = {};
// person.ability = []
// person.smokeState = true

// console.log(person)

// person.address.city = "manisa";
// person.ability.language= "js"
// console.log(person)

// function Person(name, surname,age) {


//     // console.log(this)
//     // const obj={}
//         this.name=name;
//         this.surname=surname;
//         this.age =age;
//         this.fullName=function(){
//             return this.name +" "+this.surname
//         }
// console.log(this)
//         // return obj;
        
// }

// const person1 = new Person("mesut", "semiz", 29)
// const person2 = new Person("harun", "çetin", 25)
// // console.log(person1)

// object Constructor

// const person1 = new Object();
// person1.name = "mesut";
// person1.surname = "semiz";
// person1.age =29;
// person1.fullName = function(){
//     console.log(this)
//          return this.name +" "+this.surname
         
//         }
// console.log(this)
// console.log(person1)
// console.log(person1.age);
// console.log(person1.fullName())



// const person={  // Object create() ile nesne oluşturmak
//     name: 'John',
//     surname: 'John',
//     age: 40,
//     languages : ["turhkish", "english","arab "],
//     fullName :function () {                         // !!!!!!!person objesinin içinde bulunan functionlara methood denir
//         return this.name+ " "+this.surname
//     }
// }

// console.log(person)

// const yasin =Object.create(person);
// yasin.name="yasin";
// yasin.surname="semiz";
// yasin.languages="russian"
// yasin.fruit="apple";
// yasin.age=14;


// console.log(yasin)

// console.log(yasin.fullName())


// function Person(name, surname, age){  // Object create() ile nesne oluşturmak
//     this.name= 'John',
//     this.surname= 'John',
//     this.age= 40,
//     this.languages = ["turhkish", "english","arab "],
//     this.fullName =function () {                         // !!!!!!!person objesinin içinde bulunan functionlara methood denir
//         return this.name+ " "+this.surname
//     }
// }

// const mesut = new Person("mesut", "semiz",29)
// mesut.job = "Software developer"

// // console.log(person)
// // console.log(person.toString())
// // console.log(person.hasOwnProperty("name"))

// console.log(mesut)

// console.log(mesut.__proto__)



// new object-----syntax

// 1 Shorthand Properties

// let name= "mesut" , age=29;

// const myObj={
//   name,
//   age

// };

// console.log(myObj.name)

// computed Property Names

let prop1 = "name";
let age = "age"
let myObj = {

}

myObj[prop1] = "mesut"
myObj[age]=29
console.log(myObj)
