import { validateVisitDateInput } from "../utils/validateVisitDate.js";
import { validateMenuInput, checkEventCaution } from "../utils/validateMenu.js";
import { christmasMenu } from "./EventData.js";

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

  addTotalPrice() {
    let totalPrice = 0;

    Object.keys(this.#orderMenu).forEach((menuName) => {
      totalPrice += christmasMenu[menuName] * this.#orderMenu[menuName];
    });

    this.#orderMenu["menuTotalPrice"] = totalPrice;

    return this.#orderMenu;
  }
}

export default EventPlan;
