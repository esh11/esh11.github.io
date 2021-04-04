// question 1
let sumResult = [1,50,40,3,10].reduce((sum,current) => current > 20 ? sum + current:sum,0);
console.log(sumResult);

//question 2
let string = ["boxes","contains","employee","objects","greater","as"];
let str = string.filter(current => current.length >=5 && current.includes("a"));
console.log(str);

//Qustion 3
function Employee(name,lastName,birthDate){
    this.firstName=name,
    this.lastName=lastName,
    this.birthdate= birthDate,
    this.getFullName=function(){
        return this.firstName + " " + this.lastName;
    },
    this.getAge=function(){
        let date = new Date().getFullYear();
        let date2 = new Date(this.birthdate).getFullYear();
        return date - date2;
    }
}

let arrayEmployee = [];
arrayEmployee.push (new Employee("eshe" ,"fen","1986-7-26"));
arrayEmployee.push(new Employee("abebe" ,"balcha","1990-2-26"));
arrayEmployee.push (new Employee("chala" ,"ayele","2001-9-19"));
arrayEmployee.push(new Employee("kebede" ,"belay","2006-8-17"));
arrayEmployee.push(new Employee("jack" ,"karl","1974-8-10"));
arrayEmployee.push(new Employee("amenda" ,"jonessen","2002-11-06"));

// Employee age is greater than 20;
let result = arrayEmployee.filter(value => value.getAge()> 20);
// born after 2000 with full name 
let result2 = arrayEmployee.filter(value => value.getAge() < 21 ).map(item => item.getFullName());
console.log(result2);
