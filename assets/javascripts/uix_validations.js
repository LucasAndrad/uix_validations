// Regex list
var numberPattern = /^[0-9]*$/;
var characterPattern = /^\w/;

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