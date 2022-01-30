// function kurek(){
//     var islem = 8*4;
//     document.write(islem);

// }
// kurek();

// const name ="Mesut";
// var sname = "Semiz"

// function na() {
//     document.write(name + " "+sname);

// }

// na();

// var topama = 85+65
// var carpma = 21*45

// var islem = function (){
//     document.write(topama)
// }

// islem();

//

// if (true) {
//     const bir = "mesut";
//     const iki = "semiz"

// }

// function demo(){
//     document.write(bir+ iki);
// }

// demo();

// kc

//  function myFunction(p1, p2) {
//     return p1 * p2;
//   }

// var sonuc =   myFunction(4, 3);
// document.write(sonuc);

// function hello() {
// 	document.write("hello edabit.com");
// }
// hello();

// function convert(minutes) {
// 	return minutes*60
// }

// convert()

// function convert(minutes) {
// 	return minutes*60;
// }

// var cons = convert(20);
// console.log(cons);

// var myCar = "Bmw";

// if (myCar == "mercedes") {
//   function text() {
//     document.write("I love my car");
//   }
// } else if (myCar == "Audio") {
//   function text() {
//     document.write("everything is intersetin, I don't like car anymore");
//   }
// } else if (myCar == "Bmw") {
//   function text() {
//     document.write("its the last point");
//   }
// } else {
//   function text() {
//     document.write(
//       "it is not best option for us , just ı want to say like that"
//     );
//   }
// }

// text();

// (function sasırdım() {
//   document.write(
//     "fonksiyonu komple parantez içine ldııktan sonra yanına bir parntez ve semi column ifadesini koyunca otomatik olark fonksiyon çalışıyor"
//   );
// })();

// var  text = function(){
//     document.write("Merhaba");
// }();

// function demo(isim) {
//     document.write("merhba nasılsın " + isim)

// }

// demo("yasin")

// function text(sayıbir,sayıiki){
//     var sonuc = sayıbir+sayıiki;
//     document.write(sonuc);

// }

// text(5,"7");

// function ogrenci(ad, soyad, yas, bolum ,okul="TAL" ){
//     document.write("öğrencinnin adı : " + ad +"<br/>");
//     document.write("öğrenci soyad : " + soyad +"<br/>");
//     document.write("öğrenci yas : " + yas +"<br/>");
//     document.write("öğrenci bolum : " + bolum +"<br/>");
//     document.write("öğrenci okul : " + okul +"<br/>");

// }

// ogrenci("semih", "can", 29, "Military")

// function kdv_bul(fiyat, kdvoranı=20) {
//     var total = fiyat+ (fiyat/100*kdvoranı);
//     document.write(total + "<br/>");
// }
// kdv_bul(800,18);

// kdv_bul(300,50);
// kdv_bul(200);

// var formula1 = function(pilot, car){
//     document.write(car+ " sürücüsü "+ pilot);
// }

// var a = "David"
// var b = "Mclaren"

// formula1(a,b);

// function parabirimi(birim, tutar) {
//     if (birim == "turk lirası") {
//         var kur = 1;
//     }else if (birim == "amerikan doları") {
//         var kur = 2;
//     }else if (birim == "euro") {
//         var kur = 3;
//     }

//     return tutarhesapla(kur,tutar);

// }

// function tutarhesapla(gelenkur, gelentutar) {

//     var hesapyap = gelenkur*gelentutar;
//     document.write(hesapyap)
//     console.log(hesapyap);
// }

// parabirimi("euro", 12);

// function square(number) {
//     return number * number;
//   }

// square(5);   //calling a function

// console.log (square(5));

// var num = [1,2,3]
// num.sort(function (a,b){
// return b - a});
// console.log(num);

// function num() {
//     return 5 + 7;
//     }

//     console.log(typeof(num));

// var s = "Hello John, welcome to Clarusway.";
// var n = s.indexOf("e", 2);

// console.log (n);

// var s = "Hello John, welcome to Clarusway."

// console.log (s.substr(23, 8));

// const arrow =(a) => a + 100;

// console.log(arrow(2))

// const user = 'Mark'
// const sayHi = (user = "new user") => `Welcome ${user}`
// console.log(sayHi(user)

// var deneme = function(parametre1, parametre2,parametre3) {
//     var test = function(son1, son2,son3) {
//         // document.write(son1 +"<br/>");
//         // document.write(son2 ,"<br/>");
//         // document.write(son3);

//         var sonuc = son1**3;
//         document.write(sonuc);

//     }
//     // return test(parametre1, parametre2)

//     return test(parametre1) + test(parametre3);

// }

// deneme(3,6);

// function bir(a){
//     function iki(b){
//         function uc(c){
//             return a+b+c;

//         }
//         return uc;
//     }
//     return iki;
// }

// //  var sonuc = bir(5)(45)(26);
//  document.write(bir(5)(45)(26));

// function deneme(){
//     function sonuc(deger){
//         document.write(deger);

//     }
//     return sonuc;
// }

// deneme()("mesut");

// function zaman(value){
//     function yalan (){
//         document.write(value);

//     }
//     return yalan();
// }

// zaman("mesut semiz");

// function nilufer(){
//     for( var baslangic=0;baslangic<arguments.length;baslangic++){
//         document.write(arguments[baslangic]+ "<br/>")

//     }

// }

// nilufer("mesut", "zaman", "yaşam")

// function lale(){
//     var sonuc =  arguments.length;
//     document.write(sonuc);
// }

// lale("güzel", "günler", "yakınnmış", "deyolar", "hhhgf")


// sayi_bul()

// SAYI TAHMİN PROGRAMI

// while (true){
//     let num = parseInt(prompt("Please enter a number between 0 and 100"))
//     if(num > 0 && num<=100){
//         console.log('It is a valid number');
//         break;
//     }else{
//         console.log('Please enter valid number');
//     }
// }


// SAYI TAHMİN PROGRAMI

// while (true) {
//   let number = 3;
//   let sayi = prompt("Enter a number between 1-10", "1-10");

//   function sayi_bul() {
//     if (number == sayi) {
//       document.write("Congrast, you find it");

//     } else {
//       document.write("Again Please");
//     }
//   }

//   sayi_bul();
// }


// let number = 3;
// let sayi = prompt("Enter a number between 1-10", "1-10");

// let number = 3;
// let sayi = parseInt(prompt("Enter a numberbetween 1-10"));

// function sayi_bul() {
//   if (number === sayi) {
//     document.write("Congrast, you find it");

//   } 
//   else  {
//     document.write("Again Please");

//   }
// }


// sayi_bul();


// var kullaniciSayisi = prompt("1'den 100'e kadar bir sayı giriniz. Ben bu sayıyı 100'e kadar yazdıracağım.", "");
// var i = kullaniciSayisi;
// while (i < 100) {
//     document.write(i + "<br>");
//     i++;
// }


// KULLANICAD SAYI BULMASINI İSTEYEN PROGRAM

// function sayi_bul() {

//     while (true) {

//         let number = 3;
//         let sayi = parseInt(prompt("Enter a numberbetween 1-10"));

//         if (number == sayi) {
//             document.write("Congrast, you find")
//             break;

//         } else {
//             document.write("Again please")
//         }
//     }
// }

// sayi_bul();


// KULLANICAD SAYI BULMASINI İSTEYEN PROGRAM

// let number = 3;

// function sayi_bul() {
//     let sayi = prompt("Enter a numberbetween 1-10")
//     if (number == sayi) {
//         document.write("Congrast, you find it");
//     } else {
//         document.write("Again Please");
//         sayi_bul()
//     }
// }
// sayi_bul()

// function sayi_bul() {

//     let number = 3;
//     let sayi = parseInt(prompt("Enter a numberbetween 1-10"));

//         if (number == sayi) {
//             document.write("Congrast, you find");

//     } 
//         else {
//         document.write("Again please");
//         sayi_bul();
          
//     } 

// }

// sayi_bul();


// var userName = "Meesut";

// var text= `Merhaba ${userName}`;

// console.log(text);


// let a = 8;
// result =21

// // console.log("result += a: " + (result +=a));
// // console.log("result : ",result -=a);
// // console.log("result: multiple : ", result *=a);
// console.log("result:division : ", result /=a);

// var a = 2;

// var b = "2";

// console.log(a === b)

// console.log( "0" == false);


// WHİLE LOOPS


// var a ;

// while (isNaN(a)){
//     a = prompt("Enter a Number")
//     a = Number(a)
//     console.log(a,typeof a)
// }
//  var score = 90;

// (score >80)  ? console.log("tebrikler") : console.log("Daha çok çalışmalısınız");

// function tersten_yaz(word) {
//     return word.split("").reverse().join("");
// }

// console.log(tersten_yaz("never stop"));


// function tersCevir(str){
//     return str.split( '' ).reverse( ).join( '' ); 
// }
   


// console.log(tersCevir("merhaba selam"));






// var meal = prompt("chose a meal which is the bset want to you");
// var yazdır ;
// meal =meal.toLowerCase()
// switch(meal) {
//     case  "kebap", "ali nazik":
//         yazdır = "my favourite food ";
//         break;
//     case "doner":
//         yazdır = " ı like it less than kebap" ;
//         break;
//     case "kavurma","pilav":
//         yazdır = "ıt has a different place by side me :)"
//         break;
//     case "hunkar begendi":
//         yazdır = "just ı say with one word , 'PERFECT' ";
//         break;
//     default :
//         yazdır = " choose a meal which is the most wanted from you";

        
// }
// console.log(yazdır);


// var product = prompt("değer gir");
// var message;
// switch(product) {
//     case "pen":
//         message = "Pen is $0.93" ;
//         break;
//     case "eraser":
//         message = "Eraser is 0,5$";
//         break;

//     default:
//         message = "select a product";
// }

// console.log(message);


// var i = 0;
// sum = 0 ;

// while(i<10) {
//     sum +=i;
//     i++;
// }

// console.log(`1 den 9 a kadar olan sayıların toplame : ${sum}`);

// let num = 10;
// let count = 0;
// let a ;

// do {
//     a =num+count
//     num++;
//     count++;
// } while (a<21);

// console.log(a);


// FOR LOOPS

// let sum =0;
// for (let index = 10; index <20; index++) {
//     sum += index;
    
// }
// console.log(sum)

// let counter = 0;
// for (let i = 0; i < 100; i++) {
//     i %10 === 0 ? counter +=i : null;
    
// }

// console.log(counter);

// let text = "clarusway";

// for (let i = 0; i < text.length; i++) {
//     console.log(i,text[i],text.length-i,text[text.length-i-1]);
    
// }

// let firm = ["gooogle", "amazon", "tesla", "netflix"]

// for (let i = 0; i < firm.length; i++) {
//     console.log(firm[i])
    
// }


// let i = 0;

// while(i<10) {
//     i++;
//     if(i%3 ===0) {
//         continue;
//     }
//     console.log(` 3'ün katı olmayan asayılar: ${i}` )
// }

// let a = [0,1,2,3,4,5,6,7,8,9]
// let b = [0,1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < a.length; i++) {
//     for (let k = 0; k < b.length; k++) {
        
//         console.log(`${i}*${k} : ${i*k}`);
        
//     }
// }

// const number = [13, 24, 34, 67, 23, 90]
// let sum =0;

// for (let i = 0; i < number.length; i++) {
//     sum = sum+number[i]  
// }
// console.log(sum)


// FİZZ NUMBER

// for (let i = 0; i < 101; i++) {
//     if(i%3 === 0 && i%5 === 0 && i !== 0) {
//         console.log(i,"fizzbuzz");
//     }else if(i%3 == 0 && i !== 0) {
//         console.log(i,"fizz");
//     }else if (i%5 === 0 && i !== 0){
//         console.log(i,"buzz");
//     }else{
        
//     }

//     console.log(i)
// }
    

const x = 6 % 2;
const y = x ? 'One': 'Two';
console.log(y);