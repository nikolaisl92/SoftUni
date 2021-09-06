function passValidator(pass) {
  function isValidLength(string) {
    if (string.length >= 6 && string.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  function isValidDigits(string) {
    for (const char of string) {
      let charCode = char.charCodeAt(0);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        return false;
      }
    }
    return true;
  }
  function hasAtLeastTwoDigits(string) {
    let counter = 0;
    for (const char of string) {
      let charCode = char.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        counter++;
      }
    }
    if (counter >= 2) {
      return true;
    } else {
      return false;
    }
  }
  let isLengthValid = isValidLength(pass);
  let containsDigits = isValidDigits(pass);
  let containsTwoDigits = hasAtLeastTwoDigits(pass);

  if (isLengthValid && containsDigits && containsTwoDigits) {
      console.log(`Password is valid`);
      return;
  }
  if (!isLengthValid) {
      console.log(`Password must be between 6 and 10 characters`);
  }
  if (!containsDigits) {
      console.log('Password must consist only of letters and digits')
  }
  if (!containsTwoDigits) {
      console.log(`Password must have at least 2 digits`)
  }
}
passValidator("logIn");
