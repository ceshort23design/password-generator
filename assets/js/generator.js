// CRITERIA POOL

var alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperAlpha = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var number = ['0', '9', '7', '3', '1', '6', '8', '4', '2', '5'];
var speChar = ['!','#','$','%','&','@','*','-','?','/',];

// SELECT PASSWORD PARAMETERS
function select() {

    var passLength = window.prompt("How many characters do you want in your password?  Please choose between 8 and 128.");
    // passLength = parseInt(passLength);


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
            length: passLength,
            hasLower: selectLower,
            hasUpper: selectUpper,
            hasNumber: selectNumber,
            hasSpecial: selectSpecial
        }

        generate(passwordSelections);

    }
    else {
        window.alert("You entered " + passLength + ".  You must enter a number from 8 through 128. Please try again.");
        select();
    }
};

// GENERATE PASSWORD ARRAY
function generate(passwordSelections) {
    console.log(passwordSelections);
    var passArray = [];

    if (passwordSelections.hasLower) {passArray.push(alphabet)};
    if (passwordSelections.hasUpper) {passArray.push(upperAlpha)};
    if (passwordSelections.hasNumber) {passArray.push(number)};
    if (passwordSelections.hasSpecial) {passArray.push(speChar)};



    console.log(passArray);
}

select();