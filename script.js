const name1 = prompt("Type Name 1");
const name2 = prompt("Type Name 2");
const name3 = prompt("Type Name 3");

let result;

if (name1.length === name2.length &&  name1.length === name3.length) {
    result = `All three names, ${name1}, ${name2}, ${name3}, are the same length.`;
} else if (name1.length === name2.length && name1.length > name3.length) {
    result = `${name1} & ${name2} tie for the longest name.`;
} else if (name1.length < name2.length && name2.length === name3.length) {
    result = `${name2} & ${name3} tie for the longest name.`;
} else if (name2.length < name1.length && name1.length === name3.length) {
    result = `${name1} & ${name3} tie for the longest name.`;
} else if (name1.length > name2.length && name1.length > name3.length) {
    result = `${name1} has the longest name.`;
} else if (name2.length > name1.length && name2.length > name3.length) {
    result = `${name2} has the longest name.`;
} else if (name3.length > name1.length && name3.length > name2.length) {
    result = `${name3} has the longest name.`;
} 

console.log(result);