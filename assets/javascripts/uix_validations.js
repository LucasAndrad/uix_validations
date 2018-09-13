// Regex list
var numberPattern = /^[0-9]*$/;
var characterPattern = /^[a-zA-Z]*$/;
var nonDigitPattern = /^[^0-9]*$/;

// From https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
var emailPattern = /\S+@\S+\.\S+/;


// Flow
// onClick -> set default
// checkinputValue-> 
//   if (enquanto digita se for valid) { SET VALID  }
//   else { SET default }
// checkinputout->
//   if (onFocusOut for valid) { SET VALID  }
//   else { SET INVALID }

// Generic functions
function validatePattern(fieldId, validId, regex) {
  var field = document.querySelector(fieldId);
  field.addEventListener("click", () => {
    var valid = document.querySelector(validId);
    setDefaultClass(valid);
    checkInputValue(field, valid, regex)
    checkInputOut(field, valid, regex);
  });
}
function checkInputOut(field, valid, regex) {
  field.addEventListener("focusout", () => {
    switchClasses(field, valid, regex);
    // find way to get class type
  });
}
function checkInputValue(field, valid, regex) {
  field.addEventListener("keyup", () => {
    switchClasses(field, valid, regex, ['uix-defaulf', 'uix-valid']);
    // find way to get class type
  });
}
function setClasses(element, classIn) {
  element.className = 'uix-validation ' + classIn;
} 
function setDefaultClass(element) {
  element.className = 'uix-validation uix-default';
  element.style.visibility = 'inherit';
}
function switchClasses(field, valid, regex, classes = ['uix-invalid', 'uix-valid']) {
  if(regex.test(field.value) && field.value != '') {
    setClasses(valid, classes[1]);
  }
  else {
    setClasses(valid, classes[0]);
  }
}
// Can be usefull latter
//var classList = this.className.split(' ');

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