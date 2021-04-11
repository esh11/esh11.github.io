let student ={
    firstName:"",
    lastName : "",
    grades : [],

    inputNewGrade: function (newGrade){
        this.grades.push(newGrade)
    },
    computeAverageGrade:function (){
            return this.grades.reduce((accumulator, current, index,array) => accumulator + current / array.length, 0);
            }

}

let student1 = Object.create(student);
student1.firstName = "Jone";
student1.lastName = "Kale"
student1.grades = [98,94,96];


let student2 = Object.create(student);
student2.firstName = "Ana";
student2.lastName = "Jl"
student2.grades = [90,94,100];

let student3 = Object.create(student);
student3.firstName = "Ale";
student3.lastName = "Matt"
student3.grades = [91,94,92];

let student4 = Object.create(student);
student4.firstName = "Awol";
student4.lastName = "Kebede"
student4.grades = [97,95,92];

let stu = [student1,student2,student3,student4]

function studentArrayAverageGrade(all) {
    return all.reduce((accumulator, current, index, array) => accumulator + current.computeAverageGrade() / array.length, 0);}
    console.log(studentArrayAverageGrade(stu));


//Question 2
function studentCons (firstName,lastName,grades){
    this.firstName= firstName
    this.lastName=lastName
    this.grades = grades,

    function inputNewGrade(newGrade){
        this.grades.push(newGrade)
    },
    this.computeAverageGrade = function(){
       
        return this.grades.reduce((accumulator, current, index,array) => accumulator + current / array.length, 0);
    }
    this.sort = function (){
        return this.sort();
    }

}

let stu1 = new studentCons("Aman","Abebe",[99,98,94]);
let stu2 = new studentCons("Aman","Abebe",[100,96,94]);
let stu3 = new studentCons("Aman","Abebe",[95,98,92]);


let studentArray = [stu1,stu2,stu3]

console.log(studentArrayAverageGrade(studentArray))