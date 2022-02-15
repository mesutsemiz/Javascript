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

let person = {
    firstName:"mesut", lastName:"semiz"
}


let firstName = person.firstName;
let lastName = person.lastName;
person.school="TAL"

let {firstName:fname, lastName:lname, school} = person

///SYNTAX: person

// let {property1:variable1, property2:vaiable2} = object;

console.log(fname)
console.log(school)