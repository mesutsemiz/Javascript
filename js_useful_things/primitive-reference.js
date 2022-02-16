/*
 Java script has two ypes of vaues;
 1.Primiitive values(boolean, string, number, integer, null, uundefined, bigInt)

 2. Reference values(object)=> {reference values  are objects that might consist of multiple values..}



*/

// let age =25;
// let newAge =age;

// newAge = newAge +1;
// console.log(age, newAge);

let person={
    name:"Jhon",
    age: 25,
}

let member = person;

member.age =26;

console.log(person)
console.log(member)

/*
 You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.


*/
