let inputs = [];

const outputDisplay = document.getElementById('output-space');
outputDisplay.textContent = 0;

function updatesOutput(operationID) {
    if (operationID !== ('+' || '-' || '*' || '/')) {
        outputDisplay.textContent = inputs.join('');
    } else {outputDisplay.textContent = inputs.join('') + operationID;};
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
    decimal: document.getElementById('buttonDecimal'),
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
    lastValue: null,
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

numberPad.decimal.addEventListener('click', () => {
    if (inputs.includes('.') !== true) {
        let newInput = '.';
        inputs.push(newInput);
        updatesOutput();
    };
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
        userCalculations.operator = '+';
        console.log('before first');
        assignsFirst('+');
        console.log(`after first, first number = ${userCalculations.first}, case 1`);
    } else if ((userCalculations.second ===null && inputs.length !== 0) && (userCalculations.first === userCalculations.result)) {
        console.log('case 2 start');
        userCalculations.operator = '+';
        assignsSecond('+');
        operates('+');
        console.log('case 2 end');
    } else if ((userCalculations.second === null) && (userCalculations.first === userCalculations.result)) {
        console.log('case 3 start');
        userCalculations.operator = '+';
        console.log('case 3 end');
    } else if (userCalculations.second === null) {
        userCalculations.operator = '+';
        console.log('case 4 start');
        console.log('before assignsSecond');
        assignsSecond('+');
        console.log(`after assignsSecond, second number = ${userCalculations.second}, before operates`);
        operates('+');
        console.log('case 4 end');
    };
});

buttonOperators.minus.addEventListener('click', () => {
    if (userCalculations.first === null) {
        userCalculations.operator = '+';
        console.log('before first');
        assignsFirst('-');
        console.log(`after first, first number = ${userCalculations.first}, case 1`);
    } else if ((userCalculations.second ===null && inputs.length !== 0) && (userCalculations.first === userCalculations.result)) {
        console.log('case 2 start');
        userCalculations.operator = '-';
        assignsSecond('-');
        operates('-');
        console.log('case 2 end');
    } else if ((userCalculations.second === null) && (userCalculations.first === userCalculations.result)) {
        console.log('case 3 start');
        userCalculations.operator = '-';
        console.log('case 3 end');
    } else if (userCalculations.second === null) {
        userCalculations.operator = '-';
        console.log('case 4 start');
        console.log('before assignsSecond');
        assignsSecond('-');
        console.log(`after assignsSecond, second number = ${userCalculations.second}, before operates`);
        operates('-');
        console.log('case 4 end');
    };
});

buttonOperators.multiply.addEventListener('click', () => {
    if (userCalculations.first === null) {
        userCalculations.operator = '*';
        console.log('before first');
        assignsFirst('*');
        console.log(`after first, first number = ${userCalculations.first}, case 1`);
    } else if ((userCalculations.second ===null && inputs.length !== 0) && (userCalculations.first === userCalculations.result)) {
        console.log('case 2 start');
        userCalculations.operator = '*';
        assignsSecond('*');
        operates('*');
        console.log('case 2 end');
    } else if ((userCalculations.second === null) && (userCalculations.first === userCalculations.result)) {
        console.log('case 3 start');
        userCalculations.operator = '*';
        console.log('case 3 end');
    } else if (userCalculations.second === null) {
        userCalculations.operator = '*';
        console.log('case 4 start');
        console.log('before assignsSecond');
        assignsSecond('*');
        console.log(`after assignsSecond, second number = ${userCalculations.second}, before operates`);
        operates('*');
        console.log('case 4 end');
    };
});

buttonOperators.divide.addEventListener('click', () => {
    if (userCalculations.first === null) {
        userCalculations.operator = '/';
        console.log('before first');
        assignsFirst('/');
        console.log(`after first, first number = ${userCalculations.first}, case 1`);
    } else if ((userCalculations.second ===null && inputs.length !== 0) && (userCalculations.first === userCalculations.result)) {
        console.log('case 2 start');
        userCalculations.operator = '/';
        assignsSecond('/');
        operates('/');
        console.log('case 2 end');
    } else if ((userCalculations.second === null) && (userCalculations.first === userCalculations.result)) {
        console.log('case 3 start');
        userCalculations.operator = '/';
        console.log('case 3 end');
    } else if (userCalculations.second === null) {
        userCalculations.operator = '/';
        console.log('case 4 start');
        console.log('before assignsSecond');
        assignsSecond('/');
        console.log(`after assignsSecond, second number = ${userCalculations.second}, before operates`);
        operates('/');
        console.log('case 4 end');
    };
});

buttonOperators.enter.addEventListener('click', () => {  
    if ((userCalculations.first && userCalculations.second) !== null) {
        operates(userCalculations.operator);
    } else if (userCalculations.second === null) {
        assignsSecond(userCalculations.operator);
        operates(userCalculations.operator);
    };
});

function operates() {
    
    

    let selectedOperator = userCalculations.operator;
    let firstNumber = userCalculations.first;
    let secondNumber = userCalculations.second;
    console.log('before if else',firstNumber, selectedOperator, secondNumber);

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

    userCalculations.lastValue = userCalculations.second;
    userCalculations.second = null;
    userCalculations.first = userCalculations.result;
    console.log('after calc', firstNumber, selectedOperator, secondNumber, '=', userCalculations.result);
    console.log('raw numbers', userCalculations.first,userCalculations.operator, userCalculations.second, '=', userCalculations.result, 'last value =', userCalculations.lastValue);
};

const darkModeBtn = document.querySelector('#mode-switch');
darkModeBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkMode');
});

function assignsFirst(operationID) {
        userCalculations.first = inputs.slice(0, 9);
        userCalculations.first = parseFloat(userCalculations.first.join(''));
        updatesOutput(operationID);
        inputs.length = 0;
};

function assignsSecond(operationID) {
    console.log('start of assignsSecond');
    userCalculations.second = inputs.slice(0, 9);
    userCalculations.second = parseFloat(userCalculations.second.join(''));
    console.log(`second number = ${userCalculations.second}`);
    if (isNaN(userCalculations.second) === true) {
        userCalculations.second = userCalculations.lastValue;
        console.log(`.second = NaN, changing to equal last value ${userCalculations.lastValue}`);
    };
    console.log('updates now');
    updatesOutput(operationID);
    inputs.length = 0;
    console.log('end assignsSecond');
};