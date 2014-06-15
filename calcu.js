var number;
var operator;
var first;
var second;
var value;

function erase() {
  	var y = document.getElementById("screen");
	y.innerText = "";
};

function getValue() {
	document.getElementById("screen").innerText += number;
};

/* function getOperator(){
	operator = this.innerText;
	first = document.getElementById("screen").innerText;
	erase(); 	
};

function equal() {
	second = document.getElementById("screen").innerText;
	erase();
	value = first operator second;
	document.getElementById("screen").innerText = value
}; */

function valNine() {
		number = 9;
		getValue(); 
};

function valEight() {
		number = 8;
		getValue(); 
};

function valSeven() {
		number = 7;
		getValue(); 
};

function valSix() {
		number = 6;
		getValue(); 
};

function valFive() {
		number = 5;
		getValue(); 
};

function valFour() {
		number = 4;
		getValue(); 
};

function valThree() {
		number = 3;
		getValue(); 
};

function valTwo() {
		number = 2;
		getValue(); 
};

function valOne() {
		number = 1;
		getValue(); 
};

function valZero() {
		number = 0;
		getValue(); 
};

function valDeci() {
	var decimal = false;

		if(decimal = false) {
			number = ".";
			getValue();
			decimal = true; 
		} else {
			number = ".";
		}
};



