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
};

export default OutputView;
