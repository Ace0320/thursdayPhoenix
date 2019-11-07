const readline = require( "readline-sync" )
let name = readline.question("What is your name?")
let weight = readline.questionFloat("What is your weight?")
console.log("Ah, I see you weigh", weight,"pounds")