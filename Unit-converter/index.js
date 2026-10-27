const inputValue1 = document.getElementById("label1");
const inputValue2 = document.getElementById("label2");
const input1 = document.getElementById("input-value1");
const input2 = document.getElementById("input-value2");
const convertBtn = document.getElementById("converter");

let currentMode = "length";




function handleclick1() {
    currentMode = "length";
    inputValue1.textContent = "Meters";
    inputValue2.textContent = "Feet";
    clearInputs();
    
}

function handleclick2() {
    currentMode = "weight";
    inputValue1.textContent= "Kilograms";
    inputValue2.textContent = "Pounds";
    clearInputs();
}

function handleclick3() {
    currentMode = "volume";
    inputValue1.textContent = "Liters";
    inputValue2.textContent = "Gallons";
    clearInputs();
}

function clearInputs() {
    input1.value = "";
    input2.value = "";
}

convertBtn.addEventListener("click", function() {
    let val1 = parseFloat(input1.value);
    let val2 = parseFloat(input2.value);

    if (isNaN(val1) && isNaN(val2)) {
        alert("Please enter a value in one of the fields.");
        return;
    }

    if (currentMode === "length") {
        if (!isNaN(val1) && isNaN(val2)) {
            input2.value = (val1 * 3.28084).toFixed(2);

        }else if (isNaN(val1) && !isNaN(val2)) {
            input1.value = (val2 / 3.28084).toFixed(2);
        }
    }

    else if (currentMode === "weight") {
        if (!isNaN(val1) && isNaN(val2)) {
            input2.value = (val1 * 2.20462).toFixed(2);
    
        }else if (isNaN(val1) && !isNaN(val2)) {
            input1.value = (val2 / 2.20462).toFixed(2);
        }
    }

    else if (currentMode === "volume") {
        if (!isNaN(val1) && isNaN(val2)) {
            input2.value = (val1 * 0.264172).toFixed(2);
    
        }else if (isNaN(val1) && !isNaN(val2)) {
            input1.value = (val2 / 0.264172).toFixed(2);
        }
    }
    
})