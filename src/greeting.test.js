//greeting.test.js
const greeting = require('./greeting');

test("Returns greeting with custom name", () => {
  expect(greeting("Eydis")).toBe("Hello, Eydis!");
});

test("Return greeting with custom name", () => {
  expect(greeting("Snorri")).toBe("Hello, Snorri!");
});
