// Regex list
var numberPattern = /^\d/;

// Generic functions
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
function validateNumber(fieldId, valiId) {
  var field = document.querySelector(fieldId);
  field.addEventListener("click", () => {
    var valid = document.querySelector(valiId);
    valid.style.display = 'inherit';
    valid.style.background = '#ffffff';
    checkInput(field, valid, numberPattern)
    checkInputOut(field, valid, numberPattern);
  });
}