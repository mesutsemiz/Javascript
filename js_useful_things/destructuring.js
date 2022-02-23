// const myObj1 ={
//     name: "mesut",
//     age:25

// }
// const myObj2 ={
//     job: "lawyer",
//     gender: "male"

// }

// const mesut = {...myObj1, school:"Fehime baysal high schol",...myObj2}
// console.log(mesut);

/////*object destructuring assignment********************************

// let person = {
//     firstName:"mesut", lastName:"semiz"
// }


// let firstName = person.firstName;
// let lastName = person.lastName;
// person.school="TAL"

// let {firstName:fname, lastName:lname, school} = person

// ///SYNTAX: person

// // let {property1:variable1, property2:vaiable2} = object;

// console.log(fname)
// console.log(school)


// function stat(a, b) {
//     return [
//         a+b, //
//         (a+b)/2, //
//         a-b
//     ]
    
// }

// let [sum, average, difference] = stat(45,24)

// console.log("sum:"+sum, "avr:"+average, "diffr:"+difference)


// destructing in array

// const [name, surname] = ["mesut", "semiz"]

// console.log(name,surname)

// obje destructuring


// const user = {
//     name: "selim",
//     surname: "çetin", 
//     age : 28
// }

// const {name, surname, age} =user

// console.log(name,age)

// function user(data,{age}){
//     console.log(data,age)
// }

// user("yavuz",{
//     name:"emre",
//     surname:"tek",
//     age:25
// })


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data =>{
    console.log(data)
})

