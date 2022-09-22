var some = "Hello how are you";
console.log(some);
//string methods and property
//length property
var kuch = "Hello how are you";
var something = kuch.length;
console.log(something);
//slice method
var kuch = "Hello how are you";
var newsome = kuch.slice(4, 11);
console.log(newsome);
//replace method
var text = "I have a Microsoft account and the Microsoft was";
var newtext = text.replace(/Microsoft/g, "Kuch");
console.log(newtext);
//touppercase
var text = "I have the text";
var newtext = text.toUpperCase();
console.log(newtext);
//to lowercase
var text = "I have The text";
var newtext = text.toLowerCase();
console.log(newtext);
//concat method
var text = "I have a text ";
var two = "Another text";
var thrre = text.concat(two);
console.log(thrre);
//trim method
var text = " I have  the text ";
var sometext = text.trim();
console.log(sometext.length);
console.log(text.length);
//charAt
var text = "I have the text";
var newtext = text.charAt(0);
console.log(newtext);
//split method
var text = "I,have,a,text";
var textnew = text.split(",");
console.log(textnew);
//indexof
var text = "I have a text book of english";
var mon = text.indexOf("a");
console.log(mon);
//last indexof
var text = "I have the account word of the microsoft word";
var mom = text.lastIndexOf("word");
console.log(mom);
//search method
var text = "I have a text";
var textco = text.search("have");
console.log(textco);
//match method
var text = "The rain in SPAIN stays mainly in the plain";
var moomo = text.match(/ain/g);
console.log(moomo);
//include
var text = "I have a value";
var newto = text.includes("value");
console.log(newto);
//startwith
var text = "My name is Faizan Ali";
var ty = text.startsWith("My");
console.log(ty);
//ends with
var text = "My name is Arslan";
var kucho = text.endsWith("Arslan");
console.log(kucho);
