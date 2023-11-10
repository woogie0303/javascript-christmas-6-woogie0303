import { validateVisitDateInput } from "../utils/validateVisitDate.js";
import { validateMenuInput, checkEventCaution } from "../utils/validateMenu.js";

class EventPlan {
  #visitDate;
  #orderMenu;

  setVisitDate(date) {
    validateVisitDateInput(date);
    this.#visitDate = date;
  }

  setOrderMenu(menuInput) {
    const menu = menuInput.split(",").map((menu) => menu.split("-"));
    const orderMenu = {};

    menu.forEach((menuItem) => {
      validateMenuInput(menuItem, orderMenu);
    });

    checkEventCaution(orderMenu);

    this.#orderMenu = orderMenu;
  }
}

export default EventPlan;
