import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBeforeChristmasDiscount(orderMenu, visitDate, totalPrice) {
    this.printMessage(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
    this.printMessage("<주문 메뉴>");

    Object.keys(orderMenu).forEach((menuName) => {
      this.printMessage(`${menuName} ${orderMenu[menuName]}개`);
    });

    this.printMessage("\n<할인 전 총주문 금액>");
    this.printMessage(`${totalPrice.toLocaleString()}원`);
  },

  printChristmasDiscount(benefit) {
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

  printAfterChristmasDiscount(afterDiscount) {
    this.printMessage("\n<총혜택 금액>");
    this.printMessage(`${afterDiscount.totalBenefitPrice === 0 ? "0" : Number(-afterDiscount.totalBenefitPrice).toLocaleString()}원`);
    this.printMessage("\n<할인 후 예상 결제 금액>");
    this.printMessage(`${afterDiscount.discountTotalPrice.toLocaleString()}원`);
    this.printMessage("\n<12월 이벤트 배지>");
    this.printMessage(`${afterDiscount.eventBadge ? afterDiscount.eventBadge : "없음"}`);
  },
};

export default OutputView;
