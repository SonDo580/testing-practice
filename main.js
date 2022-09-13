function capitalize(str) {
  if (str.trim() === "") {
    return "";
  }

  let arrChar = str.split("");
  arrChar[0] = arrChar[0].toUpperCase();
  return arrChar.join("");
}

function reverseString() {}

const calculator = {
  add() {},
  subtract() {},
  divide() {},
  multiply() {},
};

function caesarCipher() {}
function analyzeArray() {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
