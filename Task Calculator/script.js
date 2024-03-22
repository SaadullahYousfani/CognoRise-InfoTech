$(document).ready(function(){
    let screenValue = '';
    const screen = $('#screen');
    const buttons = $('.number, .operator, .clear, .equals, .decimal, .modulo');
    const backspaceButton = $('.backspace'); // Corrected selection

    // Event listeners to all buttons using a loop:
    buttons.each(function() {
        $(this).click(function() {
            const value = $(this).data('value');
            if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clearScreen();
            } else {
                appendValue(value);
            }
        });
    });

    // Event listener for the backspace button
    backspaceButton.click(function() {
        removeLastCharacter();
    });

    // Append Value to the Screen
    function appendValue(value) {
        screenValue += value;
        screen.val(screenValue);
    }

    // Clear the display screen
    function clearScreen() {
        screenValue = '';
        screen.val(screenValue);
    }

    // Remove the character one by one.
    function removeLastCharacter() {
        screenValue = screenValue.substring(0, screenValue.length - 1);
        screen.val(screenValue);
    }

    // Evaluate the expression and display the result.
    function calculate() {
        try {
            let result = eval(screenValue);
            screen.val(result);
            screenValue = result.toString();
        } catch (error) {
            screen.val('Math Error');
            screenValue = '';
        }
    }
});