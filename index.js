import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "FirstNumber", type: "number", message: "Enter your First Number" },
    { name: "SecondNumber", type: "number", message: "Enter your Secord Number" },
    { name: "Operator", type: "list", message: "Selct Operator", choices: ["Add", "Substract", "Multiply", "Divide"] }
]);
if (answer.Operator === "Add") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Substract") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiply") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Divide") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("enter valid operator");
}
