import luhnAlgorithm from "./luhn-algorithm";

test("expect true", () => {
  expect(luhnAlgorithm("5288437207308798")).toBe(true);
});

test("expect false with incorrect symbols", () => {
  expect(luhnAlgorithm("349019582429833```")).toBe(false);
});

test("expect true__", () => {
  expect(luhnAlgorithm("3544108005812127516")).toBe(true);
});

test("expect false", () => {
  expect(luhnAlgorithm("50206852752870121312")).toBe(false);
});
