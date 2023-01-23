"use strict";
const calculator = document.getElementById("calculator");
let x = 0, y = 0, initialX = 0, initialY = 0;
calculator.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
function dragStart(e) {
    initialX = e.clientX - x;
    initialY = e.clientY - y;
    calculator.addEventListener("mousemove", drag);
}
function dragEnd() {
    calculator.removeEventListener("mousemove", drag);
}
function drag(e) {
    x = e.clientX - initialX;
    y = e.clientY - initialY;
    calculator.style.top = y + "px";
    calculator.style.left = x + "px";
}
const greenBtn = document.getElementById("greenBtn");
const advanceClac = document.getElementById("advance-calc");
greenBtn === null || greenBtn === void 0 ? void 0 : greenBtn.addEventListener("click", () => {
    // console.log("clicked");
    // console.log(advanceClac);
    advanceClac === null || advanceClac === void 0 ? void 0 : advanceClac.classList.toggle("flex");
    advanceClac === null || advanceClac === void 0 ? void 0 : advanceClac.classList.toggle("hidden");
});
let currentValue = "0";
let previousValue = "0";
let operator = "";
const numberBtn = document.getElementsByClassName("number");
const operatorBtn = document.getElementsByClassName("operator");
const displayElement = document.getElementById("display");
const equalBtn = document.getElementById("equalBtn");
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener("click", () => {
        if (currentValue === "0") {
            currentValue = numberBtn[i].innerText;
        }
        else {
            currentValue += numberBtn[i].innerText;
        }
        displayElement.innerText = currentValue;
        console.log(currentValue, previousValue, operator);
    });
}
for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener("click", (e) => {
        if (operatorBtn[i].innerText === "AC") {
            currentValue = "0";
            previousValue = "0";
            operator = "";
        }
        else if (operatorBtn[i].innerText === "+/-") {
            currentValue = (parseFloat(currentValue) * -1).toString();
        }
        else if (operatorBtn[i].innerText === "%") {
            currentValue = (parseFloat(currentValue) / 100).toString();
        }
        else {
            previousValue = currentValue;
            currentValue = "0";
            operator = operatorBtn[i].innerText;
        }
        displayElement.innerText = previousValue;
        console.log(currentValue, previousValue, operator);
    });
}
equalBtn.addEventListener("click", (e) => {
    console.log(operator);
    if (operator === "+") {
        currentValue = (parseFloat(previousValue) + parseFloat(currentValue)).toString();
    }
    else if (operator === "-") {
        currentValue = (parseFloat(previousValue) - parseFloat(currentValue)).toString();
    }
    else if (operator === "*") {
        currentValue = (parseFloat(previousValue) * parseFloat(currentValue)).toString();
    }
    else if (operator === "/") {
        currentValue = (parseFloat(previousValue) / parseFloat(currentValue)).toString();
    }
    console.log(currentValue);
    displayElement.innerText = currentValue;
});
