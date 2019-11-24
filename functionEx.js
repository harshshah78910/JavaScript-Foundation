// this is function example

var year=2019;
var retirementAge = 65;

function calculateAge(birthYear)
{
    return year-birthYear;
}

function calculateRetirementAge(birthYear,firstname)
{
    var age = calculateAge(birthYear);
    console.log(retirementAge - age);
    return retirementAge - age;
}



console.log(calculateRetirementAge(1994,'Harsh'));


// function expression where we don't define the function name
var whatYouDo = function(job,firstName){
    
    switch(job)
           {
               case 'Teacher' :
                   return firstName + ' is a Teacher ';
               case 'designer' :
                   return firstName + ' is a designer ';
               default:
                   return firstName + ' does something else';
           }
}

console.log(whatYouDo('Teacher','Jane'));
console.log(whatYouDo('Cop','Mathew'));
