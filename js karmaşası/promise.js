



//in JS a promise is an object that returns a value that you hope to recieve in the fututre but not now

/* 
A promise has three state;

1-Pendig
2-Fulfilled
3-Rejected

*/

// let completed = false;
// let learnJs = new Promise(function(resolve,reject){
//     if (completed) {
//         resolve("ı have completed learning JS")
//     }else{
//         reject("ı have failed learning")
//     }
// })
// console.log(learnJs)

/*
The Promise constructor accepts a function as an argument. This function is called the executor like resolve or reject. you can use any names you want instead of resolve and reject

*/

// let completed = true;

// let learnJs = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         if (completed) {
//             resolve(" I have completed learning JS")
//         }else{
//             reject("I have failed learning")
//         }
        
//     }, 3000);
    
    

// })

// console.log(learnJs)

/*
CONSUMING A PROMİSE: then, catch,finally
1--the then() method is s-used to schedule a callback to be executed when the promise is successfully resolved.
    then() method takes two arguments;
        promiseObject.then(onFilled,onRejected);

2-- catch() method use when you want to schedule a callback to be executed when the promise is rejected,you can use the catch() method of the Promise object:

learnJS.catch(
    reason => console.log(reason)
)


3-- finally() method sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected.
*/