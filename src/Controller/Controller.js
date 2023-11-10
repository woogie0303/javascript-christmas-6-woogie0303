import Model from "../Model/Model.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

class Controller {
  constructor() {
    this.model = new Model();
  }

  async initHandler() {
    OutputView.printMessage("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");

    const dateInput = await InputView.readInput("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
    this.model.setVisitDate(dateInput);
  }
}

const controller = new Controller();

export default controller;
