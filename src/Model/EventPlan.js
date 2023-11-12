import { validateVisitDateInput } from "../utils/validateVisitDate.js";
import { validateMenuInput, checkEventCaution } from "../utils/validateMenu.js";
import { christmasMenu, menuCategory } from "./EventData.js";

class EventPlan {
  #visitDate;
  #orderMenu;

  get getOrderMenu() {
    return this.#orderMenu;
  }

  setVisitDate(date) {
    validateVisitDateInput(date);
    this.#visitDate = Number(date);
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

    return totalPrice;
  }

  applyEvent() {
    let benefit = {};
    if (this.addTotalPrice() >= 10000) {
      benefit = this.categorizeBenefit();
    }

    return benefit;
  }

  sortAfterChristmasDiscount() {
    const totalBenefitPrice = this.calculateTotalBenefitPrice();
    const discountTotalPrice = this.calculateDiscountTotalPrice(totalBenefitPrice);
    const eventBadge = this.checkEventBadge(totalBenefitPrice);

    return { totalBenefitPrice, discountTotalPrice, eventBadge };
  }

  calculateTotalBenefitPrice() {
    const benefit = this.applyEvent();
    let totalBenfitPrice = 0;

    if (Object.keys(benefit).length === 0) {
      return totalBenfitPrice;
    }

    Object.keys(benefit).forEach((eventName) => {
      totalBenfitPrice += benefit[eventName];
    });

    return totalBenfitPrice;
  }

  calculateDiscountTotalPrice(totalBenefitPrice) {
    const benefit = this.applyEvent();
    const discountTotalPrice = this.addTotalPrice() - totalBenefitPrice;

    if (benefit.hasOwnProperty("증정 이벤트")) {
      return discountTotalPrice + benefit["증정 이벤트"];
    }

    return discountTotalPrice;
  }

  checkEventBadge(totalBenefitPrice) {
    if (totalBenefitPrice >= 20000) {
      return "산타";
    }
    if (totalBenefitPrice >= 10000) {
      return "트리";
    }
    if (totalBenefitPrice >= 5000) {
      return "별";
    }
  }

  categorizeBenefit() {
    const giftEvent = this.checkGiftEvent();
    const christmasDayDiscount = this.checkChrisMasDayDiscount();
    const dayDiscount = this.checkDayDiscount();
    const specialDayDiscount = this.checkSpecialDayDisCount();
    const benefit = Object.assign({}, giftEvent, christmasDayDiscount, dayDiscount, specialDayDiscount);

    return benefit;
  }

  checkGiftEvent() {
    const totalPrice = this.addTotalPrice();

    if (totalPrice >= 120000) {
      return { "증정 이벤트": 25000 };
    }
  }

  checkChrisMasDayDiscount() {
    if (this.#visitDate >= 1 && this.#visitDate <= 25) {
      const christmasDayDiscountPrice = 1000 + (this.#visitDate - 1) * 100;

      return { "크리스마스 디데이 할인": christmasDayDiscountPrice };
    }
  }

  checkDayDiscount() {
    const day = new Date(`2023-12-${this.#visitDate}`).getDay();

    if (day === 5 || day === 6) {
      return this.discountMenu("weekend");
    }

    if (day >= 0 && day <= 4) {
      return this.discountMenu("weekday");
    }
  }

  checkSpecialDayDisCount() {
    const day = new Date(`2023-12-${this.#visitDate}`).getDay();

    if (day === 0 || this.#visitDate === 25) {
      return { "특별 할인": 1000 };
    }
  }

  discountMenu(type) {
    let totalDishes = 0;
    const menuType = type === "weekend" ? menuCategory.main : menuCategory.dessert;
    const discountType = type === "weekend" ? "주말 할인" : "평일 할인";

    Object.keys(this.#orderMenu).forEach((menuName) => {
      menuType.includes(menuName) ? (totalDishes += this.#orderMenu[menuName]) : "";
    });

    if (totalDishes !== 0) {
      const totalDisCount = totalDishes * 2023;
      return { [discountType]: totalDisCount };
    }
  }
}

export default EventPlan;
