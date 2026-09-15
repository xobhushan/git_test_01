const display = document.getElementById("display");

function appendValue(value) {

    if (display.value === "0" && value !== ".") {
        display.value = value;
    } 
    else {
        display.value += value;
    }
}


function clearDisplay() {
    display.value = "0";
}


function deleteLast() {

    if (display.value.length === 1) {
        display.value = "0";
    } 
    else {
        display.value = display.value.slice(0, -1);
    }
}


function calculate() {

    try {

        let expression = display.value;

        // Convert percentage
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        // Calculate expression
        let result = Function(
            `"use strict"; return (${expression})`
        )();

        if (!isFinite(result)) {
            display.value = "Error";
        } 
        else {
            display.value = result;
        }

    } 
    catch (error) {

        display.value = "Error";

    }
}