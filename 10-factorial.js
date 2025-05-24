const { argv } = require("node:process");
const args = argv.slice(2)
const a = parseInt(args[0]);

const factorial = (num) => {
    if(Number.isNaN(num)) return 1;
    
    if (num == 1) return 1
    return num * factorial(num -1);
}

console.log(factorial(a))