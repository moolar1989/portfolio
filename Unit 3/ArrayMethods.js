let myArray = [];

function update() {
    const outputParagraph = document.getElementById('output');
    outputParagraph.innerHTML = '';
    myArray.reduce((accumulator, currentValue, index) => {
        outputParagraph.innerHTML += `${index + 1}. ${currentValue}<br>`;
    }, '');
}

function pushToArray() {
    const inputValue = document.getElementById('inputField').value;
    myArray.push(inputValue);
    update();
}

function popFromArray() {
    myArray.pop();
    update();
}

function unshiftToArray() {
    const inputValue = document.getElementById('inputField').value;
    myArray.unshift(inputValue);
    update();
}

function shiftFromArray() {
    myArray.shift();
    update();
}

function arrMap() {
    const inputValue = document.getElementById('inputField').value;
    myArray = myArray.map(item => item + inputValue);
    update();
}
