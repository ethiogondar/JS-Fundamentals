const { argv } = require("node:process");

const x = parseInt(argv[2]);
if(Number.isNaN(x)) console.log("Missing size");
let i = 0;

for (let i = 0; i < x; i++) {
   console.log("X".repeat(x)) 
}