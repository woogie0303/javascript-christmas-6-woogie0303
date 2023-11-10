import { validateVisitDateInput } from "../utils/validateVisitDate.js";

class EventPlan {
  #visitDate;

  setVisitDate(date) {
    validateVisitDateInput(date);
    this.#visitDate = date;
  }
}

export default EventPlan;
