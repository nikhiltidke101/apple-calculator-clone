const calculator = <HTMLDivElement> document.getElementById("calculator");
let x = 0, y = 0, initialX = 0, initialY = 0;

calculator.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);

function dragStart(e:any) {
    initialX = e.clientX - x;
    initialY = e.clientY - y;
    calculator.addEventListener("mousemove", drag);
}

function dragEnd() {
    calculator.removeEventListener("mousemove", drag);
}

function drag(e:any) {
    x = e.clientX - initialX;
    y = e.clientY - initialY;
    calculator.style.top = y + "px";
    calculator.style.left = x + "px";
}

const greenBtn = <HTMLButtonElement> document.getElementById("greenBtn");
const advanceClac = <HTMLDivElement> document.getElementById("advance-calc");

greenBtn?.addEventListener("click", ()=>{
    // console.log("clicked");
    // console.log(advanceClac);
    advanceClac?.classList.toggle("flex");
    advanceClac?.classList.toggle("hidden");
})


let currentValue: string = "0";
let previousValue: string = "0";
let operator: string = "";

const numberBtn = document.getElementsByClassName("number") as HTMLCollectionOf<HTMLElement>;
const operatorBtn = document.getElementsByClassName("operator") as HTMLCollectionOf<HTMLElement>;
const displayElement = document.getElementById("display") as HTMLDivElement;
const equalBtn = <HTMLButtonElement> document.getElementById("equalBtn");

for(let i=0; i<numberBtn.length; i++){
    numberBtn[i].addEventListener("click", ()=>{
        if(currentValue === "0"){
            currentValue = numberBtn[i].innerText;
        } else {
            currentValue += numberBtn[i].innerText;
        }
        displayElement.innerText = currentValue;
        console.log(currentValue, previousValue, operator);
    })
}


for(let i=0; i<operatorBtn.length; i++){
    operatorBtn[i].addEventListener("click", (e) => {
    if (operatorBtn[i].innerText === "AC") {
        currentValue = "0";
        previousValue = "0";
        operator = "";
    } else if (operatorBtn[i].innerText === "+/-") {
        currentValue = (parseFloat(currentValue) * -1).toString();
    } else if (operatorBtn[i].innerText === "%") {
        currentValue = (parseFloat(currentValue) / 100).toString();
    } else {
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
    } else if (operator === "-") {
        currentValue = (parseFloat(previousValue) - parseFloat(currentValue)).toString();
    } else if (operator === "*") {
        currentValue = (parseFloat(previousValue) * parseFloat(currentValue)).toString();
    } else if (operator === "/") {
        currentValue = (parseFloat(previousValue) / parseFloat(currentValue)).toString();
    }
    console.log(currentValue);
    displayElement.innerText = currentValue;
});

