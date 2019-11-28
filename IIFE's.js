// immediately Returnable function

( function(){
    console.log('This is IIFE\'s');
})();

(function(firstName){
  console.log('This is IFFE with Parameter Example ' +firstName)
})('Harsh Shah');


function defaultValueExample(firstName='Harsh',lastName='Shah')
{
   console.log(firstName,lastName);
}



defaultValueExample();
