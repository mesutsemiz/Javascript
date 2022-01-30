// const text = document.querySelectorAll('.title')
// const changeColor = document.querySelectorAll('.changeColor')

// text.style.color = 'red'

// text.classList.add('change');



const userList=document.querySelector('.name-list')
const listInput=document.querySelector('.list-input')
const addListButton = document.querySelector('.addListButton')

// for(user of userList){
//     user.addEventListener("click", function () {
//         this.style.color="red";
//     });
// }    



// changeColor.addEventListener('click', function () {
//     text.classList.add('change')
// })

addListButton.addEventListener("click", function () {

const newLi = document.createElement("LI");
const liContent = document.createTextNode(listInput.value)

newLi.appendChild(liContent)
userList.appendChild(newLi)


})
var dog = {
    name: "Rocky",
    legs: 4,
    tail: 1,
    qualities: ["loyalty","companionship"],
    bark : function() {
      console.log("woof");  },
    result : function() {
      return this.name+ " has " + this.legs + " legs.";
    }
    };