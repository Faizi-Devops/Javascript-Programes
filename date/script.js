
let geTay = () =>{
    
    let a=new Date();
    let b=a.getDay();
    console.log(b)
    if(b==0){
        document.getElementById("dasy").innerHTML="Sunday";

    }
    else if (b==1)
    {
        document.getElementById("dasy").innerHTML="Monday";
    }
    else if (b==2)
    {
        document.getElementById("dasy").innerHTML="Tuesday";
    }
    else if (b==3)
    {
        document.getElementById("dasy").innerHTML="Wednesday";
    }
    else if (b==4)
    {
        document.getElementById("dasy").innerHTML="Thursday";
    }
    else if (b==5)
    {
        document.getElementById("dasy").innerHTML="Friday";
    }
    else if (b==1)
    {
        document.getElementById("dasy").innerHTML="Saturday";
    }


    else{
    document.getElementById("dasy").innerHTML="Nothing Found";
    }
}
let today = () =>{
    document.getElementById("copy").innerHTML=new Date();

}
let gedays = () =>{
    let a=prompt("Please enter the year");
    let today = new Date()
    let b = new Date(a);

    let diff = today.getTime()-b.getTime();
    let nodif = diff/(1000*60*60*24);

    document.getElementById("dasy").innerHTML=Math.floor( nodif) + " days have been passed since you born"

}
let gebirth =()=>{
    
    let a= prompt("Please enter the date");
    let b = new Date();
    let c = new Date(a);
    let diff = c.getTime()-b.getTime();
    let myno= diff / (1000*60*60*24);
    
    document.getElementById("dasy").innerHTML=Math.floor(myno) + " Days has been stay"
}
