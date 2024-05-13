var array=[4,5,2,5,1]
let maxproduct
let newarray:number[]=[]
let a=0
for(let i=0;i<array.length;i++)
{
 
maxproduct=array[i]*i
newarray.push(maxproduct)

if(a < newarray[i])

{
  a=newarray[i]
}

}

console.log(newarray)
console.log(a)