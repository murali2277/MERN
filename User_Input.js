const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the name:", name => {
    console.log("Your name: "+name);
    readline.close();
});