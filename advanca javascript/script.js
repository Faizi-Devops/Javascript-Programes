//try catch

try {
    consol("hello");
    
} catch (error) {
    console.log(error);
    
}





//Destructuring


let user = {
    name:"Faizan Ali",
    age:25,
    gender:"Male"
}

console.log(user.name);

let {name,age,gender}= user

console.log(name);



//spread operator


let kuch = {
    name:"Faizan Ali",
    roll:49546
}
let much = {
    country:"Faisal",
    moible:"03021694701"
}

let finalobj = {
    ...kuch,
    ...much
}

console.log(finalobj)


let a = [1,2,3,4,5,6,7,8,9];
let b = [10,11,12,13];

let finaal = [...a,...b];

console.log(finaal)


setInterval(() => {
    sabr()
    
}, 1000);

let sabr = () =>{
    // console.log("hello");

}
let mab = () =>{
    console.log("Hello");
}
setTimeout(mab,1000)

let ho = () =>{
    // console.log("hello")
}

setInterval(ho,1000)











