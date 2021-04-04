function fibo(n) {
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
	  let c = a + b;
	  a = b;
	  b = c;
	}
	return b;
  }

  //console.log(fib(7))

  function fib(n){
      if(n<=1){
          return n
      }else return fib(n-1) + fib(n-2)
  }

  console.log(fib(7))



function factorial(num){
    if(num == 1){
          return 1;
} else { return num * factorial(num - 1) 
}

}


function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {    
    let shooter = function() {
    return i;
    };
    shooters.push(shooter());
    i++;
    }
    return shooters;
    }
    let army = makeArmy();
    console.log(army[8]);
    function makeArmy() {
        let shooters = [];
        let i = 0;
        while (i < 10) {    
        let shooter = function() {
        return i;
        };
        shooters.push(shooter());
        i++;
        }
        return shooters;
        }
        let army = makeArmy();
        console.log(army[8]);
 
    
    
