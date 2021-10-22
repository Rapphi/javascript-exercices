const keys = ["name", "species", "age", "gender", "color"];
const values = ["Skitty", "cat", 9, "female", "tabby"];

/*const mergeObj = Object.fromEntries();
document.getElementById("run").onclick;
console.log(mergeObj);
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj);*/
var result = {};
keys.forEach((key, i) => result[key] = values[i]);
var obj = Object.fromEntries(result);
console.log(obj);
