function passValidator(pass) {
  function isVallidLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return "Password must be between 6 and 10 characters";
    }
  }

  function isVallidchars(pass) {
    let isVallidPass = true;
    for (let i = 0; i < pass.length; i++) {
      let isVallid = true;
      let code = pass[i].charCodeAt(0);
      if (
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)
      ) {
        isVallid = true;
      } else {
        isVallid = false;
        isVallidPass = false;
        break;
      }
    }
    return isVallidPass
      ? true
      : "Password must consist only of letters and digits";
  }

  function atLeastOfDigits(pass) {
    let digits = 0;
    for (let i = 0; i < pass.length; i++) {
      let code = pass[i].charCodeAt(0);
      if (code >= 48 && code <= 57) {
        digits++;
      }
    }
    return digits >= 2 ? true : "Password must have at least 2 digits";
  }

  let result = [];
  if (isVallidLength(pass) !== true) {
    result.push(isVallidLength(pass));
  }
  if (isVallidchars(pass) !== true) {
    result.push(isVallidchars(pass));
  }
  if (atLeastOfDigits(pass) !== true) {
    result.push(atLeastOfDigits(pass));
  } 
  if (isVallidLength(pass) === true && isVallidchars(pass) === true && atLeastOfDigits(pass) === true) {
      result.push('Password is valid');
  }
  return result.join("\n");
}
console.log(passValidator("logIn"));
