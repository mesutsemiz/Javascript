



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

// let p = new Promise((resolve,reject)=>{

//     let a=1+1
//     if (a ==2){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }

// });

// p.then((message)=>{
//     console.log("this is the in the the " + message)
// }).catch((error)=>{
//     console.log("this is inthe catch "+ error)
// })

// console.log("start");

// function loginUser(email,passwords, callback) {
//     setTimeout(() => {
//         console.log("Nw we have data..")
//         callback(email, passwords)
        
//     }, 5000);
// }

// const user = loginUser("devedf@gmail.com", 12345678, (user)=>{
//     console.log(user)
// });




// console.log("Finish")

// let p = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(10)
        
//     }, 5*1000);
// });


// p.then((result) =>{
//     console.log(result);
//     return result*5;

// }).then((result) =>{
    
//     return result*3;
//     console.log(result);
// })



// let p = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         reject(10)
        
//     }, 3*1000);
// })


// p.then((result) =>{
//     console.log(result)

// })



/// PROMİSE CHANİNG

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)        
//     }, 3*1000);
// })


// p .then((result) => {
//     console.log(result)
//     return result*7;

// }).then((result) => {
//     console.log(result);
//     return result*9;
// }).then((result) => {
//     console.log(result);
//     return result*9;
// })




//Multiple handlers for a promise

//When you call the then() method multiple times on a promise, it is not the promise chaining. For example:

// let p =new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
        
//     }, 3000);
// })

// p.then((result) => {
//     console.log(result)   // result=10
//     return result*8;
// })

// p.then((result)=>{
//     console.log(result);   // result=10
//     return result*5;
    
// })

// p.then((result)=>{
//     console.log(result);   // result=10
//     return result*7;
    
// })





// You can retun new promise in then () method

// let p = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(180)
        
//     }, 3000);

// })


// p.then((result)=>{
//     console.log(result)
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(result*3)
//         }, 3000);
    
        

//     })
    

// }).then((result)=>{
//     console.log(result)
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(result*6)
            
//         }, 3000);
        
//     })
// }).catch((result)=>{
//     console.log(result)
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject(result*20)
//         }, 3000);
//     })
// })






//////////////////////PROMİSE chaning syntax

// step1()
//     .then(result =>step2(result))
//     .then(result =>step3(result))


//     //////////this code is same below code

// step1()
//     .then(step2)
//     .then(step3)



/******************Suppose that you want to perform the following asynchronous operations in sequence:

    >>>>>>>First, get the user from the database.
    >>>>>>>Second, get the services of the selected user.
    >>>>>>>Third, calculate the service cost from the user’s services.

The following functions illustrate the three asynchronous operations: */

// function getUser(userId) {
//     return new Promise((resolve, reject) =>{
//         console.log("Get the user from datatbase")
//         setTimeout(() => {
//             resolve({ 
//                 userId:userId,
//                 username:"admin"
//             })
//         }, 5000);
//     })
// }

// function getServices(user) {
//     return new Promise((resolve, reject)=>{
//         console.log(`get services of ${user.username} from the API`)
//         setTimeout(() => {
//             resolve(["Email", "VPN", "CDN"])
            
//         }, 3000);

//     })
// }

// function getServiceCost(services){
//     return new Promise((resolve, reject) => {
//         console.log(`calculate th service cost of ${services}.`)
//         setTimeout(() => {
//             resolve(services.length*100);
            
//         }, 3000);
//     })
// }

// getUser(100)
// .then(getServices)
// .then(getServiceCost)
// .then(console.log);



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 5 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });


// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));


// function getUsers(){
//     return [
//         {username:'mesut', email:'mesut@gmail.com', phone:253323}, 
//         {username:'harun', email:'harun@gmail.com'}
//     ]
// }

// function findUser(username){
//     const users=getUsers()
//     const user=users.find((user) => user.username===username )
//     return user
// }

// console.log(findUser("mesut"))

function getUsers() {
    let users = [];
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
    return users;
  }

  console.log(getUsers())