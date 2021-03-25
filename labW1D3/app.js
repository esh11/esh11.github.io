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
	this.numProperties = function(){
		let count = 0;
		for(let pro in person){
			count++;
		}
		return count;
	};
	this.cntShortName= function(){
		let count = 0;
		for (let key in person){
			if(key.length < 3){
				count++;
			}
		}
		return count;
	};
	this.cntReferences = function(){
		let count = 0;
		for (let key in person){
			if(type0f(person.key)=== "Object"){
				count++;
			}
		}
		
		return count;
	};
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