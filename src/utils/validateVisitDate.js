import { ERROR } from "../Controller/Error.js";

const validateDate = {
  checkDateIsNum(numberInput) {
    if (isNaN(numberInput)) {
      throw new Error(ERROR.VISIT_DATE_ERROR);
    }
  },
  checkDateRange(numberInput) {
    if (Number(numberInput) < 1 || Number(numberInput) > 31) {
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
