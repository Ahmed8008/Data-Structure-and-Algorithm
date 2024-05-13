class Nodee<T>
{
    public next : Nodee<T> | null = null;
     constructor(public data : T      
      ){}
}


//let b=new Nodee<number>(11)
//console.log(a)
//console.log(b)

class taha<T>
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

      
      public prepend(data)
    {
       let newnode = new Nodee<T>(data)
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

public max_productanddata()
{
    let current = this.head
    
    let array:number[]=[]
        let counnt:number =0;
        let a
        let b
        let c=0
        while(current !== null){
          
          a=current.data
         b = counnt * a
         array.push(b)
         counnt +=1;

          
          current = current.next;
    
          
        }
             
        console.log(array)
        for(let i=0;i<array.length;i++)
        {
          if(c < array[i])
          {
            c=array[i]
          }
        }

        return c
      }


      public min_num()
      {
        let current=this.head;
        let count=0;
        let a=Infinity
        let b
        let minnumber
        while(current!==null)
        {
          b=current.data
          if( a > b )
          {
            a=b
          }
          count=count+1
          current=current.next
        }

        
        return a
      }
    
  }
    
  
  function countchar()
  {
    let current=tahaobj.size();
    let current1=Linkedlistobj.size();
    

    if(current > current1)
     {
      return tahaobj
     }

     else
     {
      return Linkedlistobj
     }


  }
  


  let a=new Nodee<string>("A")
  let b=new Nodee<string>("H")
  let c=new Nodee<string>("M")
  let d=new Nodee<string>("E")
  let e=new Nodee<string>("D")
  a.next=b
  b.next=c
  c.next=d
  d.next=e  

  let f=new Nodee<string>("T")
  let g=new Nodee<string>("A")
  let h=new Nodee<string>("H")
  let I=new Nodee<string>("A")
f.next=g;
g.next=h;
h.next=I

const Linkedlistobj=new Linkedlist<string>()
Linkedlistobj.head=a

const tahaobj=new Linkedlist<string>()
tahaobj.head=f

//console.log(a);

//console.log(Linkedlistobj)
//Linkedlistobj.prepend(9)
//Linkedlistobj.prepend(69)
//Linkedlistobj.insert("m",2)
//Linkedlistobj.insert("e",3)
//Linkedlistobj.insert("d",4)
//console.log(Linkedlistobj)
//console.log(Linkedlistobj.search(69))
//Linkedlistobj.remove(1)
//Linkedlistobj.remove(1)
//Linkedlistobj.remove(0)
//Linkedlistobj.remove(0)
//Linkedlistobj.remove(1)
//Linkedlistobj.remove(2)
console.log(Linkedlistobj.toString())
console.log(tahaobj.toString())
console.log(countchar().toString())
//console.log(Linkedlistobj.min_num())
//console.log(Linkedlistobj.max_productanddata())
//console.log(f)

//console.log(maxsum)



  