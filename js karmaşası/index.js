// const btnn = document.getElementById("btn");

// function increaseCounters(e) {
//     console.log("You cliked me")
// }

// btnn.addEventListener("click",increaseCounters)

// console.log("hello world")

// var counter = (function() {
//     var privateCounter =0;
//     function changeBY(val){
//         privateCounter += val ;

//     }

//     return {
//         increment : function(){
//             changeBy(1);
//         },
//         decrement: function() {
//             changeBy(-1);
//         },

//         value: function() {
//             return privateCounter;
//         }
//     };

// })();

// console.log(counter.value());
// counter.increment();

let test = function (){
    setTimeout(() => {
        console.log("start of code");

        alert("notice me!...")

        console.log("end of code")
    }, 5000);

};

let test2 = function(){
    console.log("now ı get attention.");
};




test();
test2();