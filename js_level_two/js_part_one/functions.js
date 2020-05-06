function hello() {
    console.log("hello function");
}

function helloYou(name) {
    console.log("hello "+name);   
}

// can concatenate strigns too
function addNum(n1, n2) {
    console.log(n1+n2);
}

// default name
function helloSomeone(name="Filipe") {
    console.log("hello "+name);
}

function formal(name="Filipe", title="Sir") {
    console.log(title +" "+name);   
}

function timesFive(numInput){
    // var is a local scope
    var result = numInput * 5
    return result
}

// global scope

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v);
    stuff = "Stuff inside function"
    console.log(stuff);
}

fun()
console.log(stuff);
