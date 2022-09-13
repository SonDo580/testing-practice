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
  expect(calculator.add(0.1, 0.2)).toBe(3);
});
// END TEST calculator
