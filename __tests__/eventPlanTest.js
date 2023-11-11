import EventPlan from "../src/Model/EventPlan";

describe("evnentPlan 테스트", () => {
  let eventPlan;
  beforeEach(() => {
    eventPlan = new EventPlan();
  });

  test("주문 메뉴 할인 전 총금액", () => {
    // given
    const orderMenuInput = "티본스테이크-1,타파스-1";

    // when
    eventPlan.setOrderMenu(orderMenuInput);
    const orderMenu = eventPlan.addTotalPrice();

    // then
    expect(orderMenu.menuTotalPrice).toEqual(60500);
  });
});
