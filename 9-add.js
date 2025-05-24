const { argv } = require("node:process");
const args = argv.slice(2)
const a = parseInt(args[0]);
const b = parseInt(args[1]);

const add = (a, b) => {
    return a + b
}

console.log(add(a, b))