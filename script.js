
function clearScreen() {
    let displayBox = document.getElementById("result");
    // clear box
    displayBox.value = ""
}

function display(value) {
    let displayBox = document.getElementById("result");
    // display value 
    displayBox.value += value;
}

function calculate() {
    let displayBox = document.getElementById("result").value;
    let answer = eval(displayBox); // evaulates the answer
    document.getElementById("result").value = answer;
}

