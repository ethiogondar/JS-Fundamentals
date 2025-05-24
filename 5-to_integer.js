const { argv} = require("node:process")
const myNum = parseInt(argv[2])
//console.log(typeof myNum === "number")
if(!Number.isNaN(myNum)) {
    console.log(`My number: ${myNum}`)
}else {
    console.log("Not a number")
}