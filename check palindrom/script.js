let a = prompt("Please enter a string");
let b =a.split("");
let rev=b.reverse();
let newreve= rev.join("");
if(a==newreve)
{
    alert("This is a palindrome")
}
else{
    alert("This is not a palindrome");
}