// accessing object properties

// there are two ways;
// 1.objet name.propertyName
// 2.objectname['propertyName']

// var dog = {
//     name:"polly",
//     legs:4,
//     tail:1,
//     qualities:["loyality","faster"],

// };

// var dogName = dog.name;
// console.log(dogName);

// var yourDog= dog["name"]
// console.log(yourDog);

// var pilot = {
//     name: "ahmet",
//     age: 28,
//     city: "Madrid",
//     section:"stopper",
//     soccer: function() {
//         console.log("he is a beststopper");
//     },
//     result: function() {
//         return  this.name +"is the best player who plays in" + this.city+ "as a" + this.section
//     },
// }

// pilot.soccer()

// CONSTRUCTOR

// function soccer(section, age, salary){
//     this.section=section;
//     this.age=age;
//     this.salary=salary;
// }

// var soccer1 =new soccer("libero", 25,500)
// console.log(soccer1);

//STATİC METHODS

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     static hello(){
//        return "Hello";
//     }
//   }
//   myDog = new Dog("Buldog")
//   document.getElementById("content").innerHTML = Dog.hello();

//METHODS
//   class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     current(){
//        return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
//     }
//   }
//   myDog = new Dog("Buldog",4)
//   document.getElementById("content").innerHTML = myDog.current();

//INHERITANCE(extends keyword)

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current() {
    return "I have a " + this.dogName;
  }
}

class Specy extends Dog {
  constructor(name, foot, char) {
    super(name, foot); //The super() method refers to the parent class.
    this.character = char; // By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
  }
  show() {
    return this.current() + ", it is  " + this.character;
  }
}

myDog = new Specy("Buldog", 4, "curious");
document.getElementById("content").innerHTML = myDog.show();
