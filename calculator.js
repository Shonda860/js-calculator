// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require("prompt");

const calculateUserInput = function(error, promptInput) {
    console.log(
        "This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input",
        promptInput
    );

    // Questions to ask and answer:
    // What is promptInput?
    // What data type? What does it hold? What does it represent?
    // How do we read values from it? What syntax?
    // How can we use it?
    // Can we call our existing functions now, inside of this function?
};

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(["num1", "num2", "operation"], calculateUserInput);