var hot = false
var temp = 70

if(temp > 80){
    hot = true
    console.log("hot outside")
}else if(temp <=80 && temp >= 50){
    console.log("average temp outside");
}else if(temp <=50 && temp >= 32){
    console.log("it's cold outside");
}else{
    console.log("it's very cold outside")
}

console.log(hot);