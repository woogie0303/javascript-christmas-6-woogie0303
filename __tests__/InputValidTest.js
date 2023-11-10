import { validateVisitDateInput } from "../src/utils/validateVisitDate.js";

describe("방문 날짜 인풋 유효성 검사", () => {
  test.each([[""], ["slkdf"]])("방문 날짜가 숫자가 아니면 예외 처리 한다.", (input) => {
    expect(() => {
      validateVisitDateInput(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1.2"], ["0"], ["32"]])("방문 날짜가 정수가 아니거나 1부터 31사이에 있지 않을 경우", (input) => {
    expect(() => {
      validateVisitDateInput(input);
    }).toThrow("[ERROR]");
  });
});
