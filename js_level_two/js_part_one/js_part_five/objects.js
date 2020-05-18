// structure of an object in js
var carInfo = {make:"Toyota", year:1990, model:"Camry"};
// to call part of the object use:

// carInfo["year"]
// it returns "Toyota"

// for interate in Object
for (key in carInfo){
    console.log(key)
}
// shows all the keys in object

for (key in carInfo){
    console.log(key)
    console.log(carInfo[key])
}
// shows keys and values

// *********** objects with functions ***********
var myObj = {
    name:"Filipe",
    greet:function(){
        console.log("Hello "+ this.name);
    }
}
