// await works only inside an async func !!!!!!


// async function test(){
//     let promise =new Promise((resolve,reject)=>{
//         setTimeout(() => {resolve("My promise worked")
            
//         }, 5000);

//     });

//     let result = await promise;

//     console.log("run after 5 second")
// }

// test()



//23.02.2022 Prototürk async await anlatımı

// (async()=>{
//     async function hello(){
//         return new Promise((resolve,reject)=>{
//             resolve("bonjooorrr")
    
//         })
//     }
    
//     const text = await hello();
//     console.log(text)
    

// })()


// document.querySelector("#btn").addEventListener("click",async ()=>{
//    const result=await Notification.requestPermission()
//    console.log(result)
   

// })


// document.querySelector("#btn").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(re =>re.json())
//     .then(response=>{
//         fetch(`https://jsonplaceholder.typicode.com/posts/${response.id}/comments`)
//         .then(res =>res.json())
//         .then(data =>{
//             console.log(data)
//         })
//     })
// })


document.querySelector("#btn").addEventListener("click",async()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  
  

    const comment =await (await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)).json();

    console.log(comment,post )
    
    
    
    
    
    
})

