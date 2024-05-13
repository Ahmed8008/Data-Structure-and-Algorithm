class Nodee<T>
{
    public next : Nodee<T> | null = null;
     constructor(public data : T      
      ){}
}

class Linkedlist<T>
{
    public head : Nodee<T> |null=null;
    public size():number{
    let current = this.head
        let counnt:number =0;
        while(current !== null){
          counnt +=1;
          current = current.next;
        }
        return counnt
      }

      public remove(index)
    {

    let count=0;
    let current =this.head;
    let previous
    while(current!=null)
    {

        

       if(count==index)
        {
          previous.next=current.next
        }

        count +=1;
        previous = current;
        current = current.next;


    }
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

      
}









let a=new Nodee<number>(199)
let b=new Nodee<number>(20)
let c=new Nodee<number>(7)
let d=new Nodee<number>(1)
let e=new Nodee<number>(11)
a.next=b
b.next=c
c.next=d
d.next=e





const Linkedlistobj=new Linkedlist<number>()
Linkedlistobj.head=a
let sizee=Linkedlistobj.size()
let midpoint = Math.ceil(Linkedlistobj.size()/2);


function split(List)
{
    let midpoint = Math.floor(List.size()/2);
    const Linkedlistobj1=new Linkedlist<number>()
    const Linkedlistobj2=new Linkedlist<number>()
  let current =List.head;
    let temp = new Nodee<number>(current.data);
    Linkedlistobj1.head = temp
    let i=0
    while( i < midpoint)
    {
        
        Linkedlistobj1.insert(current.data,i);
        current=current.next;
        i++           
    }
    Linkedlistobj1.remove(i)
    

    let temp1=new Nodee<number>(current.data)
    Linkedlistobj2.head=temp1
    
     i=0
    while( i <= midpoint && current!=null)
    {
        
        Linkedlistobj2.insert(current.data,i);
        current=current.next;
        i++           
    }
    Linkedlistobj2.remove(i)

    return [Linkedlistobj1,Linkedlistobj2]
   
}



function mergesortLinklist(List)
{
  let sorttedlinklist=new Linkedlist<number>();
  let left=new Linkedlist<number>();
  let right=new Linkedlist<number>();
  if(List.size() <=1)
  {
    return List;
  }

  let [firsthalf,secondhalf]=split(List);
  left=mergesortLinklist(firsthalf);
  right=mergesortLinklist(secondhalf);
  sorttedlinklist=merge(left,right);
  return sorttedlinklist;
}

function merge(left,right)
{
    let linklist1=new Linkedlist<number>();
    let i:number=0;
    let currentleft=left.head;
    let currentright=right.head;
   
    let templeft = new Nodee<number>(currentleft.data);
    let tempright = new Nodee<number>(currentright.data);
    linklist1.head=templeft
    linklist1.head=tempright

    
    while (i < left.size() || i < right.size() && currentleft!=null && currentright!=null )
    {

      
      if(currentleft.data < currentright.data  )
      {
        linklist1.insert(currentleft.data,i)
        currentleft=currentleft.next;
        i++
      
      }

      
    
      else
      {
        linklist1.insert(currentright.data,i)
        currentright=currentright.next;
        i++
        
      }
      
      
    }
      
    
   
    while(currentleft!=null)
    {
      linklist1.insert(currentleft.data,i);
      currentleft=currentleft.next;
      i++;
    }
    
  
    while(currentright!=null)
    {
      linklist1.insert(currentright.data,i);
      currentright=currentright.next;
      i++;
    }

   
    linklist1.remove(i)
   
   
    return linklist1
}



let left=new Linkedlist <number>()
let right=new Linkedlist<number>()

let g=new Nodee<number>(5)
let h=new Nodee<number>(4)
let hh=new Nodee<number>(1)
 g.next=h
h.next=hh 
 left.head=g

 

 let k=new Nodee<number>(3)
 let j=new Nodee<number>(2)
 let ppo=new Nodee<number>(1)
 k.next=j
j.next=ppo
 right.head=k


let x=mergesortLinklist(Linkedlistobj)
 console.log(x.toString())

//let y = merge()



