var some:string="Hello how are you";
console.log(some);

//string methods and property
//length property

var kuch:string = "Hello how are you";
var something:number=kuch.length;
console.log(something);

//slice method

var kuch:string = "Hello how are you";
var newsome:string=kuch.slice(4,11);
console.log(newsome);


//replace method

var text:string = "I have a Microsoft account and the Microsoft was";
var newtext:string=text.replace(/Microsoft/g,"Kuch");
console.log(newtext);


//touppercase


var text:string = "I have the text";
var newtext:string=text.toUpperCase();
console.log(newtext);


//to lowercase

var text:string = "I have The text";
var newtext:string=text.toLowerCase();
console.log(newtext);

//concat method

var text:string = "I have a text ";
var two:string="Another text";
var thrre:string=text.concat( two);
console.log(thrre);

//trim method

var text:string=" I have  the text ";
var sometext=text.trim();

console.log(sometext.length) 
console.log(text.length)


//charAt

var text:string="I have the text";
var newtext = text.charAt(0);
console.log(newtext);


//split method

var text:string= "I,have,a,text";

let textnew:string[]=text.split(",");
console.log(textnew);



//indexof

var text:string = "I have a text book of english";

var mon:number=text.indexOf("a");

console.log(mon);



//last indexof


var text:string="I have the account word of the microsoft word";
var mom:number=text.lastIndexOf("word");
console.log(mom);


//search method


var text:string="I have a text";
var textco:number=text.search("have");
console.log(textco);


//match method

var text:string="The rain in SPAIN stays mainly in the plain";
var moomo:any=text.match(/ain/g);
console.log(moomo)



//include

var text:string ="I have a value";
var newto:boolean=text.includes("value");
console.log(newto) ;



//startwith

var text:string="My name is Faizan Ali";
var ty:boolean=text.startsWith("My");
console.log(ty);

//ends with

var text:string="My name is Arslan";
var kucho:boolean=text.endsWith("Arslan");
console.log(kucho);


