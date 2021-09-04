let leftSide = '';
let rightSide = '';
let operator = '';
let prevEqual = false;
const numbers = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const displayScreen = document.querySelector('.display');

numbers.forEach(number => {
	number.addEventListener('click', numberClick)
})

operatorButtons.forEach(op => {
	op.addEventListener('click', operatorClick)
})


const operators = [
	{
		sign: '+',
		func: add 
	},
	{
		sign: '-',
		func: subtract 
	},
	{
		sign: '*',
		func: multiply 
	},
	{
		sign: '/',
		func: divide 
	},
	{
		sign: '=',
		func: equals
	}
]

function add(a,b){
	return a + b;
}

function subtract(a,b){
	return a - b;
}

function multiply(a,b) {
	return a * b;
}

function divide(a,b){
	return a / b;
}

function equals(){
	return operators.find(op => {
			return op.sign === operator
		}).func(+leftSide, +rightSide);
}


function operatorClick(e) {
	if(!leftSide){
		return
	}
	if(e.target.value === '=' && !rightSide){
		return
	}
	if(operator){
		if(!rightSide){
			operator = e.target.value;
			return
		}
		if(e.target.value === '='){
			prevEqual = true;
			leftSide = equals();
			displayScreen.textContent = leftSide;
			return
		}
		if(prevEqual){
			rightSide = '';
			operator = e.target.value;
			prevEqual = false;
			return
		}
		leftSide = equals();
		displayScreen.textContent = leftSide;
		rightSide = '';
		if(e.target.value !== '='){
			operator = e.target.value;
		}
	} else if(e.target.value !== '='){
		operator = e.target.value
	}
	console.log(`left side: ${leftSide}, right side: ${rightSide}, operator: ${operator}`)
}

function numberClick(e){
	if(!operator){
		leftSide += e.target.value
		displayScreen.textContent = leftSide;
	} else {
		rightSide += e.target.value
		displayScreen.textContent = rightSide;
	}
	console.log(`left side: ${leftSide}, right side: ${rightSide}, operator: ${operator}`)
}





