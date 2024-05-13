class Nodee<T>
{
    public next : Nodee<T> | null = null;
    public prev : Nodee<T> | null = null;
     constructor(public data : T      
      ){}
}


let a=new Nodee<number>(10)
let b=new Nodee<number>(11)
a.next=b
//let b=new Nodee<number>(11)
//console.log(a)
//console.log(b)


class Linkedlist<T>
{
    public head : Nodee<T> |null=null;
    public tail : Nodee<T> |null=null;
    public size():number{
    let current = this.head
        let counnt:number =0;
        while(current !== null){
          counnt +=1;
          current = current.next;
        }
        return counnt
      }

      
      public prepend(data)
    {
       let newnode = new Nodee<T>(data)
         newnode.next=this.head
         this.head=newnode        
        
    }

    public append(data)
    {
      let newnode1=new Nodee<T>(data)
      newnode1.next=this.tail
      this.tail=newnode1
    }


    public insert(data,index){
      let new_node :Nodee<T>= new Nodee<T>(data);
      let count = 0;
      let current =this.head;
      let previous;
      while(current !== null){
        
        if(index==0){
          count-index
          current.next=this.head
          break
        }
        else if(count == index){
          
          index-count
          new_node.next = current;
          previous.next = new_node;
          break
        }
        count +=1;
        previous = current;
        current = current.next;
      }  
    }
  /*
  public search(data){
    let array:Nodee<T>[]=[]
    let notinthelist:boolean = true;
    let current=this.head
    while(current!=null)  {
      if(current.data==data)
      {     
          array.push(current);
          notinthelist = false;         
      }
      current=current.next
      }
     if(notinthelist==true){

      return "Not present in the linklist"

     }

     else
     {
      return array
     }


    }
    */

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


let Linkedlistobj=new Linkedlist<number>()


Linkedlistobj.size
Linkedlistobj.head=a
//console.log(Linkedlistobj)
Linkedlistobj.insert(9,0)
Linkedlistobj.insert(20,1)
Linkedlistobj.insert(17,2)

//Linkedlistobj.remove(1)
//console.log(Linkedlistobj)
//console.log(Linkedlistobj.search(69))
//Linkedlistobj.remove(1)
console.log(Linkedlistobj.toString())
//console.log(maxsum)



  