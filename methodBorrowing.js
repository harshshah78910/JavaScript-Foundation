// Method borrowing example

var john ={
 firstName : 'Harsh',
    calculateAge:function()
    {
    console.log(this);  // John Object when John Object will invoke it anf=
    this.age=2019-1994;
}
}

john.calculateAge();

var mike = {
    firstName : 'Mike'
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();