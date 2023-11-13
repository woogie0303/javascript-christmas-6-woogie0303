import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import { ERROR_HANDLING } from "./Error.js";

class EventPlanController {
  visitDateHandler(eventPlan, visitDateInput) {
    try {
      eventPlan.setVisitDate(visitDateInput);
      InputView.readMenu(eventPlan);
    } catch (err) {
      ERROR_HANDLING[err.message](eventPlan, err.message);
    }
  }

  ordermenuHandler(eventPlan, orderMenuInput) {
    try {
      eventPlan.setOrderMenu(orderMenuInput);
      this.beforeChristmasDiscountHandler(eventPlan);
    } catch (err) {
      ERROR_HANDLING[err.message](eventPlan, err.message);
    }
  }

  beforeChristmasDiscountHandler(eventPlan) {
    const totalPrice = eventPlan.addTotalPrice();

    OutputView.printBeforeChristmasDiscount(eventPlan.getOrderMenu, totalPrice);
    this.christmasDiscountHandler(eventPlan);
  }

  christmasDiscountHandler(eventPlan) {
    const benefit = eventPlan.applyEvent();

    OutputView.printChristmasDiscount(benefit);
    this.afterChristmasDiscountHandler(eventPlan);
  }

  afterChristmasDiscountHandler(eventPlan) {
    const afterDiscount = eventPlan.sortAfterChristmasDiscount();

    OutputView.printAfterChristmasDiscount(afterDiscount);
  }
}

const eventPlanController = new EventPlanController();

export default eventPlanController;
