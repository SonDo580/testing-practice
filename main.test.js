import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main";

test("Empty string", () => {
  expect(capitalize("")).toBe("");
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
