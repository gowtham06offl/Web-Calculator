const display = document.getElementById("display");


function appendTodisplay(input) {
    display.value += input;
}


function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


function cleardisplay() {
    document.getElementById('display').value = '';
}

document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;

    // Numbers 0-9 and decimal
    if ('0123456789'.includes(key)) {
        appendTodisplay(key);
    }
    // Operators
    else if ('+-*/'.includes(key)) {
        appendTodisplay(key);
    }
    // Equals sign
    else if (key === 'Enter') {
        calculate();
    }
    // Clear (C key)
    else if (key === 'Backspace' || key === 'Backspace') {
        cleardisplay();
    }
    // Decimal point
    else if (key === '.') {
        appendTodisplay('.');
    }

    // Prevent page scrolling for arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        event.preventDefault();
    }
});