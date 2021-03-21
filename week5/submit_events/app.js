var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var flights = document.getElementById("flights");
var kosher = document.getElementById("kosher");
var vegitarian = document.getElementById("vegitarian");
var lactoseFree = document.getElementById("lactoseFree");
var submit = document.getElementById("submit");

submit.onclick = myFunction;

function myFunction() {

var gender;
var food = "";
if(male.checked == true){
    gender = "male";
}

if(female.checked == true){
    gender = "female";
}
if(kosher.checked == true){
    food += "kosher ";
}

if(lactoseFree.checked == true){
    food += "lactoseFree ";
}

if(vegitarian.checked == true){
    food += "vegitarian ";
}

 alert(
    firstName.value + '\n' +
    lastName.value + '\n' +
    age.value + '\n' +
    gender + '\n' +
    flights.value + '\n' +    
    food  );
 }





