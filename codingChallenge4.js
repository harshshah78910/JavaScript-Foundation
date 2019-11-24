// Coding Challenge 4;



function calBmi(weight,height)
{
    return weight/(height*height);
}

var John = {
    firstName:'John',
    weight:80,
    height:4,
}


var Smith = {
    firstName:'Smith',
    weight:60,
    height:1.9
}


John.bmi=calBmi(John.weight,John.height);
Smith.bmi=calBmi(Smith.weight,Smith.height);

console.log(John,Smith);





