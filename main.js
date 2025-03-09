let display=document.querySelector(".display");
let counter=document.querySelector("#counter")

document.querySelector(".increase").addEventListener("click", function () {
    let input = Number(counter.value);
    let value = input + 1;

    if (value > 1000) {
        display.textContent = "Error: Value cannot be higher than 1000!";    
    } 
    else if(value<0){
        display.textContent = "Error: Try between 0 to 1000";    
    }
    else {
        display.textContent = ""; 
        counter.value = value;
    }
});

document.querySelector(".decrease").addEventListener("click", function () {
    let input = Number(counter.value);
    let value = input - 1;

    if (value < 0) {
       display.textContent = "Error: Value cannot be lower than 0!";
    }
    else if(value>1000){
       display.textContent = "Error: Try between 0 to 1000";    
    }
    else {
        display.textContent = ""; 
        counter.value = value;
    }
});

document.querySelector(".reset").addEventListener("click", function () {
    counter.value = "";
    display.textContent = ""; 
});

