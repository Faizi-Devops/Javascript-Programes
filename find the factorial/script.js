let number=prompt("Please enter a number");
let fact=1;

if(number==0)
{
    alert("The factorial od the " + number +"is 1");
}
else if(number<0)
{
    alert("The facctorial of the negatice number is not possible");
}
else{
    for(let i=1;i<=number;i++)
    {
        fact=fact*i;
        

    }
    alert("The factorial of the " + number + "is: " + fact);
}
