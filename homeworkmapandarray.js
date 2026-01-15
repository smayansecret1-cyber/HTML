let numbers = [5, 2, 8, 1, 4];
let mappedArray = numbers.map(num => num * 2);
let ascending = [...mappedArray].sort((a, b) => a - b);
let descending = [...mappedArray].sort((a, b) => b - a);
console.log("Mapped:", mappedArray);
console.log("Ascending:", ascending);
console.log("Descending:", descending);
