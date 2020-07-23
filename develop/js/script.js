// greeting
alert("Welcome to the Password Generator!");

// confirm if user wants to make a password
var areYouReady = confirm("Ready to begin?");

// // conditional responses based on whether the user wants to make a password or not
if (areYouReady) {
    var instructions = confirm("Check the boxes below to customize your new password.");
  } else {
    alert("Well then.");
  }

// variables
var passLength = document.querySelector("#length");
var upperCase = document.querySelector("#uppercase");
var lowerCase = document.querySelector("#lowercase");
var numbers = document.querySelector("#numbers");
var symbols = document.querySelector("#symbols");
var generateBtn = document.querySelector("#generate");
var result = document.querySelector("#result");

// password length and characters are determined by the value of the password length input and by what boxes are checked
generateBtn.addEventListener('click', function () {
	var length = +passLength.value;
	var wantsLower = lowerCase.checked;
	var wantsUpper = upperCase.checked;
	var wantsNumber = numbers.checked;
	var wantsSymbol = symbols.checked;
	
	alert(randomPassword(wantsLower, wantsUpper, wantsNumber, wantsSymbol, length));
});

function randomPassword(lower, upper, number, symbol, length) {
	var generatedPassword = "";
	var inputTypes = lower + upper + number + symbol;
	var inputTypesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(inputTypes === 0) {
		return " ";
	}
	
	// for loop
	for(let i = 0; i < length; i ++) {
		inputTypes++;

		inputTypesArray.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomCharacters[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

// functions to pull random characters from strings
function randomLowerCase() {
	var lowerCase = "abcdefghijklmnopqrstuvxyz"
	return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function randomUpperCase() {
	var upperCase = "ABCDEFGHIJKLMKOPQRSTUVWXYZ"
	return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumber() {
	var numbers = "0123456789"
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.+='
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// placing all random character generating functions in a single variable 
var randomCharacters = {
	lower: randomLowerCase,
	upper: randomUpperCase,
	number: randomNumber,
	symbol: randomSymbol
}