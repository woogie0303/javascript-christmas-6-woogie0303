import { validateVisitDateInput } from "../utils/validateVisitDate.js";

class Model {
  #visitDate;

  setVisitDate(date) {
    validateVisitDateInput(date);
    this.#visitDate = date;
  }
}

export default Model;
