<<<<<<< HEAD
=======
//sample comment
>>>>>>> 92369294266b290c67fb83fcb707715cab4935f7
 var keys = document.querySelectorAll('span');
 var previousInput = '';
 var currentInput = '';
 var operatorInput = '';
<<<<<<< HEAD
 var operatorValue = false;
 var clearValue = false;
 var resultValue = false;
 var displayInput = document.querySelector('.screen');

 var result = 0;

=======
 var displayInput = document.querySelector('.screen');

 var result = 0;
>>>>>>> 92369294266b290c67fb83fcb707715cab4935f7
// clears screen
 var clearScreen = function (){
     displayInput.innerHTML= "";
     previousInput = '';
     operatorInput = '';
     currentInput = '';
<<<<<<< HEAD
     var operatorValue = false;
     var clearValue = false;
     var resultValue = false;
 };

//changes input to number
 var sanitizeHtmlInput = function (input) {
=======
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
>>>>>>> 92369294266b290c67fb83fcb707715cab4935f7
    var newInput = parseInt(input, 10);

    if (isNaN(newInput)) {
        return input;
    } else {
        return newInput;
    }
};

<<<<<<< HEAD
//performs a mathematical operation
=======
>>>>>>> 92369294266b290c67fb83fcb707715cab4935f7
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

<<<<<<< HEAD

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

=======
>>>>>>> 92369294266b290c67fb83fcb707715cab4935f7
