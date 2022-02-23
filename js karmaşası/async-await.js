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

(async()=>{
    async function hello(){
        return new Promise((resolve,reject)=>{
            resolve("bonjooorrr")
    
        })
    }
    
    const text = await hello();
    console.log(text)
    

})()

