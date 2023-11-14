import { ERROR } from "../Controller/Error.js";
import { CHRISTMAS_EVENT } from "./Constant.js";

const validateDate = {
  checkDateIsNum(numberInput) {
    if (isNaN(numberInput)) {
      throw new Error(ERROR.VISIT_DATE_ERROR);
    }
  },
  checkDateRange(numberInput) {
    if (Number(numberInput) < CHRISTMAS_EVENT.start || Number(numberInput) > CHRISTMAS_EVENT.end) {
      throw new Error(ERROR.VISIT_DATE_ERROR);
    }
  },
  checkDateIsInt(numberInput) {
    if (!Number.isInteger(Number(numberInput))) {
      throw new Error(ERROR.VISIT_DATE_ERROR);
    }
  },

  checkInputEmpty(numberInput) {
    if (numberInput.length === 0) {
      throw new Error(ERROR.VISIT_DATE_ERROR);
    }
  },
};

function validateVisitDateInput(numberInput) {
  validateDate.checkDateIsNum(numberInput);
  validateDate.checkInputEmpty(numberInput);
  validateDate.checkDateRange(numberInput);
  validateDate.checkDateIsInt(numberInput);
}

export { validateVisitDateInput };
