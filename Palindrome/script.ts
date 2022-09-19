var con:string="";
var Hello = ( a:string):string =>{
    let b:string=a;
    for(let i:number=b.length-1;i>=0;i--){
        con = con + b[i];
        
        
        }
        if(a==con){
            return ( "The string is palindrome");
        }
        else {
            return  ("The string is not palindrome")
        
    }


}
Hello("202")