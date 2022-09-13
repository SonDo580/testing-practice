function capitalize(str) {
  if (str.trim() === "") {
    return "";
  }

  let arrChar = str.split("");
  arrChar[0] = arrChar[0].toUpperCase();
  return arrChar.join("");
}

function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  }

  return str.split("").reverse().join("");
}

const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  divide(x, y) {
    if (y === 0) {
      return NaN;
    }

    return x / y;
  },
  multiply(x, y) {
    return x * y;
  },
};

function caesarCipher(str, shift) {
  if (str.trim() === "") {
    return str;
  }

  shift = shift % 26; // There're 26 letters

  let arrChar = str.split("");
  let encArrChar = arrChar.map((char) => {
    if (!_isLetter(char)) {
      return char;
    }
  });
}

function _isLetter(char) {
  const letterRegex = /[A-Za-z]/;
  return letterRegex.test(char);
}

function _shiftChar(char, shift) {
  let charCode = char.charCodeAt(0);
  let newCharCode = charCode + shift;

  if (charCode >= 97 && charCode <= 122) {
    // lowercase letter
    if (newCharCode > 122) {
      newCharCode = 97 + (newCharCode - 122);
    }
  }

  if (charCode >= 65 && charCode <= 90) {
    // uppercase letter
    if (newCharCode > 90) {
      newCharCode = 65 + (newCharCode - 90);
    }
  }
}

function analyzeArray() {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
