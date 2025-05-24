/*const arr = ["C is fun", "Python is coo", "JavaScript is amazing"];
for(let item of arr) {
    console.log(item);
}*/
const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];
let output = "";

for (let i = 0; i < lines.length; i++) {
  output += lines[i];
  if (i < lines.length - 1) {
    output += "\n";
  }
}

console.log(output);