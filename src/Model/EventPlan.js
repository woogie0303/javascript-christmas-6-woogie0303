import { validateVisitDateInput } from "../utils/validateVisitDate.js";
import { validateMenuInput, checkEventCaution } from "../utils/validateMenu.js";
import { christmasMenu, menuCategory } from "./EventData.js";
import { CHRISTMAS_EVENT, EVENT_PRICE } from "../utils/Constant.js";

class EventPlan {
  #visitDate;
  #orderMenu;

  get getOrderMenu() {
    return this.#orderMenu;
  }

  get getVisitDate() {
    return this.#visitDate;
  }

  setVisitDate(date) {
    validateVisitDateInput(date);
    this.#visitDate = Number(date);
  }

  setOrderMenu(menuInput) {
    const menu = menuInput.split(",").map((menu) => menu.split("-"));
    const orderMenu = {};

    menu.forEach((menuItem) => {
      const menuItemObj = validateMenuInput(menuItem, orderMenu);

      Object.assign(orderMenu, menuItemObj);
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
    if (this.addTotalPrice() >= EVENT_PRICE.minimumOrderPrice) {
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
    if (totalBenefitPrice >= EVENT_PRICE.badgeSantaPrice) {
      return "산타";
    }
    if (totalBenefitPrice >= EVENT_PRICE.badgeTreePrice) {
      return "트리";
    }
    if (totalBenefitPrice >= EVENT_PRICE.badgeStarPrice) {
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

    if (totalPrice >= EVENT_PRICE.giftMinimumPrice) {
      return { "증정 이벤트": EVENT_PRICE.champagnePrice };
    }
  }

  checkChrisMasDayDiscount() {
    if (this.#visitDate >= CHRISTMAS_EVENT.d_dayDiscountStart && this.#visitDate <= CHRISTMAS_EVENT.d_dayDiscountEnd) {
      const christmasDayDiscountPrice = EVENT_PRICE.chrismasDayStartPrice + (this.#visitDate - 1) * 100;

      return { "크리스마스 디데이 할인": christmasDayDiscountPrice };
    }
  }

  checkDayDiscount() {
    const day = new Date(`2023-12-${this.#visitDate}`).getDay();

    if (day === CHRISTMAS_EVENT.friday || day === CHRISTMAS_EVENT.saturday) {
      return this.discountMenu("weekend");
    }

    if (day >= CHRISTMAS_EVENT.sunday && day <= CHRISTMAS_EVENT.thursday) {
      return this.discountMenu("weekday");
    }
  }

  checkSpecialDayDisCount() {
    const day = new Date(`2023-12-${this.#visitDate}`).getDay();

    if (day === CHRISTMAS_EVENT.sunday || this.#visitDate === CHRISTMAS_EVENT.christmasDay) {
      return { "특별 할인": EVENT_PRICE.specialEventPrice };
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
      const totalDisCount = totalDishes * EVENT_PRICE.dayDiscountPrice;
      return { [discountType]: totalDisCount };
    }
  }
}

export default EventPlan;
