import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import { ERROR_HANDLING } from "./Error.js";

class EventPlanController {
  visitDateHandler(eventPlan, visitDateInput) {
    try {
      eventPlan.setVisitDate(visitDateInput);
      InputView.readMenu(eventPlan);
    } catch (err) {
      console.log(err);
      ERROR_HANDLING[err.message](eventPlan, err.message);
    }
  }

  ordermenuHandler(eventPlan, orderMenuInput) {
    try {
      eventPlan.setOrderMenu(orderMenuInput);
      this.beforeChristmasEventHandler(eventPlan);
    } catch (err) {
      console.log(err);
      ERROR_HANDLING[err.message](eventPlan, err.message);
    }
  }

  beforeChristmasEventHandler(eventPlan) {
    const totalPrice = eventPlan.addTotalPrice();
    OutputView.printBeforeChristmasEvent(eventPlan.getOrderMenu, totalPrice);
  }
}

const eventPlanController = new EventPlanController();

export default eventPlanController;
