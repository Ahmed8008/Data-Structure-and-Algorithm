function sort(a:number[])
{
    let min=0;
    let sortedArray:number[]=[];
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<a.length;j++)
        {
            if(a[i] < a[j] )
            {
                min=a[i]
                sortedArray.splice(min,i)             
            }
        }
    }
    return sortedArray;
}

let x= sort([10,9,8,7,4,6,19])
console.log(x)
