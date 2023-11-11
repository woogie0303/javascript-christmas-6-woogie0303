import EventPlan from "../src/Model/EventPlan.js";
import { validateMenuInput } from "../src/utils/validateMenu.js";
import { validateVisitDateInput } from "../src/utils/validateVisitDate.js";

describe("인풋 유효성 검사", () => {
  const eventPlan = new EventPlan();
  test.each([[""], ["slkdf"]])("방문 날짜가 숫자가 아니면 예외 처리한다.", (input) => {
    expect(() => {
      validateVisitDateInput(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1.2"], ["0"], ["32"]])("방문 날짜가 정수가 아니거나 1부터 31사이에 있지 않을 경우 예외 처리한다.", (input) => {
    expect(() => {
      validateVisitDateInput(input);
    }).toThrow("[ERROR]");
  });

  test("메뉴판에 없는 메뉴를 입력하면 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("초코파이-1,타파스-1");
    }).toThrow("[ERROR]");
  });

  test.each([["티본스테이크1, 타파스1"], ["티본스테이크-1타파스-1"]])("메뉴의 형식이 예시와 다른 경우 예외 처리한다.", (input) => {
    expect(() => {
      eventPlan.setOrderMenu(input);
    }).toThrow("[ERROR]");
  });

  test("중복 메뉴를 입력한 경우 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("티본스테이크-1,티본스테이크-1");
    }).toThrow("[ERROR]");
  });

  test("아무것도 입력을 안하면 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("");
    }).toThrow("[ERROR]");
  });

  test("메뉴가 20개가 넘어가면 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("티본스테이크-1,타파스-21");
    }).toThrow("[ERROR]");
  });

  test("음료만 주문하면 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("제로콜라-3,레드와인-1");
    }).toThrow("[ERROR]");
  });

  test("메뉴의 개수가 숫자가 아닌 값을 입력하면 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("티본스테이크-a,타파스-10");
    }).toThrow("[ERROR]");
  });

  test("메뉴의 개수가 정수가 아니면 예외 처리한다.", () => {
    expect(() => {
      eventPlan.setOrderMenu("티본스테이크-1.2,타파스-21");
    }).toThrow("[ERROR]");
  });
});
