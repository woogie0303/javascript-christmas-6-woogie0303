import { ERROR } from "../Controller/Error.js";
import { christmasMenu, menuCategory } from "../Model/EventData.js";

const validateMenu = {
  checkEqaulMenu(orderMenu, menuName) {
    if (orderMenu[menuName] !== undefined) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },

  checkExistMenu(menuName) {
    if (!christmasMenu.hasOwnProperty(menuName)) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },

  checkAmountNum(menuAmount) {
    if (isNaN(menuAmount)) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },

  checkAmountIsInteger(menuAmount) {
    if (!Number.isInteger(Number(menuAmount))) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },

  checkAmountRange(menuAmount) {
    if (Number(menuAmount) < 1) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },

  checkAmountLimit(orderMenu) {
    let total = 0;
    Object.values(orderMenu).forEach((amount) => {
      total += amount;
    });

    if (total > 20) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },

  checkOnlyDrinks(orderMenu) {
    let count = 0;
    Object.keys(orderMenu).forEach((menuName) => {
      menuCategory.drink.includes(menuName) ? (count += 1) : "";
    });

    if (count === Object.keys(orderMenu).length) {
      throw new Error(ERROR.ORDER_MENU_ERROR);
    }
  },
};

function validateMenuInput(menuItem, orderMenu) {
  const [name, amount] = menuItem;

  validateMenu.checkEqaulMenu(orderMenu, name);
  validateMenu.checkExistMenu(name);
  validateMenu.checkAmountNum(amount);
  validateMenu.checkAmountRange(amount);
  validateMenu.checkAmountIsInteger(amount);

  return { [name]: Number(amount) };
}

function checkEventCaution(orderMenu) {
  validateMenu.checkAmountLimit(orderMenu);
  validateMenu.checkOnlyDrinks(orderMenu);
}

export { validateMenuInput, checkEventCaution };
