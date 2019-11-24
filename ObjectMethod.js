// This method example for Object



var person = {
    
    firstname:'Harsh',
    lastName:'Shah',
    address:'Pune',
    birthYear:1994,
    job:'Software Developer',
    family:['Jinesh','Poonam','Mom','Dad'],
    calCulateAge : function()
    {
        this.age=2019-this.birthYear;
        return 2019-this.birthYear;
    },
    saveTheDate : function(Signidate)
    {
      this.sigDate = Signidate;
}
  
};


console.log(person.calCulateAge());
console.log(person.saveTheDate('24-Mar-1994'));


