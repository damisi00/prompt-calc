//CALCULATOR

alert("This is a simple calculator.");

let firstNumber;    //declaring first variable
//Repeat until the input is a number
do {
    // store the input as firstNumber
    firstNumber = (parseFloat(prompt("Enter your first number")) * 10) / 10;
} while ((firstNumber == "") || (isNaN(firstNumber)) == true); 


let secondNumber;  //declaring second variable
//Repeat until input is a number
do {
    //store input in the variable secondNumber
    secondNumber = (parseFloat(prompt("Enter your second number")) * 10) / 10;
} while ((secondNumber == "") || (isNaN(secondNumber)) == true); 


let operator; //declaring the operator
//store value as operator
operator = prompt("Enter your preferred operator (+, - , /, * or %)").toString();


//calculator algorithm
switch (operator) {
    default:
        //when none of the conditions are met, alert this 
        alert("Invalid input(s) entered! Reload the page and try again.");
    break;
    case "+": //To add
        alert(`The sum of ${firstNumber} and ${secondNumber} is  ${firstNumber + secondNumber}`);
        console.log(firstNumber + secondNumber);
        break;
    case "-": //To subtract
        alert(`The difference between ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
        break;
    case "*": //To multiply
        alert(`The product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
        break;
    case "/": //To divide
        alert(`${firstNumber} divided by ${secondNumber} is ${firstNumber / secondNumber}`  );
        break;
    case "%": //To find modulus
        alert(`The modulus of ${firstNumber} and ${secondNumber} is ${firstNumber % secondNumber}`);
}
