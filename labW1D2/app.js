"use strict";
function load() {
	let id = document.getElementById("result");
	id.innerHTML = "Lab W1D2";
}
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */


// See tests.js for behavior
function nameString(obj) {
	
	let str = [];
	
	 if (obj === undefined){
		return "No object passed";
	}else if (obj === null){
		return "null argument"
	}else {
		for (let key in obj){
			str.push(key);
		}if(str.length==0){
			return "object has no properties";
		}else {
		str.sort();
		return str.join(".");}
	}

}

console.log(nameString({}));
console.log(nameString());
console.log(nameString(null))