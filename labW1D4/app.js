function load() {
	let id = document.getElementById("result");
	id.innerHTML = "Lab W1D4";
}
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	let str = "";
	if(string === undefined){
		return "missing argument";
	}else if(typeof string !== "string"){
		return "argument not string";
	}else if (string === ""){
		return "";

	}else{
		
		let stringArray = string.split("");
		for(let i = 1;i < stringArray.length; i+=2){
			str = str + stringArray[i];
			
	} 
	return str;
	
}
	
}
// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array){
	return array.reduce(((sum, current) => current > 0 ? sum + current : sum),0);
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
	for(let i = 0;i<array.length;i++){		
		if(array[i]<0){
			array[i]= Math.abs(array[i]);
		}		
	}
	return array;	
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let result =[];
	for(let i =0;i<array.length;i++){
		if(array[i]!==array[i+1]){
			result.push(array[i]);
		}
	}
	for(let k = 0;k< result.length;k++){
		if(result[k] === 0){
			result[k] = "*";
		}
	}
	
return result;
	
}


