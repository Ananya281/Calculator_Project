function calculate(operation) {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result;

    switch(operation) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : "Error: Divide by Zero"; break;
        case '%': result = a % b; break;
    }

    document.getElementById("result").innerText = "Result: " + result;
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}
