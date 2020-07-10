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

const characters = '~`!@#$%^&*(){}[]=<>/,.""'
const upperLetters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X','Y','Z'
]
const lowerLetters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'
]


function generatePassword() {
    
    const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;

}

// when you click the generate button the password prompts to the user
generate.addEventListener('click', () => {
	const passLength = +length.value;
	const hasLower = lowerCase.checked;
	const hasUpper = upperCase.checked;
	const hasNumber = numbers.checked;
	const hasSymbol = specialCharacters.checked;
    
    alert(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, passLength));
});