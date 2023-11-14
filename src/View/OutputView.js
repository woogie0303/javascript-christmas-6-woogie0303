import { Console } from "@woowacourse/mission-utils";
import { CHRISTMAS_EVENT, EVENT_PRICE } from "../utils/Constant.js";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBeforeChristmasDiscount(orderMenu, visitDate, totalPrice) {
    this.printMessage(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
    this.printMessage(CHRISTMAS_EVENT.orderMenuTitle);

    Object.keys(orderMenu).forEach((menuName) => {
      this.printMessage(`${menuName} ${orderMenu[menuName]}개`);
    });

    this.printMessage(CHRISTMAS_EVENT.beforeDiscountPriceTitle);
    this.printMessage(`${totalPrice.toLocaleString()}원`);
  },

  printChristmasDiscount(benefit) {
    this.printMessage(CHRISTMAS_EVENT.giftMenuTitle);
    this.printMessage(`${benefit.hasOwnProperty("증정 이벤트") ? CHRISTMAS_EVENT.printChampagneMenu : CHRISTMAS_EVENT.printNothing}`);
    this.printMessage(CHRISTMAS_EVENT.benefitTitle);

    if (Object.keys(benefit).length === 0) {
      this.printMessage(CHRISTMAS_EVENT.printNothing);
      return;
    }

    Object.keys(benefit).forEach((eventName) => {
      this.printMessage(`${eventName}: -${benefit[eventName].toLocaleString()}원`);
    });
  },

  printAfterChristmasDiscount(afterDiscount) {
    this.printMessage(CHRISTMAS_EVENT.totalBenefitPriceTitle);
    this.printMessage(`${afterDiscount.totalBenefitPrice === 0 ? "0" : Number(-afterDiscount.totalBenefitPrice).toLocaleString()}원`);
    this.printMessage(CHRISTMAS_EVENT.afterDiscountTotalPriceTitle);
    this.printMessage(`${afterDiscount.discountTotalPrice.toLocaleString()}원`);
    this.printMessage(CHRISTMAS_EVENT.eventBadgeTitle);
    this.printMessage(`${afterDiscount.eventBadge ? afterDiscount.eventBadge : CHRISTMAS_EVENT.printNothing}`);
  },
};

export default OutputView;
