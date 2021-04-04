let vals = [1,2,3,4,5];
let [initial] = vals;

let min = vals.reduce((total,next) => Math.min(total,next), initial);
let max = vals.reduce((total,next) => Math.max(total,next), initial);

function sumPositiveNumbers(array){
	let total =  array.reduce(((sum, current) => current > 0 ? sum + current : sum),0);
	console.log(total)
}

//console.log(sumPositiveNumbers([1,2,3,-4,5]))

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let times10 = [];
//  numbers.forEach((num) =>times10.push(num*10));
// console.log(times10);

function countSub(str, tar){
	let start = str.substring(str.indexOf(tar,0));
	if( !str.includes(tar)){
			return 0;
	}else{
		return 1 + countSub(start.substring(tar.length),tar);
	}
	
	}
	 let txt = "abcdefabcghiabcjkldefbhbhdef";
	 let tar = "def";
	console.log(countSub(txt, tar));

	let uniqueArray = ['a', 1, 'a', 2, '1', 1,1,,4,3,3,3,3].filter(function(value, index, self) { 
		return self.indexOf(value) === index;
	});

//	console.log(uniqueArray);
	function startsWithLetterA(str) {
		if(str && str[0].toLowerCase() == 'a') {
		return true }
		return false; }
		let str = 'Since Boolean is a native javascript function/constructor that takes [one optional parameter] and the filter method also takes a function and passes it the current array item as a parameter, you could read it like the following';
		let strArray = str.split(" ");
		let wordsStartsWithA = strArray.filter(startsWithLetterA);

		function deepReverse(arr) { 
			arr.reverse().forEach(elem => {
			if(Array.isArray(elem)) { 
				deepReverse(elem);
			} 
		});
			return arr; 
		}

		let now = new Date();
		let birthDate = "2020-6-23";
		const date = new Date();
		const date2 = new Date(birthDate).getFullYear();
		console.log(date2);
		function person(firstName, lastName, age) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
		  }

		  let person1 =  person();
		  console.log(person1);
		 // let [firstName, surname] = "Baba Louie".split("");
		  let {firstName, surname} = "Ilya Kantor".split('');
		  console.log(firstName);
		  let users = [
			{ id: 1, name: "John" },
			{ id: 2, name: "Pete" },
			{ id: 3, name: "Mary" }
			];
			
			function f(item,index ,array){
				console.log(item.name);
				return item.name ==="Pete";
			
			}
			let result =users.find(f);
			console.log(result);

const array123 = [1,2,3];
const newArray = array123.map(value => value*value);
console.log(newArray);
const product = array123.reduce((prod,current) =>prod*current);
console.log(product)

// const students = [
// 	{ name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
// 	{ name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
// 	{ name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
// 	{ name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
// 	{ name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
//   ];
//   const stud = students.filter(values =>values.courses.include("cs303"));
// const total = stud.reduce((total ,value )=> total +values.grade) ;
// let average = total/stud.length;
// console.log(average);
  
function printCharsReverse(str){
	
	if(str.length == 0){
		return "";
	
	}else 
	return printCharsReverse(str.substring(1)) + str.charAt(0)
}
console.log(printCharsReverse("abc"));

function reverseString(str) {
	return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
//  console.log(reverseString("abc"));

  function fib(n) {
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
	  let c = a + b;
	  a = b;
	  b = c;
	}
	return b;
  }

  console.log(fib(7))