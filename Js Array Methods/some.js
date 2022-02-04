// let marks = [4, 5, 6, 8, 9, 10, 3];

// let lessThanEight =false;

// for (let index = 0; index < marks.length; index++) {
//     if (marks[index]<8){
//         lessThanEight =true;
//         break;
//     }
    
// }
// console.log(lessThanEight);

// doing with some method


// let marks = [4, 5, 6, 8, 9, 10, 3];

// const lessThanEight = marks.some((number) =>{
//     return number<8
// })

// console.log(lessThanEight);


// const array = [ 3,5,7,9,1,13]
// function exist(value, array) {
//     return array.some((e) => e===value)

// }



// console.log(exist(17, array));



//The following example shows how to check if any number in the marks array is in the range of (8, 10

// let marks = [3,56,7,9,5,8,6,45,4];

// const range = {
//     min:1,
//     max:2,
// };

// let result = marks.some(function (e){
//     return e >=this.min && e <=this.max;
// }, range);

// console.log(result);



//If you call the some() method on an empty array, the result is always false regardless of any condition. For example:

let result = [].some(e => e>0);
console.log(result);

result = [].some(e => e<10);
console.log(result);