const navbarItem1 =document.getElementsByClassName("nav__item")[0];
const navbarItem2 =document.getElementsByClassName("nav__item")[1];
const navbarItem3 =document.getElementsByClassName("nav__item")[2];


const h1 = document.querySelector("h1");
// const highlightSpan= h1.querySelectorAll(".highlight");
// h1.firstElementChild.style.color="red";
// h1.lastElementChild.style.color="blue";

// navbarItem1.closest(".header").style.backgroundColor="yellow";


// window.onload =() => {
//     alert("You are welcome...");

// }

// window.addEventListener("load", function() {
//     alert("You are welcome");
    
// })

// window.addEventListener("load", () => {
//     alert(" welcome");
    
// })

navbarItem1.onclick = () => {
    alert ("say hello")
}

navbarItem1.addEventListener("click", () => {alert ("Bonjour..")})

function sayHello() {
    alert ("marhaba dünya")

}

navbarItem2.addEventListener("mouseover", () => {
    document.getElementsByClassName("nav__item")[1].innerHTML = "overme!"
})
navbarItem2.addEventListener("mouseout", () => {
    document.getElementsByClassName("nav__item")[1].innerHTML = "Operations"
})


const randomNumber = () => {
    return Math.floor(Math.random() *255);
}

const randomColor = () => {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

const changeColor = () => {
    navbarItem3.style.borderRadius ="20px";
    navbarItem3.style.backgroundColor=randomColor();
}

// navbarItem3.addEventListener("click", ()=>{
//     navbarItem3.style.backgroundColor = randomColor();
// })



navbarItem3.addEventListener("click", changeColor);

// for smooth passing
document.querySelectorAll(".nav__link").forEach(
    function(element) {
        element.addEventListener("click", function(){
            element.preventDefault();
            const sectionId =this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({
                behavior :"smooth"
            });
        });
    });

    
