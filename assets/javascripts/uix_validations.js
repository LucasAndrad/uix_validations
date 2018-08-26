// Regex list
var numberPattern = /^[0-9]*$/;
var characterPattern = /^[a-zA-Z]*$/;
var nonDigitPattern = /^[^0-9]*$/;

// From https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
var emailPattern = /\S+@\S+\.\S+/;

// Generic functions
function validatePattern(fieldId, validId, regex) {
  var field = document.querySelector(fieldId);
  field.addEventListener("click", () => {
    var valid = document.querySelector(validId);
    valid.style.display = 'inherit';
    valid.style.background = '#ffffff';
    checkInputValue(field, valid, regex)
    checkInputOut(field, valid, regex);
  });
}
function checkInputOut(field, valid, regex) {
  field.addEventListener("focusout", () => {
    if(regex.test(field.value)) {
      valid.style.background = '#5bff5e'
    }
    else {
      valid.style.background = '#ff8484';
    }
  });
}
function checkInputValue(field, valid, regex) {
  field.addEventListener("keyup", () => {
    if(regex.test(field.value)) {
      valid.style.background = '#5bff5e'
    }
    else {
      valid.style.background = '#ffffff';
    }
  });
}
function setClasses(element, classOut, classIn) {
  element.classList.remove(classOut);
  element.classList.add(classIn);
} 
function setDefaultClass(element) {
  element.className = 'uix-validation';
}
// Can be usefull latter
//var classList = this.className.split(' ');
//  this.className = '';

// function setClass(classOut, classIn) {
//   var element = document.getElementById("test");
//   element.addEventListener("click", () => {
//      if(element.classList.contains("invalid")) {
//        element.classList.remove("invalid");
//        element.classList.add("valid");
//      } else {
//        element.classList.remove("valid");
//        element.classList.add("invalid");
//      }
//   });
// } 

// Specific functions
// Number
function validateNumber(fieldId, validId) {
  validatePattern(fieldId, validId, numberPattern);
}
function validateNumberRange(fieldId, validId, range=[0,10]) {
  var numberRangePattern = new RegExp(`^\\d{`+range[0]+`,`+range[1]+`}$`);
  validatePattern(fieldId, validId, numberRangePattern);
}
// Character
function validateCharacter(fieldId, validId) {
  validatePattern(fieldId, validId, characterPattern);
}
function validateCharacterRange(fieldId, validId, range=[0,10]) {
  var characterRangePattern = new RegExp(`^\[a-zA-Z]{`+range[0]+`,`+range[1]+`}$`);
  validatePattern(fieldId, validId, characterRangePattern);
}
// Non digit
function validateNonDigit(fieldId, validId) {
  validatePattern(fieldId, validId, nonDigitPattern);
}
function validateNonDigitRange(fieldId, validId, range=[0,10]) {
  var nonDigitRangePattern = new RegExp(`^\\D{`+range[0]+`,`+range[1]+`}$`);
  validatePattern(fieldId, validId, nonDigitRangePattern);
}
// Email
function validateEmail(fieldId, validId) {
  validatePattern(fieldId, validId, emailPattern);
}
// Range
function validateJustRange(fieldId, validId, range=[0,10]) {
  var rangePattern = new RegExp(`^\\S{`+range[0]+`,`+range[1]+`}$`);
  validatePattern(fieldId, validId, rangePattern);
}