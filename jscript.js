let inputs = [];

const outputDisplay = document.getElementById('output-space');
outputDisplay.textContent = 0;

function updatesOutput() {
    outputDisplay.textContent = inputs.join('');
};

const numberPad = {
    zero: document.getElementById('button0'),
    one: document.getElementById('button1'),
    two: document.getElementById('button2'),
    three: document.getElementById('button3'),
    four: document.getElementById('button4'),
    five: document.getElementById('button5'),
    six: document.getElementById('button6'),
    seven: document.getElementById('button7'),
    eight: document.getElementById('button8'),
    nine: document.getElementById('button9'),
};

const buttonOperators = {
    plus: document.getElementById('operatorPlus'),
    minus: document.getElementById('operatorMinus'),
    multiply: document.getElementById('operatorMultiply'),
    divide: document.getElementById('operatorDivide'),
    enter: document.getElementById('operatorEnter'),
    backSpace: document.getElementById('operatorBackSpace'),
    clear: document.getElementById('operatorClear'),
};

let userCalculations = {
    first: null,
    second: null,
    result: null,
    operator: null,
};

numberPad.one.addEventListener('click', () => {
    let newInput = 1;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.two.addEventListener('click', () => {
    let newInput = 2;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.three.addEventListener('click', () => {
    let newInput = 3;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.four.addEventListener('click', () => {
    let newInput = 4;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.five.addEventListener('click', () => {
    let newInput = 5;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.six.addEventListener('click', () => {
    let newInput = 6;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.seven.addEventListener('click', () => {
    let newInput = 7;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.eight.addEventListener('click', () => {
    let newInput = 8;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.nine.addEventListener('click', () => {
    let newInput = 9;
    inputs.push(newInput);
    updatesOutput();
});

numberPad.zero.addEventListener('click', () => {
    let newInput = 0;
    inputs.push(newInput);
    updatesOutput();
});

buttonOperators.backSpace.addEventListener('click', () => {
    inputs.pop();
    updatesOutput();
});

buttonOperators.clear.addEventListener('click', () => {
    inputs.length = 0;
    userCalculations.first = null;
    userCalculations.second = null;
    userCalculations.result = null;
    updatesOutput();
});

buttonOperators.plus.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('+');
        userCalculations.operator = inputs[inputs.length -1];
        console.log('before', userCalculations.first);
        userCalculations.first = inputs.slice(0, -1);
        console.log('after', userCalculations.first);
        updatesOutput();
        inputs.length = 0;
    } else {
        inputs.push('+');
        userCalculations.operator = inputs[inputs.length -1];
        console.log('before', userCalculations.second);
        userCalculations.second = inputs.slice(0, -1);
        console.log('after', userCalculations.second);
        inputs.length = 0;
        operates('+');
    };
});

buttonOperators.minus.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('-');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else {
        inputs.push('-');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        inputs.length = 0;
        operates('-');
    }
});

buttonOperators.multiply.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('*');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else {
        inputs.push('*');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        inputs.length = 0;
        operates('*');
    }
});

buttonOperators.divide.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('/');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else {
        inputs.push('/');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        inputs.length = 0;
        operates('/');
    }
});

buttonOperators.enter.addEventListener('click', () => {
    operates(userCalculations.operator);
});

function operates(selectedOperator) {

    let firstNumber = parseInt(userCalculations.first.join(''));
    let secondNumber = parseInt(userCalculations.second.join(''));
    console.log(typeof(firstNumber), typeof(secondNumber));

     if (selectedOperator === '+') {
        userCalculations.result = firstNumber + secondNumber;
        outputDisplay.textContent = userCalculations.result;
     } else if (selectedOperator === '-') {
        userCalculations.result = firstNumber - secondNumber;
        outputDisplay.textContent = userCalculations.result;
     } else if (selectedOperator === '*') {
        userCalculations.result = firstNumber * secondNumber;
        outputDisplay.textContent = userCalculations.result;
     } else if (selectedOperator === '/') {
        userCalculations.result = firstNumber / secondNumber;
        outputDisplay.textContent = userCalculations.result;
     };

     console.log('before', userCalculations.first, userCalculations.second, userCalculations.result);
    userCalculations.first = null;
    userCalculations.second = null;
    userCalculations.first = userCalculations.result;
    userCalculations.result = null;
    console.log('after', userCalculations.first, userCalculations.second, userCalculations.result);
};

const darkModeBtn = document.querySelector('#mode-switch');
darkModeBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkMode');
});