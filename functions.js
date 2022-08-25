// functions.js
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function sayHello(name) {
    if (name === "Will") {
        return `No more testing Will!`
    }
    return `Hi there ${name}!`
}

function buildCar(color, type) {
    if (!color && !type) {
        return {};
    }
    return {
        color: color,
        type: type
    }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}