const display = document.getElementById("search");
    const validPattern = /^[0-9+\-*/().\s]*$/;

    display.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {

        if (validPattern.test(display.value)) {
            try {
                display.value = eval(display.value);
                display.classList.remove("input-error");
            } catch (e) {
                display.placeholder = "Invalid Input";
                display.value = "";
                display.classList.add("input-error");
            }
        } else {
            display.placeholder = "Invalid Input";
            display.value = ""; 
            display.classList.add("input-error");
        }
    }
});

    function evaluateInput() {
          if (validPattern.test(display.value)) {
            try {
                display.value = eval(display.value);
                display.classList.remove("input-error");
            } catch (e) {
                display.placeholder = "Invalid Input";
                display.value = "";
                display.classList.add("input-error");
            }
        } else {
            display.placeholder = "Invalid Input";
            display.value = ""; 
            display.classList.add("input-error");

        }
    }

