// Task 1: Simple Calculator
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('calculator-result').textContent = 'Result: ' + result;
});

// Task 2: Array Operations
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample array

document.getElementById('calculate-sum').addEventListener('click', function() {
    const sum = numbersArray.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc += num;
        }
        return acc;
    }, 0);

    document.getElementById('array-result').textContent = 'Sum of even numbers: ' + sum;
});

// Task 3: Object Manipulation
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge() {
        this.age += 1;
    }
};

document.getElementById('get-full-name').addEventListener('click', function() {
    const fullName = person.getFullName();
    document.getElementById('person-result').textContent = `Person Info: ${fullName}, Age: ${person.age}`;
});

document.getElementById('increment-age').addEventListener('click', function() {
    person.incrementAge();
    document.getElementById('person-result').textContent = `Person Info: ${person.getFullName()}, Age: ${person.age}`;
});
