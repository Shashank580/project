document.getElementById("calculate").onclick = function() {
    // Get the values of the inputs
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    // Perform the selected operation
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        result = num1 / num2;
    }

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + result;
};
