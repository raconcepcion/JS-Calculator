 var keys = document.querySelectorAll('span');
 var previousInput = '';
 var currentInput = '';
 var operatorInput = '';
 var displayInput = document.querySelector('.screen');

 var result = 0;
// clears screen
 var clearScreen = function (){
     displayInput.innerHTML= "";
     previousInput = '';
     operatorInput = '';
     currentInput = '';
 }

//display and clear keys
for(i = 0; i < keys.length; i++) {
   keys[i].onclick = function(keyOnClick) {
       var keysValue = sanitizeHtmlInput(this.innerHTML);

       if (typeof keysValue === 'number') {
           displayInput.innerHTML += keysValue;
       }

       else if (keysValue === "C") {
           clearScreen();
       }

       else {
            currentInput = displayInput.innerHTML;
            console.log(operatorInput);

            if (previousInput && operatorInput) {
                var result = performOperation(parseInt(previousInput, 10), parseInt(currentInput, 10), operatorInput);
                    previousInput = result;
                    displayInput.innerHTML = result;

            } else {
                previousInput = currentInput;
                displayInput.innerHTML = "";
            }

            operatorInput = keysValue
        }
       }
};

var sanitizeHtmlInput = function (input) {
    var newInput = parseInt(input, 10);

    if (isNaN(newInput)) {
        return input;
    } else {
        return newInput;
    }
};

var performOperation = function(firstNum, secondNum, operator){
    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '-') {
        result = firstNum - secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    }
    return result;
};

