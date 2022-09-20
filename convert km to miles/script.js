let convert = () =>{
    let a= document.getElementById("demo").value;
    let b = 0.621371;
    let convert = a*b;
    let mile=convert.toFixed();
    document.getElementById("demo1").innerHTML=mile + "Miles";

}