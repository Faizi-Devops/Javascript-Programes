let lower =() =>{
    let a = prompt("Please enter the text");
    document.getElementById("input").innerHTML=a;
    let b = a.toLowerCase();
    document.getElementById("output").innerHTML=b;
}

let uper = () =>{
    let c = prompt("Please enter the text");
    document.getElementById("input").innerHTML=c;
    let d = c.toUpperCase();
    document.getElementById("output").innerHTML=d
}

let format =()=>{
    let e = prompt("Please  enter the text");
    document.getElementById("input").innerHTML=e
    let f = e.charAt(0);
    let g  =f.toUpperCase();
    let h  =e.slice(1);
    let i =g.toLowerCase();
    let total=g+h;
    document.getElementById("output").innerHTML=total;
}

let repl = () =>{
    let a = prompt("Please enter the string");
    let b =prompt("Enter the word for repplace");
    let c = prompt("Replce with");
    document.getElementById("input").innerHTML=a;
    let kuch = a.replace(b,c);
    document.getElementById("output").innerHTML=kuch; 
}

let fin = () =>{
    let a = prompt("Please enter a text");
    document.getElementById("input").innerHTML=a;
    let find = prompt("enter the serach text");
    let c = a.indexOf(find);
    if(c>=0){
    document.getElementById("output").innerHTML= "The index is " + c;
    }
    else{
        document.getElementById("output").innerHTML="Nothing found";
    }
    
}


let check = () =>{
    let kuch  = prompt("Please enter the city");
    document.getElementById("input").innerHTML = "I am enter the city " + kuch;
    var cities = ["islamabad", "karachi", "lahore", "peshawar", "queta"];
    for (index=0;index<cities.length;index++)
    {
        if (kuch === cities[index]){
            document.getElementById("output").innerHTML= "The city was found"

        }
        
    }
}