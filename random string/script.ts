let newadd:string=""
let Random = (a:number):string =>{
    let b:string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    let c:number=b.length;
    for(let i:number=0;i<a;i++){
        newadd = newadd +b.charAt(Math.floor(Math.random()*c))
        
    }
    return newadd;

}
Random(10)