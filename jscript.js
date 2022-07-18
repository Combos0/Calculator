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
        console.log(inputs);
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
        console.log(userCalculations.first, inputs);
    } else if (userCalculations.second === null) {
        inputs.push('+');
        console.log(inputs);
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
        console.log(userCalculations.second, inputs);
    } else {/*operates();*/};
});

buttonOperators.minus.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('-');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else if (userCalculations.second === null) {
        inputs.push('-');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else {operates('-');};
});

buttonOperators.multiply.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('*');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else if (userCalculations.second === null) {
        inputs.push('*');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else {operates('*');};
});

buttonOperators.divide.addEventListener('click', () => {
    if (userCalculations.first === null) {
        inputs.push('/');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.first = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else if (userCalculations.second === null) {
        inputs.push('/');
        userCalculations.operator = inputs[inputs.length -1];
        userCalculations.second = inputs.slice(0, -1);
        updatesOutput();
        inputs.length = 0;
    } else {operates('/');};
});

buttonOperators.enter.addEventListener('click', () => {
    operates(userCalculations.operator);
});

function operates(selectedOperator) {
    let firstInput = userCalculations.first.join(''),
     secondInput = userCalculations.second.join(''),
     firstNumber = parseInt(firstInput),
     secondNumber = parseInt(secondInput);
     if (selectedOperator === '+') {
        userCalculations.result = firstNumber + secondNumber;
        outputDisplay.textContent = userCalculations.result;
     } else if (selectedOperator === '-') {
        userCalculations.result = firstNumber - secondNumber;
        outputDisplay.textContent = userCalculations.result;
     } else if (selectedOperator === '*') {
        userCalculations.result = firstNumber * secondNumber;
        outputDisplay.textContent = userCalculations.result;
     } else {
        userCalculations.result = firstNumber / secondNumber;
        outputDisplay.textContent = userCalculations.result;
     };
    userCalculations.first = null;
    userCalculations.second = null;
    userCalculations.first = userCalculations.result;
    userCalculations.result = null;
};

const darkModeBtn = document.querySelector('#mode-switch');
darkModeBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkMode');
});

/*(userCalculations.first && userCalculations.second !== null) {
        let answer = (parseInt(userCalculations.first.join('')) + parseInt(userCalculations.second.join('')));
        console.log(answer);
        outputDisplay.textContent = answer;*/