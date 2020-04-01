// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require("prompt");

const calculateUserInput = function(error, promptInput) {
    calculate(promptInput.num1, promptInput.num2, promptInput.operation);
};

const calculate = function(num1, num2, operation) {
    switch (operation) {
        case "a":
        case "add":
        case "addition":
        case "+":
            console.log(num1 + num2);
            break;
        case "s":
        case "sub":
        case "subtract":
        case "-":
            console.log(num1 - num2);
            break;
        case "d":
        case "div":
        case "divide":
        case "/":
            console.log(num1 / num2);
            break;
        case "m":
        case "mutli":
        case "mutliple":
        case "*":
            console.log(num1 * num2);
            break;
    }
};

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(["num1", "num2", "operation"], calculateUserInput);