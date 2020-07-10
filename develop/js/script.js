// greeting
alert("Welcome to the Password Generator!");

// confirm if user wants to make a password
var areYouReady = confirm("Ready to begin?");

// conditional responses based on whether the user wants to make a password or not
if (areYouReady) {
    var instructions = confirm("Check the boxes below to customize your new password.");
;
  }

  else {
    alert("Well then.");
  }

// variables
var length = document.querySelector("#length");
var lowerCase = document.querySelector("#lowercase");
var upperCase = document.querySelector("#uppercase");
var numbers = document.querySelector("#numbers");
var specialCharacters = document.querySelector("#special-characters");
var generate = document.querySelector("#generate-btn");

const upperLetters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X','Y','Z'
]
const lowerLetters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'
]

const characters = '~`!@#$%^&*(){}[]=<>/,.""'

// functions to get random elements
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + lowerLetters.length);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + upperLetters.length);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomCharacter() {
	return characters[Math.floor(Math.random() * characters.length)];
}

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	character: getRandomCharacter
}

// function for generating password 
function generatePassword(lower, upper, number, character) {

	let generatedPassword = '';
	const typesCount = lower + upper + number + character;
	const typesArr = [{lower}, {upper}, {number}, {character}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	// for loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
    return finalPassword;
}

// when you click the generate button the password prompts to the user
generate.addEventListener('click', () => {

	const passLength = +length.value;
	const hasLower = lowerCase.checked;
	const hasUpper = upperCase.checked;
	const hasNumber = numbers.checked;
    const hasCharacter = specialCharacters.checked;
    
    console.log = (generatePassword(passLength, hasLower, hasUpper, hasNumber, hasCharacter));
    
    // alert(generatePassword(hasLower, hasUpper, hasNumber, hasCharacter, passLength));
});