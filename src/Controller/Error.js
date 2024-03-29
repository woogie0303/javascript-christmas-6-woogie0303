import errorView from "../View/ErrorView.js";
import InputView from "../View/InputView.js";

const ERROR = {
  VISIT_DATE_ERROR: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  ORDER_MENU_ERROR: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

const ERROR_HANDLING = {
  "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.": (eventPlan, message) => {
    errorView.printError(message);
    InputView.readDate(eventPlan);
  },
  "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.": (eventPlan, message) => {
    errorView.printError(message);
    InputView.readMenu(eventPlan);
  },
};
export { ERROR, ERROR_HANDLING };
