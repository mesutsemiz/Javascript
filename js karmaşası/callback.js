// const posts = [
//      {title:"Post-one", body:"this is pot one"},
//      {title:"Post-two", body:"this is pot two"}
//     ]


// function getPosts(){
//     setTimeout(() => {
//         let output = "";
//         posts.forEach((post,index) => {
//             output +=`<li>${post.title}</li>`
            
            
//         });

//         document.body.innerHTML = output;

        
//     }, 2000);
// }


// function createPost(post,callback) {

//     setTimeout(() => {

//         posts.push(post)
//         callback()
        
//     }, 2000);
  
    
// }

// createPost({title: 'Part-Theree', body:'this is post three'}, getPosts )

// console.log(getPosts())



////////////////////PROMİSE


// const posts = [
//     {title:"Post-one", body:"this is pot one"},
//     {title:"Post-two", body:"this is pot two"}
//    ]


// function getPosts(){
//    setTimeout(() => {
//        let output = "";
//        posts.forEach((post,index) => {
//            output +=`<li>${post.title}</li>`
           
           
//        });

//        document.body.innerHTML = output;

       
//    }, 2000);
// }

// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             posts.push(post)

//             const error = false;

//             if(!error) {
//                 resolve()
//             }else{
//                 reject('Error: Something went wrong')
//             }
            
//         },2000);
//     });
// };

// createPost({title:"Post-four", body:"this is post four"})
//     .then(getPosts)
//     .catch(err =>console.log(err))



function total1(array,callback){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
        sum+=array[i];

    }
    return  sum;

}

const result = total1([3,6,5,1,4,8,2],console.log)

console.log(result)