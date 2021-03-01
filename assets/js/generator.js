// CRITERIA POOL

var alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperAlpha = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var number = [1,2,3,4,5,6,7,8,9,0];
var speChar = ['!','#','$','%','&','@','*','-','?','/',];

// SELECT PASSWORD PARAMETERS
function select() {

    var passLength = window.prompt("How many characters do you want in your password?  Please choose between 8 and 128.");

    var selectLower = window.confirm("Do you want to include lowercase letters?");

    var selectUpper = window.confirm("Do you want to include UPPERCASE letters?");

    var selectNumber = window.confirm("Do you want to include numbers(0-9)?");

    var selectSpecial = window.confirm("Do you want to include special characters (! # $ % & @ * - ? /)?");

    return generate(passLength, selectLower, selectUpper, selectNumber, selectSpecial);
};

// GENERATE PASSWORD ARRAY
function generate(passLength, selectLower, selectUpper, selectNumber, selectSpecial) {
    console.log(passLength, selectLower, selectUpper, selectNumber, selectSpecial);
    var passArray = [];

    if (selectLower) {passArray.push(alphabet)};
    if (selectUpper) {passArray.push(upperAlpha)};
    if (selectNumber) {passArray.push(number)};
    if (selectSpecial) {passArray.push(speChar)};

    console.log(passArray);
}

select();