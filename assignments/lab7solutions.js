//1.
function sum(n){
    if(n ==1){
        return 1;
    }else return n + sum(n-1);

}
console.log(sum(5));

//2.

let linkedlist ={
    head : null,
  node: function (data){
        this.data = data,
        this.next = null
    },

add : function (value){
    let node = new node(value),
    currentnode = this.head;
    if(!currentnode){
        this.head = node;
        return node;
    }
    while(currentnode.next){
        currentnode = currentnode.next;
    }
    currentnode.next = node;
},
print: function print (linkedlist){
    console.log((linkedlist.node.data));
    if(linkedlist.next){
        print(linkedlist.node.next);
    }

}
}











