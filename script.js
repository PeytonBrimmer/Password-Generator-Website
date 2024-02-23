// Assignment Code
var generateBtn = document.querySelector("#generate");




  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// ------------------------------------------------


// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("Enter Password length (min 8 max 128):")); 
if (isNaN(length) || length < 8 || lengthength > 128) {
alert("Please enter a valid password length between 8 and 128 characters")
return;
  }

  var includeLowercase = confirm("include lowercase characters?");
  var includeUppercase = confirm("include uppercase characters");  
  var includeNumeric = confirm("include numeric characters?"); 
  var includeSpecial = confirm("include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("chose character types to be included");
    return;
  }

  var characterSet ="";
  if (includeLowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) characterSet += "1234567890";
  if (includeSpecial) characterSet += "!)(*&^%$#_+-={}[]?/<>.@";

  var generatePassword();
  for(var i=0;i <length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  alert("Generated Password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writ`ePassword);