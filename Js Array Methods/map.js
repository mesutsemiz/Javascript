
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 

// Arrow function
/*
map((element)=>{})
map((element, index)=>{})
map((element, index, arr)=>{})


// // Callback function
map(callbackFn)
map(callbackFn,thisArg)

// // Inline callback function
map(function(element){})
map(function(element, index, arr){}, thisArg)
*/

// const array1 =[1, 4, 9, 16]

// const map1 = array1.map(number => number*2);

// console.log(map1);


let numbers = [1, 2, 3, 4]

let filteredNumbers =numbers.map((sayi, index)=>{
    if (index>2){
        return sayi

    }
    
})

console.log(filteredNumbers);