function delay(ms) {

return new Promise(resolve => setTimeout(resolve, ms));

}

async function delayedPrint() {

await delay(5000); // Pause here for 5 seconds

for (let i = 1; i <= 10; i++) {

console.log(i);

}

console.log("5 sec over");

}

console.log("Timer set for 5 sec");

delayedPrint();