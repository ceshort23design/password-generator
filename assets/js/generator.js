// CRITERIA POOL

var alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperAlpha = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var number = ['0', '9', '7', '3', '1', '6', '8', '4', '2', '5'];
var speChar = ['!','#','$','%','&','@','*','-','?','/',];

// SELECT PASSWORD PARAMETERS
function select() {

    var passLength = window.prompt("How many characters do you want in your password?  Please choose between 8 and 128.");


    if (passLength >= 8 && passLength <= 128) {

        var selectLower = window.confirm("Do you want to include lowercase letters?");
        var selectUpper = window.confirm("Do you want to include UPPERCASE letters?");
        var selectNumber = window.confirm("Do you want to include numbers(0-9)?");
        var selectSpecial = window.confirm("Do you want to include special characters (! # $ % & @ * - ? /)?");

        if (!selectLower && !selectUpper && !selectNumber && !selectSpecial) {
            window.alert("You must choose at least one option! Please try again.");
            select();
        }

        var passwordSelections = {
            passwordLength: passLength,
            hasLower: selectLower,
            hasUpper: selectUpper,
            hasNumber: selectNumber,
            hasSpecial: selectSpecial
        }

        generateArray(passwordSelections);

    }
    else {
        window.alert("You entered " + passLength + ".  You must enter a number from 8 through 128. Please try again.");
        select();
    }
};

// GENERATE PASSWORD ARRAY
function generateArray(passwordSelections) {
    var passArray = [];

    // RANDOMLY SELECT CHARACTERS BASED ON THE USER INPUT AND PUSH TO passArray[]
    var lowCharArray = [];
    if (passwordSelections.hasLower) {
        for (var i = 0; i < passwordSelections.passwordLength; i++) {
            var lowCharArray = alphabet[Math.floor(Math.random() * alphabet.length)];
            passArray.push(lowCharArray)};
        }

    var upCharArray = [];
    if (passwordSelections.hasUpper) {
        for (var i = 0; i < passwordSelections.passwordLength; i++) {
            var upCharArray = upperAlpha[Math.floor(Math.random() * upperAlpha.length)];
            passArray.push(upCharArray)};
        }

    var numberArray = [];
    if (passwordSelections.hasNumber) {
        for (var i = 0; i < passwordSelections.passwordLength; i++){
            var numberArray = number[Math.floor(Math.random() * number.length)];
            passArray.push(numberArray)};
        }
 

    var speCharArray = [];
    if (passwordSelections.hasSpecial) {
        for (var i = 0; i < passwordSelections.passwordLength; i++) {
            var speCharArray = speChar[Math.floor(Math.random() * speChar.length)];
            passArray.push(speCharArray)};
        }


    generatePassword(passArray, passwordSelections);
}

function generatePassword(passArray, passwordSelections) {
    console.log(passArray);
    var finalPassword = [];
    var password = [];
    for (var i = 0; i < passwordSelections.passwordLength; i++) {
        password = passArray[Math.floor(Math.random() * passArray.length)];
        finalPassword.push(password);
    }
    window.alert(finalPassword.join(""));
}

select();