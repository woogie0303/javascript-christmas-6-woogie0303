const validateDate = {
  checkDateIsNum(numberInput) {
    if (isNaN(numberInput)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  },
  checkDateRange(numberInput) {
    if (Number(numberInput) < 1 || Number(numberInput) > 31) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  },
  checkDateIsInt(numberInput) {
    if (!Number.isInteger(Number(numberInput))) {
      throw new Error("[ERROR] 숫자는 정수여야 합니다.");
    }
  },

  checkInputEmpty(numberInput) {
    if (numberInput.length === 0) {
      throw new Error("[ERROR] 값은 비어있으면 안됩니다.");
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
