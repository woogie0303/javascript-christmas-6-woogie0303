import EventPlan from "../src/Model/EventPlan";

describe("할인 테스트", () => {
  let eventPlan;
  beforeEach(() => {
    eventPlan = new EventPlan();
  });

  test("주문 메뉴 할인 전 총금액", () => {
    // given
    eventPlan.setOrderMenu("티본스테이크-1,타파스-1");

    // when
    const totalPrice = eventPlan.addTotalPrice();

    // then
    expect(totalPrice).toEqual(60500);
  });

  test("주문금액이 12만원 이상이면 증정 이벤트가 적용된다.", () => {
    // given
    eventPlan.setOrderMenu("티본스테이크-3,타파스-1");

    // when
    const benefit = eventPlan.applyEvent();

    // then
    expect(benefit["증정 이벤트"]).toEqual(25000);
  });

  test.each([
    { dateInput: "1", expect: 1000 },
    { dateInput: "25", expect: 3400 },
    { dateInput: "13", expect: 2200 },
  ])("크리스마스 디데이 할인", (input) => {
    // given
    eventPlan.setVisitDate(input.dateInput);
    eventPlan.setOrderMenu("티본스테이크-3,타파스-1");

    // when
    const benefit = eventPlan.applyEvent();

    // then
    expect(benefit["크리스마스 디데이 할인"]).toEqual(input.expect);
  });

  test("구입금액이 10,000이 안 넘으면 혜택이 적용이 안된다", () => {
    // given
    eventPlan.setVisitDate("1");
    eventPlan.setOrderMenu("타파스-1");

    // when
    const benefit = eventPlan.applyEvent();

    //  then
    expect(benefit).toEqual({});
  });

  test("주말 할인을 적용한다", () => {
    // given
    const input = { dateInput: "1", menuInput: "티본스테이크-1,바비큐립-1,타파스-1", expect: 4046 };

    //when
    eventPlan.setVisitDate(input.dateInput);
    eventPlan.setOrderMenu(input.menuInput);
    const benefit = eventPlan.applyEvent();

    //then
    expect(benefit["주말 할인"]).toEqual(input.expect);
  });

  test("평일 할인을 적용한다", () => {
    // given
    eventPlan.setVisitDate("4");
    eventPlan.setOrderMenu("초코케이크-2,아이스크림-1");

    //when
    const benefit = eventPlan.applyEvent();

    //then
    expect(benefit["평일 할인"]).toEqual(6069);
  });

  test.each([
    { dateInput: "3", menuInput: "초코케이크-2,아이스크림-1", expect: 1000 },
    { dateInput: "25", menuInput: "초코케이크-2,아이스크림-1", expect: 1000 },
  ])("특별 할인을 적용한다", (input) => {
    //given
    eventPlan.setVisitDate(input.dateInput);
    eventPlan.setOrderMenu(input.menuInput);

    // when
    const benefit = eventPlan.applyEvent();

    //then
    expect(benefit["특별 할인"]).toEqual(input.expect);
  });

  test("10,000원이 넘어도 이벤트가 적용이 안되는 경우", () => {
    // given
    eventPlan.setVisitDate("29");
    eventPlan.setOrderMenu("타파스-2,시저샐러드-1");

    // when
    const benefit = eventPlan.applyEvent();

    //then
    expect(benefit).toEqual({});
  });
});

describe("할인 후 테스트", () => {
  let eventPlan;
  beforeEach(() => {
    eventPlan = new EventPlan();
  });

  test("알맞은 총혜택 금액을 반환한다.", () => {
    // given
    eventPlan.setVisitDate("1");
    eventPlan.setOrderMenu("바비큐립-2,해산물파스타-3");

    // when
    const benefitPrice = eventPlan.sortAfterChristmasDiscount();

    // then
    expect(benefitPrice.totalBenefitPrice).toEqual(36115);
  });

  test.each([
    { visitDate: "1", orderMenu: "바비큐립-2,해산물파스타-3", expectValue: 201885 },
    { visitDate: "1", orderMenu: "해산물파스타-2,초코케이크-1", expectValue: 79954 },
  ])("알맞은 할인 후 금액을 반환한다.", (input) => {
    // given
    eventPlan.setVisitDate(input.visitDate);
    eventPlan.setOrderMenu(input.orderMenu);

    // when
    const benefitPrice = eventPlan.sortAfterChristmasDiscount();

    // then
    expect(benefitPrice.discountTotalPrice).toEqual(input.expectValue);
  });
});
