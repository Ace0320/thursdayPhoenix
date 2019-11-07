const readline = require( "readline-sync" )
let name = readline.question("What is your name?")
let height = readline.questionFloat("How tall are you?")
console.log("Pleased to meet ", name)

if(height > 7){
    console.log("basketball")
}else{
    console.log("rugby")
}