function load() {
	let id = document.getElementById("result");
	id.innerHTML = "Lab W1D3";
}
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {
	
		let count = 0;
		for(let pro in this){
			count++;
		}
		
		let count1 = 0;
		for (let key in this){
			if(key.length < 3){
				count1++;
			}
			
		}
		let count2 = 0;
		for (let key in this){
			if(typeof(this[key]) === "object"){
				count2++;
			}
		}
		
		
	return {numProperties:count,cntShortName:count1,cntReference:count2}
}

 
 

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = function() {
		let sum = 0;
		for (let score of grades){
			sum += score;
		}
		return sum/grades.length;
			
	}
}