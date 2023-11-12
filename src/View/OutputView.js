import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBeforeChristmasEvent(orderMenu, totalPrice) {
    this.printMessage("12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n");
    this.printMessage("<주문 메뉴>");

    Object.keys(orderMenu).forEach((menuName) => {
      this.printMessage(`${menuName} ${orderMenu[menuName]}개`);
    });

    this.printMessage("\n<할인 전 총주문 금액>");
    this.printMessage(`${totalPrice.toLocaleString()}`);
  },

  printChristmasEvent(benefit) {
    this.printMessage("\n<증정 메뉴>");
    this.printMessage(`${benefit.hasOwnProperty("증정 이벤트") ? "샴페인 1개" : "없음"}`);
    this.printMessage("\n<혜택 내역>");

    if (Object.keys(benefit).length === 0) {
      this.printMessage("없음");
      return;
    }

    Object.keys(benefit).forEach((eventName) => {
      this.printMessage(`${eventName}: -${benefit[eventName].toLocaleString()}원`);
    });
  },
};

export default OutputView;
