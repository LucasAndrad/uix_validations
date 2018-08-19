// Regex list
var numberPattern = /^[0-9]*$/;
var characterPattern = /^[a-zA-Z]*$/;
var nonDigitPattern = /^[^0-9]*$/;

// Generic functions
function validate(fieldId, validId, regex) {
  var field = document.querySelector(fieldId);
  field.addEventListener("click", () => {
    var valid = document.querySelector(validId);
    valid.style.display = 'inherit';
    valid.style.background = '#ffffff';
    checkInput(field, valid, regex)
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
function checkInput(field, valid, regex) {
  field.addEventListener("keyup", () => {
    if(regex.test(field.value)) {
      valid.style.background = '#5bff5e'
    }
    else {
      valid.style.background = '#ffffff';
    }
  });
}

// Specific functions
function validateNumber(fieldId, validId) {
  validate(fieldId, validId, numberPattern);
}
function validateNumberRange(fieldId, validId, range=[0,10]) {
  var numberRangePattern = new RegExp(`^\\d{`+range[0]+`,`+range[1]+`}$`);
  validate(fieldId, validId, numberRangePattern);
}
function validateCharacter(fieldId, validId) {
  validate(fieldId, validId, characterPattern);
}
function validateCharacterRange(fieldId, validId, range=[0,10]) {
  var characterRangePattern = new RegExp(`^\\D{`+range[0]+`,`+range[1]+`}$`);
  validate(fieldId, validId, characterRangePattern);
}
function validateNonDigit(fieldId, validId) {
  validate(fieldId, validId, nonDigitPattern);
}
function validateNonDigitRange(fieldId, validId, range=[0,10]) {
  var nonDigitRangePattern = new RegExp(`^\\D{`+range[0]+`,`+range[1]+`}$`);
  validate(fieldId, validId, nonDigitRangePattern);
}