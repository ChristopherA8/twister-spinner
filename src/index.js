const chalk = require("chalk");

const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", (data) => {
      const byteArray = [...data];
      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log("^C");
        process.exit(1);
      }
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

let parts = ["Left Foot", "Right Foot", "Left Hand", "Right Hand"];
let colors = [
  `${chalk.red("red")}`,
  `${chalk.green("green")}`,
  `${chalk.yellow("yellow")}`,
  `${chalk.cyan("blue")}`,
];

(async () => {
  while (true) {
    part = parts[Math.floor(Math.random() * parts.length)];
    color = colors[Math.floor(Math.random() * colors.length)];

    console.log(`
     _____          _     _            
    |_   _|_      _(_)___| |_ ___ _ __ 
      | | \\ \\ /\\ / / / __| __/ _ \ '__|
      | |  \\ V  V /| \\__ \\ ||  __/ |   
      |_|   \\\_/\\\_/ |_|___/\\__\\___|_|   
                                       
    `);
    console.log(`\t${chalk.bold.white(part)} on ${chalk.bold(color)}`);
    await keypress();
    console.clear();
  }
})().then(process.exit);
