let c:string="";
var Hello = (a:string):string =>{
    let b:string=a;
    
    
    for(let i:number=b.length-1;i>=0;i--){
        
        c= c+a[i];
        

    }
    return c


}
Hello("I love the Pakitan")