import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main";

// TEST capitalize
test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

test("All space characters", () => {
  expect(capitalize("   ")).toBe("");
});

test("Non-alphabet characters", () => {
  expect(capitalize("!duck")).toBe("!duck");
});

test("Already capitalize", () => {
  expect(capitalize("Sonic")).toBe("Sonic");
});

test("Need capitalize", () => {
  expect(capitalize("xZero")).toBe("XZero");
});
// END TEST capitalize

// TEST reverseString
test("Reverse empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Reverse 1-character string", () => {
  expect(reverseString("a")).toBe("a");
});

test("Reverse string", () => {
  expect(reverseString("Iron Man")).toBe("naM norI");
});
// END TEST reverseString

// TEST calculator
test("Add integer", () => {
  expect(calculator.add(-1, 4)).toBe(3);
});

test("Add float", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Subtract integer", () => {
  expect(calculator.subtract(1, 4)).toBe(-3);
});

test("Subtract float", () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

test("Multiply integer", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test("Devide by 0", () => {
  expect(calculator.divide(3, 0)).toBe(NaN);
});

test("Devide integer", () => {
  expect(calculator.divide(3, 4)).toBeCloseTo(0.75);
});

test("Devide float", () => {
  expect(calculator.divide(0.8, 4)).toBeCloseTo(0.2);
});
// END TEST calculator

// TEST caesarCipher
test("Encode empty string", () => {
  expect(caesarCipher("", 3)).toBe("");
});

test("Shift 1 character", () => {
  expect(caesarCipher("The zoo?", 1)).toBe("Uif app?");
});

test("Shift 3 character", () => {
  expect(caesarCipher("The zoo!", 3)).toBe("Wkh crr!");
});

test("Shift 29 character", () => {
  expect(caesarCipher("The zoo!", 29)).toBe("Wkh crr!");
});
// END TEST caesarCipher

// TEST analyzeArray
test("Empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test("1-element array", () => {
  expect(analyzeArray([3])).toEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
});

test("Normal array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Average is float", () => {
  let object = analyzeArray([1, 3, 7]);
  let wantedObject = {
    average: 3.67,
    min: 1,
    max: 7,
    length: 3,
  };

  for (let key in object) {
    if (key === "average") {
      expect(object[key]).toBeCloseTo(wantedObject[key]);
    } else {
      expect(object[key]).toEqual(wantedObject[key]);
    }
  }
});
// END TEST analyzeArray
