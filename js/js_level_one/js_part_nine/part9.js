let firstName = prompt("what is your first name?")
let lastName = prompt("what is your last name?")
let age = prompt("how old are you?")
let tall = prompt("how tall are you in cm?")
let pet = prompt("what's your pet name?")
alert("Thanks!!");


let nameCond = null
if (firstName[0] === lastName[0]){
    nameCond = true;
  }else {
    nameCond = false;
  }

let ageCond = null
if (age > 20 && age < 30) {
    ageCond = true
}else{
    ageCond = false
}

let tallCond = null
if (tall >= 170) {
    tallCond = true
}else{
    tallCond = false
}

let petCond = null
if (pet[pet.length-1]==="y") {
    petCond=true
}else{
    petCond = false
}

if (nameCond && ageCond && tallCond && petCond) {
    console.log("you are spy");
    
}else{
    console.log("get out of here");
    
}
