// Dizideki en  büyük ve en küçük sayıları bulma

const ar=[5,15,125,45,14,515]
let big=0;


for(let x of ar){
    if(x>big){
        big=x;
    }
    
}
console.log(big)