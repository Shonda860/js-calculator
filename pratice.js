let num1 = 10;
let num2 = 5;
let operators = "*";

function addNums(num1, num2) {
    return num1 + num2;
}
// console.log(addNums(num1, num2));

function subNums(num1, num2) {
    return num1 - num2;
}

// console.log(subNums(num1, num2));

function divNums(num1, num2) {
    return num1 / num2;
}

// console.log(divNums(num1, num2));

function mutliNums(num1, num2) {
    return num1 * num2;
}

// console.log(mutliNums(num1, num2));

function calcInput(num1, num2, operators) {
    if (
        operators === "a" ||
        operators === "add" ||
        operators === "addition" ||
        operators === "+"
    ) {
        return addNums(num1, num2);
    } else if (
        operators === "s" ||
        operators === "sub" ||
        operators === "subtract" ||
        operators === "-"
    ) {
        return subNums(num1, num2);
    } else if (
        operators === "d" ||
        operators === "div" ||
        operators === "divide" ||
        operators === "/"
    ) {
        return divNums(num1, num2);
    } else if (
        operators === "m" ||
        operators === "mutli" ||
        operators === "mutliple" ||
        operators === "*"
    ) {
        return mutliNums(num1, num2);
    }
}
console.log(calcInput(num1, num2, operators));