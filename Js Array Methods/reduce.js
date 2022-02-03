const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous * current;
 // console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}, returns: ${array}`);
  return returns;
}

array.reduce(reducer,10);


function sum(a, b){
    return a + b;
}

// console.log(sum(4,7));

let sum1 = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)

// console.log(sum1);

let total = [6,5,8,9].reduce((previousValue, currentValue) =>previousValue + currentValue,20)

// console.log(total);

let initialValue = 0;



let sum3 =[{x:1}, {x:2}, {x:3}].reduce(function(previousValue, currentValue){
    return previousValue + currentValue.x
}, initialValue);

// console.log(sum3);

// let flattened = [[0,1],[2,3],[4,5]].reduce((previousValue, currentValue)=>previousValue.concat(currentValue),[]
// )

// console.log(flattened);


let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
console.log(countedNames);