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
	if(obj == true){
		return "object has no properties";
	}else if (obj ==false){
		return "No object passed";
	}else if (obj === null){
		return "null argument"
	}else {
		for (let key in obj){
			str.push(key);
		}
		str.sort();
		return str.join(".");
	}

}

