// const func1 = () =>{
//     console.log("Func 2 console log 1");

//     console.log("Func 2 console log 2");

//     alert("Alert message");
// }
    


// const func2 = () => {
//     console.log("Func 2 console log 1");

//     console.log("Func 2 console log 2");

// }

// func1();
// func2();


// setInterval
// function countSeconds(limit) {
//     let current = 0;
//     const intId = setInterval(() => {
//       if (current == limit) {
//         clearInterval(intId);
//         console.log('counter finished.');
//         return;
//       }
//       current++;
//       console.log(`${current} seconds passed.`);
//     }, 1000);
//   }
//   // countSeconds(4);
  
//   // setTimeout
//   let current = 0;
//   function countSeconds2(limit) {
//     // recursive
//     if (current > limit) {
//       console.log('counter finished.');
//     } else {
//       if (current != 0) {
//         console.log(`${current} seconds passed.`);
//       }
//       current++;
//       setTimeout(countSeconds2, 1000, limit);
//     }
//   }
//   countSeconds2(3);

// const promise1 = new Promise((resolve,reject)=> {
//   // resolve("data")
//   resolve();
// })

// promise1
//     .then(()=>{
//       console.log("alınamadı")
//     })
//     .catch(()=>{
//       console.log("veriler")

//     })

const books = [
  {name: "Pinball 1973 ", author: "Haruku Maruki"},
  {name: "Özgürlük ", author: "Zegmunt Baumn"},
  {name: "Turkiye'de Çağdaşlaşma", author: "Niyazi Berkes"}

]

const listBooks = () => {
  books.map((book,index) => {
    console.log(book,index)
  })
}

// const addNewBook = (newBook, callback) => {
//   books.push(newBook)
//   callback();
// }

const addNewBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook)
    // resolve(books)
     reject("HATA ALDIK")
  })

  return promise1
}

// addNewBook({name:"Belin hatıralarım", authpr: "hüsrev Grede"}, listBooks);

addNewBook({name:"Belin hatıralarım", author: "hüsrev Grede"})
  .then(() => {
    console.log("new liste");
    listBooks();
  })
    .catch((reason) => {
      console.log(reason)

    })