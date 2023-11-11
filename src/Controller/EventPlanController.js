import InputView from "../View/InputView.js";
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
      this.beforeChristmasEventHandler(eventPlanController);
    } catch (err) {
      ERROR_HANDLING[err.message](eventPlan, err.message);
    }
  }

  beforeChristmasEventHandler(eventPlan) {
    const orderMenu = eventPlan.addTotalPrice();
  }
}

const eventPlanController = new EventPlanController();

export default eventPlanController;
