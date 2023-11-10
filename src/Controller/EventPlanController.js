import { ERROR_HANDLING } from "./Error.js";

class EventPlanController {
  async visitDateHandler(eventPlan, visitDateInput) {
    try {
      eventPlan.setVisitDate(visitDateInput);
    } catch (err) {
      ERROR_HANDLING[err.message](eventPlan, err.message);
    }
  }
}

const eventPlanController = new EventPlanController();

export default eventPlanController;
