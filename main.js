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
}

function analyzeArray() {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
