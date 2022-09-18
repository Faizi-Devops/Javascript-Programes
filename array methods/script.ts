// Arrays method
// pop method

var friuts:string[]=["Apple","Mango","Banana"];
friuts.pop();
console.log(friuts);

// push method

var friuts:string[]=["Apple","Mango","Banana"];
friuts.push("Pineapple");
console.log(friuts);

//to string method
var friuts:string[]=["Apple","Maango","Banana"];
var newarray=friuts.toString();
console.log(newarray);


//join method

var friuts:string []=["Apple","Mango","Banana"];
var newjoion = friuts.join("and");
console.log(newjoion)


//splice method
var friuts:string[]=["Apple","Mango","Baanana"];
friuts.splice(1,0,"kuch","Hello");
console.log(friuts);


//sort method
var friuts:string[]=["Mango","Apple","Pineapple","Banana"];
friuts.sort();
console.log(friuts);


//shif method

var friuts:string[]=["Apple","Mango","Banana"];
friuts.shift();
console.log(friuts);

//unshif method

var friuts:string[]=["Apple","Mango","Banana"];
friuts.unshift("hello");
console.log(friuts);


//reverse method 
var friuts:string[]=["Apple","Mango","Banana"];
friuts.reverse();
console.log(friuts);

//concat method
var friuts:string[]=["Apple","Mango","Banana"];
var kuch:string[]=["Honda","United"];
var much:string[] = friuts.concat(kuch);
console.log(much);


//filter method
var num:number[]=[10,20,40,60,40];
var que:number[]=num.filter((value)=>{
    if(value>10)
    {
        return value;
    }
    

})
console.log(que);