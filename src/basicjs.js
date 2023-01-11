/// ex 1 
function SellAlcoholBeverages1() {
    let age = prompt("enter your age", "18");
    let bevrage = prompt("enter 1 for wine and 2 for beer");
    if (age < 18) {
        return "you are to young ";        
    }
    else {
        if (bevrage==1) return alert("wine");
        else if (bevrage==2) return "beer";
        else return "dont know such a drink";
    }
}

function SellAlcoholBeverages2() {
    let age = prompt("enter your age", "18");
    let beverage = prompt("enter 1 for wine and 2 for beer");
    switch (true) {
        case age < 18:
            return "you are too young";
        case beverage == 1:
            return "wine";
        case beverage == 2:
            return "beer";
        default:
            return "don't know such a drink";
    }
}

/// ex2 
function getSmallestNumbers() {
    let numbers = [];
    let input;
    while (input != -1) {
        input = prompt("Enter a number (enter -1 to stop):");
        if (input != -1) {
            numbers.push(input);
        }
    }
    let smallestNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            if (smallestNumbers.length < 2) {
                smallestNumbers.push(numbers[i]);
            } else {
                if (numbers[i] < smallestNumbers[0]) {
                    smallestNumbers[1] = smallestNumbers[0];
                    smallestNumbers[0] = numbers[i];
                } else if (numbers[i] < smallestNumbers[1]) {
                    smallestNumbers[1] = numbers[i];
                }
            }
        }
    }
    return smallestNumbers;
}

/// ex3

function printRectangle(width, height) {
    var rectangle = "";
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            rectangle += "*";
        }
        rectangle += "\n";
    }
    return rectangle;
}
console.log(printRectangle(4,5))



