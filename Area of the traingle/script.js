// let  base = parseInt(prompt("Please enter a base value"));
// let height = parseInt(prompt("Please enter height value"));
// let area= 1/2*(base*height);
// alert(area);

let a = parseInt(prompt("Please enter a number"));
let b = parseInt(prompt("Please enter a number"));
let c = parseInt(prompt("Please enter a number"));
var s = (a+b+c)/2;
let area = s*(s-a)*(s-b)*(s-c);
let full=Math.sqrt(area);
alert(full);