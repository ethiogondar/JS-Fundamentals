const { argv } = require("node:process");
const args = argv.slice(2)
const a = parseInt(args[0]);

const recursFun = (num) => {
    if(Number.isNaN(a)) return 1;
    if (num == 1) return 1
    return num * recursFun(num -1);
}

console.log(recursFun(a))