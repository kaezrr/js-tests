import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

test("capitalize works properly", () => {
  expect(capitalize("kryptos")).toBe("Kryptos");
  expect(capitalize("Red")).toBe("Red");
  expect(capitalize("a")).toBe("A");
});

test("reverseString works properly", () => {
  expect(reverseString("kryptos")).toBe("sotpyrk");
  expect(reverseString("Red")).toBe("deR");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("racecar drives")).toBe("sevird racecar");
});

test("calculator works properly", () => {
  let calc = new Calculator();
  expect(calc.add(1.2, 3)).toBe(4.2);
  expect(calc.subtract(1.5, 3)).toBe(-1.5);
  expect(calc.multiply(2, 3.5)).toBe(7);
  expect(calc.divide(15, 2)).toBe(7.5);
});

test("caesarCipher works properly", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray works properly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
