const { argv } = require("node:process");

const x = parseInt(argv[2]);
if(Number.isNaN(x)) return;
let i = 0;

while(i < x) {
    i++;
    console.log("C is fun");
}