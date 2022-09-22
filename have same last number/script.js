let a = prompt("Please enter a number");
let b = prompt("Please enter a number");
let c = prompt("Please enter a number");
let number1=a%10;
let number2=b%10;
let number3=c%10;
if(number1==number2 && number2==number3)
{
    alert("The number are same");

}
else
{
    alert("The numbers are not same");
}