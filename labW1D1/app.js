/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
	if(n===0){
		return 1;
	}else return x * pow(x ,n-1);
}

function add2(n1, n2) {
	return n1 + n2;
}

function add(...args) {
	let count = arguments.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += arguments[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	for(let i = 0; i < grades.length;i++){
	if(grades[i] >= 90){
		return "A";
	}
	else if(grades[i]>=80){
			return "B";
	}else if(grades[i] >= 70){
		return "C";
	}else if(grades[i]>=60){
		return "D";
	}else {
		return "NC";
		}
	}	
}
	
module.exports = {pow,add,add2,computeGrade};
