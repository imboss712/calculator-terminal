const chalk = require("chalk");

// console.log(process.argv);

const inputs = () => {
  let inputs = [...process.argv];
  inputs.splice(0, 3);
  return console.log(
    chalk.whiteBright.bgRedBright.bold(`\n Inputs : ${inputs} `)
  );
};

if (!process.argv[2]) {
  console.log(
    chalk.red.inverse.bold(
      "\n Please provide an operation with atleast two inputs !! \n"
    )
  );
} else {
  const operations = [
    "add",
    "subtract",
    "multiply",
    "div",
    "help",
    "command",
    "author"
  ];

  if (!operations.includes(process.argv[2])) {
    if (!process.argv[3]) {
      return console.log(
        chalk.red.inverse.bold(
          "\n Please provide correct operation command with two or more inputs !! \n"
        )
      );
    }
    console.log(
      chalk.red.inverse.bold(
        "\n Please provide correct operation command !! \n"
      )
    );
  } else {
    if (!process.argv[3]) {
      // Run in Terminal --->  node app.js help
      // Run in Terminal --->  node app.js command

      if (process.argv[2] === "help" || process.argv[2] === "command") {
        console.log(chalk.white.bgBlack.bold("\n\t\t\t\t COMMANDS ----> \n"));
        console.log(chalk.white.inverse.bold("\n For Addition : "));
        console.log(chalk.green.inverse.bold(" node app.js add 2 3 4 \n"));

        console.log(chalk.white.inverse.bold("\n For Subtraction : "));
        console.log(
          chalk.yellow.inverse.bold(" node app.js subtract 14 6 3 \n")
        );

        console.log(chalk.white.inverse.bold("\n For Multiplication : "));
        console.log(
          chalk.magenta.inverse.bold(" node app.js multiply 4 5 2 \n")
        );

        console.log(chalk.white.inverse.bold("\n For Division : "));
        console.log(chalk.cyan.inverse.bold(" node app.js div 20 5 2 \n"));

        console.log(
          chalk.white.inverse.bold("\n About Commands & Operation : ")
        );
        console.log(chalk.blue.inverse.bold(" node app.js help "));
        console.log(chalk.blue.inverse.bold(" node app.js command \n"));

        console.log(chalk.white.inverse.bold("\n About Developer : "));
        console.log(chalk.blueBright.inverse.bold(" node app.js author \n"));
      }

      // Run in Terminal --->  node app.js author
      else if (process.argv[2] === "author") {
        console.log(
          chalk.white.inverse.bold("\n\t\t AUTHOR --> { B O S S } \n")
        );
        console.log(chalk.magenta.inverse.bold("\n Shashi Kant Yadav \n"));
        console.log(
          chalk.green.inverse.bold(" Full Stack Web Developer [ MERN ] \n")
        );
      } else {
        console.log(
          chalk.red.inverse.bold("\n Please provide two or more inputs !! \n")
        );
      }
    }

    // Run in Terminal --->  node app.js add 2 3 4
    else if (process.argv[2] === "add") {
      let sum = Number(process.argv[3]);
      let i = 0;
      for (i = 4; i < process.argv.length; i++) {
        sum += Number(process.argv[i]);
      }
      inputs();
      console.log(chalk.green.inverse.bold(" Summation is : " + sum + " \n"));
    }

    // Run in Terminal --->  node app.js subtract 14 6 3
    else if (process.argv[2] === "subtract") {
      let bigNum = Number(process.argv[3]);
      let i = 0;
      for (i = 4; i < process.argv.length; i++) {
        bigNum = bigNum - Number(process.argv[i]);
      }
      inputs();
      console.log(
        chalk.yellow.inverse.bold(" Subtraction is : " + bigNum + " \n")
      );
    }

    // Run in Terminal --->  node app.js multiply 4 5 2
    else if (process.argv[2] === "multiply") {
      let mul = Number(process.argv[3]);
      let i = 0;
      for (i = 4; i < process.argv.length; i++) {
        mul *= Number(process.argv[i]);
      }
      inputs();
      console.log(
        chalk.magenta.inverse.bold(" Multiplication is : " + mul + " \n")
      );
    }

    // Run in Terminal --->  node app.js div 20 5 2
    else if (process.argv[2] === "div") {
      let div = Number(process.argv[3]);
      let i = 0;
      for (i = 4; i < process.argv.length; i++) {
        div /= Number(process.argv[i]);
      }
      inputs();
      console.log(chalk.cyan.inverse.bold(" Division is : " + div + " \n"));
    } else {
      console.log(chalk.red.inverse.bold("\n Something went wrong !! \n"));
    }
  }
}
