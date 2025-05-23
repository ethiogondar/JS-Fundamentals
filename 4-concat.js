const args = process.argv.slice(2);
if (args[0] !== undefined && args[1] !== undefined) {
    console.log(${args[0]} ${String.fromCharCode(105) + String.fromCharCode(115)} ${args[1]});
} else {
    console.log("Insufficient arguments");
}