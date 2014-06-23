 var keys = document.querySelectorAll('span');
 var previousInput = '';
 var currentInput = '';
 var operatorInput = '';
 var operatorValue = false;
 var clearValue = false;
 var resultValue = false;
 var displayInput = document.querySelector('.screen');

 var result = 0;

// clears screen
 var clearScreen = function (){
     displayInput.innerHTML= "";
     previousInput = '';
     operatorInput = '';
     currentInput = '';
     var operatorValue = false;
     var clearValue = false;
     var resultValue = false;
 };

//changes input to number
 var sanitizeHtmlInput = function (input) {
    var newInput = parseInt(input, 10);

    if (isNaN(newInput)) {
        return input;
    } else {
        return newInput;
    }
};

//performs a mathematical operation
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


//display and clear keys
for(i = 0; i < keys.length; i++) {
   keys[i].onclick = function(keyOnClick) {
      var keysValue = sanitizeHtmlInput(this.innerHTML);

       if (typeof keysValue === 'number') {
        if(clearValue) {
          displayInput.innerHTML = "";
          clearValue = false;
        } 

        if (resultValue) {
            displayInput.innerHTML = "";
            resultValue = false;
            displayInput.innerHTML += keysValue;
        } else {
            displayInput.innerHTML += keysValue;
        }

       } else if (keysValue === "C") {
            clearScreen();
       } else if (keysValue === "=") {
            if (operatorValue) {
              currentInput = displayInput.innerHTML;
             
              var result = performOperation(parseFloat(previousInput, 10.33), parseFloat(currentInput, 10.33), operatorInput);
                displayInput.innerHTML = result;
                resultValue = true;
                operatorValue = false;
            }
       } else {
        if (displayInput.innerHTML) {  

          if (!operatorValue) {
            previousInput = displayInput.innerHTML;
            clearValue = true;
          } 
          //works but needs to be fixed.
          /* else {
            currentInput = displayInput.innerHTML;
            var result = performOperation(parseFloat(previousInput, 10.33), parseFloat(currentInput, 10.33), operatorInput);
              previousInput = result;
              displayInput.innerHTML = result;
              resultValue = true;
              operatorValue = false;
          } */

            operatorInput = keysValue;
            operatorValue = true;
        }
       }
   }
};

