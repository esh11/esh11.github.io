// 1
function printNumbers(from,  to){
   function print(){
       console.log(from);
       if(from < to){
           setTimeout(print,1000);
       }
       from++;
   }
   setTimeout(print,1000)
    
}
printNumbers(6,12)

// 2
//the scheduled function run after the loop
// i = 99999999