export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(word) {
  return word.split("").reverse().join("");
}

export class Calculator {
  subtract(a, b) {
    return a - b;
  }
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

export function caesarCipher(string, diff) {
  return string
    .split("")
    .map((e) => {
      if (e >= "a" && e <= "z") {
        let code = (e.charCodeAt(0) - "a".charCodeAt(0) + diff) % 26;
        return String.fromCharCode("a".charCodeAt(0) + code);
      }
      if (e >= "A" && e <= "Z") {
        let code = (e.charCodeAt(0) - "A".charCodeAt(0) + diff) % 26;
        return String.fromCharCode("A".charCodeAt(0) + code);
      }
      return e;
    })
    .join("");
}

export function analyzeArray(array) {
  return {
    average: array.reduce((e, curr) => curr + e, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
