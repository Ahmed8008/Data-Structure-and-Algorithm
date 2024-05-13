class Nodee<T>
{
    public next : Nodee<T> | null = null;
     constructor(public data : T      
      ){}
}

class Linklist<T>
{
  public head :Nodee<T> | null=null


  public  toString(): string {
    let result = '';
    let current = this.head;

    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += "null";
    return result;
  }

  public prepend(data)
  {
    let newnode=new Nodee<T>(data)
    newnode.next=this.head
    this.head=newnode
  }




  public insert(data,index){
    let new_node :Nodee<T>= new Nodee<T>(data);
    let count = 0;
    let current =this.head;
    let previous;
    while(current !== null){
      
      if(index==0){
        this.head = new_node;
        new_node.next = current;
        break
      }
      else if(count == index){
        
        new_node.next = current;
        previous.next = new_node;
        break
      
      }
      count +=1;
      previous = current;
      current = current.next;
    }  
  }

  public remove(index)
  {

  let count=0;
  let current =this.head;
  let previous
  let notfound=true;
  while(current!=null)
  {

      if(index==0)

      {
        this.head=current.next
        notfound=false
        break

      }


    else if(count==index)
      {
      
        previous.next=current.next
        notfound=false
        
      }

      count +=1;
      previous = current;
      current = current.next;


  }
      
  if(notfound==true)
  {
  console.log("Number is not found in the link list")
  }


  }


  public size():number{
    let current = this.head
        let counnt:number =0;
        while(current !== null){
          counnt +=1;
          current = current.next;
        }
        return counnt
      }



}


function split(Linklistobj,data)
{


    let midpoint=Math.floor(sizee/2)

     let Linklistobj1=new Linklist<number>()
     //Linklistobj1.head=a
     let Linklistobj2=new Linklist<number>()
    let current =this.head;
    let previous
    let count=0
    
    for(let i=0;i<midpoint;i++)
    {
          if(count==midpoint)
          {
            previous.next=current.next
          }
          
          count=count+1

          previous=current;

          current=current.next;

    }

    



    console.log(Linklistobj1.toString())


}



let a=new Nodee<number>(10)
let b=new Nodee<number>(9)
let c=new Nodee<number>(8)
let d=new Nodee<number>(7)
let e=new Nodee<number>(6)
a.next=b
b.next=c
c.next=d
d.next=e

const Linklistobj=new Linklist<number>()

Linklistobj.head=a
let sizee=Linklistobj.size()
c//onsole.log(sizee)

split(Linklistobj)

console.log(Linklistobj.toString())