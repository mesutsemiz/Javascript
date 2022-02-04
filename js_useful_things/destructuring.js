const myObj1 ={
    name: "mesut",
    age:25

}
const myObj2 ={
    job: "lawyer",
    gender: "male"

}

const mesut = {...myObj1, school:"Fehime baysal high schol",...myObj2}
console.log(mesut);