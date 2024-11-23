let displayValue = "";

function appendvalue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;

}

function cleardisplay() {
    displayValue = "";
    document.getElementById('display').value = "";
}

function operate(operator) {
    displayValue += "" + operator + "";
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;

    } catch {
        document.getElementById('display').value = 'error';
    }
}