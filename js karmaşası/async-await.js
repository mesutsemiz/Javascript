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


